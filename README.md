# Kreator CV — projekt React + TypeScript

Projekt zawiera prosty kreator CV wykonany w React i TypeScript.

## Funkcje

- wybór jednego z 3 szablonów CV,
- edycja danych bezpośrednio na podglądzie CV,
- dodawanie i usuwanie doświadczenia,
- dodawanie i usuwanie edukacji,
- eksport CV do PDF,
- zapis danych CV do pliku JSON,
- import danych CV z pliku JSON,
- przełączanie nagłówków PL / EN.

## Uruchomienie

W folderze projektu wpisz:

```bash
npm install
npm start
```

## Najważniejsze pliki

- `src/App.tsx` — główna logika aplikacji i stan danych CV.
- `src/types/cv.ts` — typy TypeScript.
- `src/data/defaultCvData.ts` — przykładowe dane CV.
- `src/templates/` — szablony CV.
- `src/components/Toolbar.tsx` — panel boczny z przyciskami.
- `src/utils/pdf.ts` — eksport do PDF.
- `src/utils/jsonFile.ts` — eksport i import JSON.
- `src/App.css` — wygląd aplikacji i szablonów.

## Jak opisać projekt nauczycielowi

Aplikacja przechowuje dane CV w stanie komponentu `App`. Dane są przekazywane przez propsy do wybranego szablonu. Każde pole tekstowe jest kontrolowanym komponentem React, dlatego po wpisaniu tekstu aktualizuje się główny obiekt `cvData`. Eksport PDF działa na podstawie elementu HTML wskazanego przez `ref`. Import i eksport JSON pozwalają zapisać dane CV i wczytać je później.
