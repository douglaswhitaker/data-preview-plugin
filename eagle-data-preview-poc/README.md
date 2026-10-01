# Eagle Data Preview — Proof of Concept

This is a proof-of-concept Eagle **Format Extension** plugin for previewing data and code files directly inside Eagle.

## Current scope

Data files:

- CSV
- TSV
- XLS
- XLSX
- XLSB
- XLSM
- ODS
- Numbers

Syntax-highlighted code/text:

- R (`.r`)
- SAS (`.sas`)
- SQL (`.sql`)
- Python (`.py`, `.python`)
- JavaScript (`.js`, `.mjs`, `.cjs`)
- TypeScript (`.ts`)
- Markdown (`.md`, `.markdown`)
- Stata (`.do`, `.ado`)

The data viewer uses **SheetJS Community Edition 0.20.3**, vendored locally. SheetJS CE supports reading all of the registered spreadsheet formats; the viewer uses the same table-rendering path for each. The code viewer uses **PrismJS 1.30.0**, vendored locally. Prism supports hundreds of languages and the viewer loads only the languages needed by this PoC at runtime.

The data thumbnail and code thumbnail are intentionally static for this PoC. Dynamic thumbnails can be considered after the preview plumbing is established.

## Important: vendor SheetJS before installing

The plugin does not include the SheetJS binary in this package. Download the official SheetJS CE 0.20.3 standalone build and save it as:

    lib/xlsx.full.min.js

Do not substitute the Mini build: the full build is needed for the broadest format support.

## Install in Eagle

1. Place `xlsx.full.min.js` in `lib/` as described above.
2. Open Eagle's plugin installation interface.
3. Install this plugin directory/ZIP using Eagle's normal plugin installation mechanism.
4. Add data and code files to Eagle.
5. Open an item to invoke the preview.

## Design notes

The plugin deliberately uses separate viewers for data and code:

    Eagle format extension
            |
            +-- thumbnail/data.js -> static data thumbnail
            +-- thumbnail/code.js -> static code thumbnail
            |
            +-- viewer/data.html
            |       +-- local filesystem read
            |       +-- SheetJS CE
            |       +-- HTML table viewer
            |
            +-- viewer/code.html
                    +-- local filesystem read
                    +-- PrismJS
                    +-- syntax-highlighted code viewer

There is no network request at runtime. Third-party libraries are bundled locally.

## License

The plugin source is MIT licensed. SheetJS Community Edition is separately licensed under Apache License 2.0. PrismJS is separately licensed under the MIT License. See `THIRD-PARTY-LICENSES/`.
