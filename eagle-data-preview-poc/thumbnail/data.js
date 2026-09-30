const fs = require('fs');
const path = require('path');

/**
 * Proof-of-concept thumbnail handler.
 *
 * The first POC deliberately uses a static data-file thumbnail. Once the
 * viewer path and SheetJS integration are validated in Eagle, this can be
 * replaced with a generated table thumbnail without changing the manifest.
 */
module.exports = async ({ src, dest, item }) => {
  const source = path.join(__dirname, '..', 'assets', 'data-thumbnail.png');
  await fs.promises.copyFile(source, dest);
  return item;
};
