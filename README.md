## Data Preview Plugin

This is a plugin for Eagle to help me organize datasets for teaching statistics better by adding in preview support for common data and code file types. [Eagle](https://eagle.cool/) is a Digital Asset Manager (DAM) available for Windows and macOS; it is proprietary software but is available without a subscription (one-time purchase). Its core functionality was almost what I wanted for organizing datasets and related files for teaching, and it supports plugins to extend its functionality. 

### Features

This plugin adds preview functionality for spreadsheet-type datasets (via SheetJS) and plaintext code files with syntax highlighting (via PrismJS). Currently supported file types:

Data: .csv, .tsv, .xlsx, .xls, .xlsb, .xlsm, .ods, numbers
Code: R, SAS, Python, and a few others

### Current Release

Version 0.2.1 is the current release. This is a beta/pre-production release: I'm using this plugin now as part of organizing my datasets, but I make no guarantees about it (see note below). Even if this plugin misbehaves in someway, I imagine that the consequences would be fairly minor, but do not use this in any critical environments. 

### See Also

If you're interested in this plugin, I have another Eagle plugin that helps for aggregating tags as another other part of my workflow for organizing datasets for teaching: [Tag Sink](https://github.com/douglaswhitaker/tag-sink-plugin)

### About Development

I am primarily a statistician and educator, not a web developer. To that end, I know neither JavaScript nor Node.js programming. As much as have serious misgivings about the use of generative AI (for the myriad reasons we all recognize), in the year 2026 I also believe that I have a responsibility as an educator to become familiar with the ways that generative AI tools are being used. This plugin is part of that professional development that I am doing: it is definitely 'vibe coding', as it were - but that's the way some things are built now.  

This plugin was built primarily using ChatGPT (GPT-5.6 Luna).