

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
                    dataStoreCookingName, { keyPath: 'id', autoIncrement: true }
                );
                //eindeutiger Index bei Namen
                cookingRecipeStore.createIndex('name', 'name', { unique: true });
            }

            //erstelle objectStore für alle Kochrezepte
            if (!database.objectStoreNames.contains(dataStoreBakingName)) {
                const bakingRecipeStore = database.createObjectStore(
                    dataStoreBakingName, { keyPath: 'id', autoIncrement: true }
                );
                //eindeutiger Index bei Namen
                bakingRecipeStore.createIndex('name', 'name', { unique: true });
            }
        };
    });
}

/**
 * Eröffnet eine Transaktion an der Indexed Datenbank.
 * @param storeName Name der zu modifizierenden objectStorage
 * @param mode Modus in der die Transaktion sein soll (readonly vs. readwrite)
 * @returns {Promise<*|IDBObjectStore>} Promise zurückgeben, basierend auf Erfolg
 */

async function startTransaction(storeName, mode) {
    const database = await openDb(databaseName, databaseVersion);
    return await database.transaction(storeName, mode).objectStore(storeName);
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
    const objectStore = await startTransaction(storeName, "readwrite");
    return new Promise((resolve, reject) => {
        const request = objectStore.add(recipe);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

/**
 * Entfernt bestehende Rezepte aus der angegebenen Storage.
 * Rezepte werden anhand des Namens gefunden und gelösht.
 * Wird u.A. benötigt für den Löschen-Dialog.
 * @param storeName Name der zu modifizierenden objectStorage
 * @param recipeName Rezept, das gelöscht werden soll (nur Name nötig hier).
 * @returns {Promise<unknown>} Promise zurückgeben, basierend auf Erfolg
 */

export async function delRecipe(storeName, recipeName) {
    const objectStore = await startTransaction(storeName, "readwrite");
    return new Promise((resolve, reject) => {
        const request = objectStore.delete(recipeName);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

/**
 * Gibt alle Rezepte der jeweiligen Storage zurück.
 * @param storeName Name der zu modifizierenden objectStorage
 * @returns {Promise<unknown>} Promise zurückgeben, basierend auf Erfolg
 */

export async function getRecipes(storeName) {
    const objectStore = await startTransaction(storeName, "readonly");
    return new Promise((resolve, reject) => {
        const request = objectStore.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}