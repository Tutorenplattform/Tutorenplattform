# Tutorenplattform

## Dokumentation

### AngularJS-Frontend-Applikation

Die JSDoc-Dokumentation zur Frontend-Applikation kann [hier](http://htmlpreview.github.io/?https://github.com/Tutorenplattform/Tutorenplattform/blob/master/jsdoc/index.html) online eingesehen werden.

## Branch-Information

### ```master```
Auf dem Hauptbranch ```master``` befindet sich eine lauffähige Version der Applikation mit passenden Dummy-Daten. Es sind nur wenige Workarounds vorhanden.

### ```clean```
Auf dem Branch ```clean``` befindet sich eine nicht vollständig lauffähige Version der Applikation. Es sind keine Dummy-Daten oder Workarounds vorhanden.

### ```demo```
Auf dem Branch ```demo``` befindet sich eine lauffähige Version der Applikation mit optimierten Dummy-Daten. Es sind einige Workarounds vorhanden, um eine Demo zu Login, Tutorenliste, Tutorenprofil, Tutorbenachrichtigung und Tutorenregistrierung geben zu können.

## Einrichtung

### Voraussetzungen

- [Git](https://git-scm.com/downloads)
- [JetBrains PHPStorm](https://www.jetbrains.com/phpstorm/download/)
- [NodeJS](https://nodejs.org/en/download/package-manager/)
- [Bower](https://bower.io/#install-bower)
- SEW-VM

#### Wenn SEW-VM nicht vorhanden:
* PHP >= 7.0.1
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Composer
* MySQL

### 1. Git einrichten

- [x] Kommandozeile öffnen
- [x] ```git config --global user.name "Mein toller Anzeigename"```
- [x] ```git config --global user.email example@example.com```
  - Die verwendete E-Mail muss mit deinem GitHub-Konto [verknüpft](https://github.com/settings/emails) sein, für das das Repository freigegeben wurde

### 2. Klonen

- [x] Zum Ordner wechseln, **_in_** dem der Projektordner erstellt werden soll
- [x] Git Bash mit *Rechtsklick › Git Bash Here* öffnen
- [x] ```git clone https://github.com/Tutorenplattform/Tutorenplattform.git```
  - Im Falle eines Fehlers: [Überprüfen](https://github.com/settings/emails), ob die in Schritt 1 angegebene E-Mail wirklich mit dem GitHub-Konto verknüpft ist, für das das Repository freigegeben wurde

### 3. Laravel Projekt einrichten

- [x] Innerhalb der Bash in den Projektordner wechseln
- [x] Dann den Befehl ```composer install``` ausführen
- [x] Die Datei ```.env.example``` in die Datei ```.env``` kopieren (```cp .env.example .env```)
- [x] Innerhalb der Datei ```.env``` den Parameter ```APP_KEY``` (Wert für diesen Parameter, siehe Slack #general) und die DB Zugangsdaten anpassen

### 4. Bower-Dependencies laden

- [x] Innerhalb der Bash in den Projektordner wechseln
- [x] ```bower install```

### 5. In PHPStorm öffnen

- [x] Projektordner öffnen (*File › Open...*)

## Umgang mit Git

Für den generellen Umgang mit Git wird [dieses Tutorial](https://rogerdudler.github.io/git-guide/index.de.html) empfohlen.

### PHPStorm

- Hinzufügen neuer Dateien zum Index über *Rechtsklick › Git › Add* (oder mit <kbd>Strg</kbd>+<kbd>Alt</kbd>+<kbd>A</kbd> bei geöffneter Datei)
- Pullen über *VCS › Update Project...* (oder mit <kbd>Strg</kbd>+<kbd>T</kbd>)
- Committen über *VCS › Commit Changes...* (oder mit <kbd>Strg</kbd>+<kbd>K</kbd>)
- Pushen über *VCS › Git › Push...* (oder mit <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>K</kbd>)
  - **Wichtig: Bei Konflikten immer _Merge_ wählen**
