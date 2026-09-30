# Eagle Data File Preview — Proof of Concept

This is a proof-of-concept Eagle **Format Extension** plugin for previewing data files directly inside Eagle.

## Current scope

- CSV
- TSV
- XLSX

The viewer uses **SheetJS Community Edition 0.20.3**, vendored locally. The POC displays the first 200 rows and first 100 columns of the selected worksheet and supports switching between workbook sheets.

The thumbnail is intentionally a static data-file icon for this POC. Once the Eagle preview plumbing is verified, the thumbnail generator can be upgraded to render a small table preview.

## Important: vendor SheetJS before installing

The execution environment used to construct this POC could not download external binaries. The plugin therefore does **not** include `lib/xlsx.full.min.js` yet.

Download the official SheetJS CE 0.20.3 standalone build:

https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js

Save it as:

    lib/xlsx.full.min.js

Do not substitute the Mini build: the full build is needed for the broadest format support. SheetJS recommends vendoring the standalone script for stability and offline operation.

## Install in Eagle

1. Place `xlsx.full.min.js` in `lib/` as described above.
2. Open Eagle's plugin installation interface.
3. Install this plugin directory/ZIP using Eagle's normal plugin installation mechanism.
4. Add a CSV, TSV, and XLSX file to Eagle.
5. Open the item to invoke the preview.

## Design notes

The POC deliberately keeps the architecture small:

    Eagle format extension
            |
            +-- thumbnail/data.js -> static POC thumbnail
            |
            +-- viewer/data.html
                    |
                    +-- local filesystem read
                    +-- SheetJS CE
                    +-- HTML table viewer

There is no network request at runtime. SheetJS is expected to be bundled locally.

The viewer intentionally limits rendered data to 200 rows × 100 columns. This is a proof-of-concept safety limit, not a final product decision.

## License

The plugin source is MIT licensed. SheetJS Community Edition is separately licensed under Apache License 2.0. See `THIRD-PARTY-LICENSES/`.
