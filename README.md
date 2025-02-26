# YumBleBee Website

Diese Readme enhält alle wesentlichen Infos zur Ausführung dieses Programms.

## IDE

[Webstorm](https://www.jetbrains.com/webstorm/) wurde zur Erstellung des Projekts verwendet und bietet somit die
passenden Tools zur Bearbeitung und Ausführung dieses Projekts. Jedoch sollten alle folgenden
Schritte auch per VSCode o.Ä. möglich sein.

## Setup des Projektes

Zuerst sollte das Projekt direkt über die IDE geöffnet werden, sodass es als Projekt erkannt wird.

Damit ein lokaler Server gestartet wird, um die Webseite zu nutzen, müssen folgende Commands in die Konsole
eingegeben werden (Popup sollte auch auftauchen):

Node package manager:
```sh
npm install
```

Starte lokalen Server:
```sh
npm run dev
oder
npm run serve
```

Dependencies installieren:
```sh
npm run build
```

Per F12/Inspektor können weiter Informationen für Entwickler aufgerufen werden.
Unter "Web-Speicher" ist auch die Indexed DB mit den Rezepten aufzufinden.
