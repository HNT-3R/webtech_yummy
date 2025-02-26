

//Variablen für den Rest der Methoden definieren
const databaseName = "indexeddb-recipe-db";
const databaseVersion = 1;
const dataStoreBakingName = "bakingRecipes";
const dataStoreCookingName = "cookingRecipes";

/**
 * Eröffnet eine Datenbank, updated sie, wenn nötig mit neuen Feldern.
 * @param dbName Name der zu erstellenden/zu öffnenden Datenbank
 * @param dbVersion Version der zu erstellenden Datenbank
 * @returns {Promise<unknown>} Gibt einen Promise zurück, sodass der Status der asynchronen Operation bekannt ist.
 */

function openDb(dbName, dbVersion) {
    return new Promise((resolve, reject) => {
        console.log("Opening database...");
        const request = indexedDB.open(dbName, dbVersion);

        //bei Erfolg
        request.onsuccess = function (event) {
            console.log("Successfully opened database!");
            resolve(event.target.result); // Promise wird erfolgreich abgeschlossen, das DB erstellt wurde.
        };

        //bei Fehlschlag
        request.onerror = function (event) {
            console.error("Error during database opening: ", event.target.errorCode);
            reject(event.target.error); // Promise wird abgewiesen, da es bei der Erstellung einen Fehler gab.
        };

        //falls Datenbank mit erhöhter Versionsnummer eröffnet werden soll
        request.onupgradeneeded = function (event) {
            console.log("Database upgrade needed.");
            const database = event.target.result;

            //erstelle objectStore für alle Kochrezepte
            if (!database.objectStoreNames.contains(dataStoreCookingName)) {
                const cookingRecipeStore = database.createObjectStore(
                    dataStoreCookingName, { keyPath: "id", autoIncrement: true }
                );
                //eindeutiger Index bei Namen
                cookingRecipeStore.createIndex("recipeName", "recipeName", { unique: true });
            }

            //erstelle objectStore für alle Kochrezepte
            if (!database.objectStoreNames.contains(dataStoreBakingName)) {
                const bakingRecipeStore = database.createObjectStore(
                    dataStoreBakingName, { keyPath: "id", autoIncrement: true }
                );
                //eindeutiger Index bei Namen
                bakingRecipeStore.createIndex("recipeName", "recipeName", { unique: true });
            }
        };
    });
}

/**
 * Eröffnet eine Transaktion an der Indexed Datenbank.
 * @param storeName Name der zu modifizierenden objectStorage
 * @param mode Modus in der die Transaktion sein soll (readonly vs. readwrite)
 * @returns {Promise<{transaction: *, objectStore: *}>} Transaction sodass diese lang genug offen bleibt
 * und objectStore um daran die Objekte auszulesen
 */

async function startTransaction(storeName, mode) {
    const database = await openDb(databaseName, databaseVersion);
    const transaction = database.transaction(storeName, mode);
    const objectStore = transaction.objectStore(storeName);
    console.log("Opened transaction successfully!");
    //gebe beides zurück, da transaction sonst zu früh geschlossen wird
    return { transaction, objectStore };
}

/**
 * Fügt der Datenbank neue Rezepte hinzu in der jeweiligen Storage.
 * Neu hinzugefügte Rezepte werden nicht vorher geprüft und können somit nicht gleich der anderen Objekte sein.
 * Jedoch benötigt hier jedes Rezept einen Namen, da er als Primary Key gilt.
 * Wird u.A. benötigt für den Hinzufügen-Dialog.
 * @param storeName Name der zu modifizierenden objectStorage
 * @param recipe Rezept, das eingefügt wird.
 * @returns {Promise<unknown>} Promise zurückgeben, basierend auf Erfolg
 */

export async function addRecipe(storeName, recipe)  {
    const { transaction, objectStore } = await startTransaction(storeName, "readwrite");
    return new Promise((resolve, reject) => {
        const request = objectStore.add(recipe);
        request.onsuccess = () => {
            console.log("Successfully added recipe: " + recipe.recipeName);
            resolve(request.result);
        }
        request.onerror = () => {
            console.log("Add request failed: " + request.error);
            reject(request.error);
        }
    });
}

/**
 * Entfernt bestehende Rezepte aus der angegebenen Storage.
 * Rezepte werden anhand des Namens gefunden und gelöscht.
 * Wird u.A. benötigt für den Löschen-Dialog.
 * @param storeName Name der zu modifizierenden objectStorage
 * @param recipeName Rezept, das gelöscht werden soll (nur Name nötig hier).
 * @returns {Promise<unknown>} Promise zurückgeben, basierend auf Erfolg
 */

export async function delRecipe(storeName, recipeName) {
    const { transaction, objectStore } = await startTransaction(storeName, "readwrite");
    return new Promise((resolve, reject) => {
        const index = objectStore.index("recipeName");

        const request = index.getKey(recipeName);
        console.log("Got key: " + request.result)

        request.onsuccess = () => {
            const recipeID = request.result;
            if (recipeID) {
                const delRequest = objectStore.delete(recipeID);

                delRequest.onsuccess = () => {
                    console.log("Recipe deleted successfully: (ID) " + recipeID);
                    resolve(delRequest.result);
                };

                delRequest.onerror = () => {
                    console.error("Delete request failed: ", delRequest.error);
                    reject(delRequest.error);
                };
            } else {
                alert("Recipe was not found in database.")
                reject(new Error("Recipe not found."));
            }
        };

        request.onerror = () => {
            console.error("GetKey request failed:", request.error);
            reject(request.error);
        };
    });
}

/**
 * Gibt alle Rezepte der jeweiligen Storage zurück.
 * @param storeName Name der zu modifizierenden objectStorage
 * @returns {Promise<unknown>} Promise zurückgeben, basierend auf Erfolg
 */

export async function getRecipes(storeName) {
    const { transaction, objectStore } = await startTransaction(storeName, "readonly");
    return new Promise((resolve, reject) => {
        const request = objectStore.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}