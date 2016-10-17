# Tutorenplattform

## Einrichtung

### Voraussetzungen

- [Git](https://git-scm.com/)
- [JetBrains PHPStorm](https://www.jetbrains.com/phpstorm/download/)

### 1. Git einrichten

- Kommandozeile öffnen
- ```git config --global user.name "Mein toller Anzeigename"```
- ```git config --global user.email example@example.com```
  - Die verwendete E-Mail muss mit deinem GitHub-Konto [verknüpft](https://github.com/settings/emails) sein, für das das Repository freigegeben wurde

### 2. Klonen

- Zum Ordner wechseln, **_in_** dem der Projektordner erstellt werden soll
- Git Bash mit *Rechtsklick › Git Bash Here* öffnen
- ```git clone https://github.com/Tutorenplattform/Tutorenplattform.git```
  - Im Falle eines Fehlers: [Überprüfen](https://github.com/settings/emails), ob die in Schritt 1 angegebene E-Mail wirklich mit dem GitHub-Konto verknüpft ist, für das das Repository freigegeben wurde

### 3. In PHPStorm öffnen

- Projektordner öffnen (*File › Open...*)

## Umgang mit Git

Für den generellen Umgang mit Git wird [dieses Tutorial](https://rogerdudler.github.io/git-guide/index.de.html) empfohlen.

### PHPStorm

- Hinzufügen neuer Dateien zum Index über *Rechtsklick › Git › Add* (oder mit *Strg-Alt-A* bei geöffneter Datei)
- Pullen über *VCS › Update Project...* (oder mit *Strg-T*)
- Committen über *VCS › Commit Changes...* (oder mit *Strg-K*)
- Pushen über *VCS › Git › Push...* (oder mit *Strg+Umschalt+K*)
  - **Wichtig: Bei Konflikten immer _Merge_ wählen**
