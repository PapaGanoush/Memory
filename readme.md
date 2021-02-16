# Vue Education

## Setup

Klone als erstes dieses Repository und erstelle einen Branch mit dem Namen lernende/dein-name.
Erstelle zusätzlich einen zweiten Branch lernende/dein-name-dev. Auf diesen Dev kannst du dann Pull Requests erstellen, damit dein Tutor deinen Code überprüfen kann (als Prüfer deinen Tutor eintragen).
Um das Projekt anschliessend aufzusetzen installiere als erstes die Packages mit dem Package-Manager deines Vertrauens

#### npm

npm install
npm start

#### yarn

yarn
yarn start

## Ordnerstruktur

Die Ordnerstruktur ist bereits vorgegeben. Wenn du daran Änderungen machen möchtest besprich es bitte mit deinem Tutor.
Damit du die Ordnerstruktur verstehst und anfangen kannst, existiert in jedem Ordner ein README.md File, welches die Beschreibung des Ordners beinhaltet.

## Vorgehen

Damit wir deinen Fortschritt sehen können, melde dich täglich bei deinem Tutor.
Falls du nicht weisst, wie das funktioniert, wende dich an deinen Tutor.

## Stories

Folgende Funktionalität muss von der App gewährleistet werden, bevor du deinen Tutor informierst, dass du fertig bist.

### Navigation

- Es soll eine Navigation mit zwei Routes geben.
- Die erste Route (/) ist für das Spiel selber.
- Die zweite Route (/scoreboard) ist für die Rangliste

### Rangliste

- Es soll die Rangliste, nach Punkten sortiert (tiefste Punktzahl zuerst) auf der Webapp angezeigt werden.
- Darzustellen ist der Username und der Score

### Memory

- Es soll eine Liste von insgesamt 16 Cards in einem quadratischen Muster dargestellt werden.
- Es gibt 8 einzelne Karten, die dupliziert und in zufälliger Reihenfolge angezeigt werden müssen.
  Jedes Kärtchen hat eine Vorderseite und Rückseite. Die Vorderseite besteht aus einer Hintergrundfarbe, die Rückseite aus dem Bild. Standardmässig wird die Vorderseite angezeigt.
- Wenn eine Karte angeklickt wird, wird sie umgedreht.
- Es können maximal zwei Karten zur gleichen Zeit umgedreht werden. Wenn die Karten das gleiche Bild beinhalten, bleiben sie offen. Wenn die Karten ein unterschiedliches Bild beinhalten, werden sie nach einer Sekunde wieder zugedeckt. Während dieser Sekunde können keine weiteren Karten angeklickt werden.
- Wenn alle Karten aufgedeckt sind, wird der User entweder auf eine neue Seite weitergeleitet oder es öffnet sich ein Popup. In diesem neuen Screen sieht der User seine Punktzahl (Anzahl Klicks auf eine Karte) und er kann seinen Namen eingeben und an die Rangliste abschicken.

### Swagger

- Hier findest du alle nötigen Backend-Endpoints: https://memory-api.scapp.swisscom.com/swagger/

### Rahmenbedingungen

- Vue Router wird verwendet
- Vuex wird verwendet und ist gut strukturiert
- Component State (Data) wird verwendet
- Aufteilung in Komponente (Grosse Komponenten vermeiden, Logik grösstmöglich auslagern)
- Dynamische CSS Klassen werden verwendet (z.Bsp. für die Kartenvorder- und rückseite)
- Backend Services werden geschrieben
