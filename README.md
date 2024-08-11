# 1. beadandó: Bérkalkulátor

_Kliensoldali webprogramozás 1. beadandó 2023-24-2_

## Nyilatkozat

Kérlek, töltsétek ki az adataitokkal beadás előtt!

```txt
Zelenc-Kuma Tamás
VIJIKH
Kliensoldali webprogramozás - beadandó
Ezt a megoldást a fent írt hallgató küldte be és készítette a Kliensoldali webprogramozás kurzus számonkéréséhez.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől
származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé.
Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere
(ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig,
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét -
saját munkájaként mutatja be, az fegyelmi vétségnek számít.
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
```

## Pontozás

Kérlek, beadás előtt töltsétek ki, hogy mely részfeladatokat oldottátok meg!

```txt
-[x] Az alkalmazás legalább 4 komponensből áll. (Enélkül a beadandót nem fogadjuk el.) (1pt)
Tehát léteznek a következő komponensek:
  - Szöveges beviteli mező címkével
  - Egyedi beviteli komponens, mellyel az kedvezményezett eltartottak és a nem kedvezményezett eltartottak számát tudjuk megadni
  - Friss házasokra megadására vonatkozó komponens.
  - Jogosultság/Nem jogosultság megjelenítésére vonatkozó komponens
-[x] Az alkalmazásban a komponenseket logikusan, funkciók szerint szétbontva hozta létre, ügyelve a tárgyon elsajátított alapelvekre. (2pt)
- Bérkalkulátor
  -[x] Az alkalmazás a bruttó jövedelem megadásakor automatikusan kiszámítja a nettó fizetést, mely az alkalmazás állapotterében tárolódik. Amennyiben megváltozik a bruttó jövedelem, vagy bármilyen azt befolyásoló érték, a nettó jövedelem mindig automatikusan frissüljön.  (2pt)
  -[x] A havi bruttó bért egy csúszka segítségével is lehet változtatni, és ilyenkor a nettó bér automatikusan frissül (1pt)
  -[x] A bruttó bért a megadott gombok segítségével (-5%, -1%, +1%, +5%) is tudjuk módosítani, ilyenkor a nettó bér frissül (2pt)
  -[x] A 25 év alattiak SZJA-mentessége esetén a nettó bér jól változik (1pt)
  -[x] A friss házasok kedvezményének bejelölése lehetséges, bejelölése esetén a nettó bér jól változik (1pt)
  -[x] A friss házasok kedvezményének bejelölésekor egy új komponens jelenik meg, melynek a lényege, hogy a felhasználó meg tudja adni, hogy melyik napon házasodott össze. Ha ez régebben volt, mint 24 hónap, a "Nem jogosult" szöveg jelenik meg, két éven belül pedig a "Jogosult" szöveg jelenik meg a jelölőnégyzet mellett, és csak ilyenkor számolódik hozzá a nettóhoz. (3pt)
  -[x] Egyedi beviteli komponens: A kedvezményezett és nem kedvezményezett eltartottak számát meg tudjuk adni, és ezek alapján a nettó bér jól változik. Ez a pont akkor is jár, ha ez a mező csak egy sima szöveges beviteli mező. A kedvezményezett eltartottak száma nem lehet több az eltartottak számánál, és nem lehet nagyobb, mint 3. (2pt)
  -[x] Egyedi beviteli komponens: Az egyedi beviteli komponenssel - és + gombok segítségével tudjuk változtatni a hozzá tartozó szám értékét. (2pt)
- Háztartás jövedelme
  -[x] Személyek mentése: Az elkészített bérkalkulációt automatikusan elmentődik az alkalmazás állapotterében a megfelelő névvel, és a hozzá tartozó értékekkel. (2 pont)
  -[x] Személyek mentése: Az elmentett személyek táblázatban megjelennek a nettó jövedelmükkel.  (2pt)
  -[x] Személyek mentése: Az elmentett személyek alapján az alkalmazás kiszámolja a háztartás nettó jövedelmét, és ezt is megjeleníti (1pt)
  -[x] Személyek módosítása: A személyek listájában egy személyre kattintva megjelenik a nettó és bruttó bére a Bérkalkulátorban, és a nevét tudjuk módosítani.  (4pt)
  -[x] Személyek módosítása: A személyhez tartozó minden adat megjelenik a Bérkalkulátorban, és ezeket módosítva felül tudjuk írni az eredeti személy adatait. (2pt)
  -[x] Személyek törlése:A személyeket a listából lehet törölni (1pt)
-[x] Igényes megjelenés (2pt)

- Plusz pontok:
  -[ ] LocalStorage: A háztartásban élő személyeket, és a hozzájuk tartozó adatokat LocalStorage-ba mentjük. Ha ide el van mentve már egy háztartáshoz tartozó adatcsomag, az ő adataikkal fog az alkalmazásunk megjelenni. Ehhez készíts egy saját Hook-ot, amivel a LocalStorage-ba el tudod menteni az értékeket. (3 pont)
  -[x] Felugró ablak: Készíts egy felugró ablakot (Modal), amivel a friss házasokra vonatkozó házasságkötés dátumát meg tudjuk adni! (2 pont)


```

## Telepítés

```bash
npm install
```

## Futtatás

```bash
npm run dev
```

## Leírás

A keretprogram egy egyszerű és lecsupaszított alkalmazás Vite-tel létrehozva. A fő `App` komponens egyszerűen csak megjeleníti a `HouseholdSalaryCalculator` komponenst. A `components` mappában található mappaszerkezet az ajánlott eljárás a kód strukturálás szempontjából. Minden mappában található egy `jsx` kiterjesztésű fájl, illetve egy `components` mappa, ahova a logikailag alá tartozó komponensek kerülhetnek.
(Például amennyiben van egy lista komponensünk, a listaelem komponensek kerülhetnének a `components` mappába.)

Az alkalmazás három fő részből áll:

- Családtag kiválasztó fülek
- Bérkalkulátor
- Háztartás összesítő bértáblázat

A fenti három komponens megjelenítéséért felel a `HouseholdSalaryCalculator` komponens.

A létrehozott fájlokat és mappaszerkezetet kedved szerint módosíthatod.
