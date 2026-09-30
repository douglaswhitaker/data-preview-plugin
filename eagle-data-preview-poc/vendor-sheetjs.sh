#!/bin/sh
set -eu
mkdir -p "$(dirname "$0")/lib"
curl -L --fail --output "$(dirname "$0")/lib/xlsx.full.min.js" \
  "https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js"
printf '%s\n' 'Downloaded SheetJS CE 0.20.3 to lib/xlsx.full.min.js'
