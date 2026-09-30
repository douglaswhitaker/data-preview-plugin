const fs = require('fs');
const path = require('path');
module.exports = async ({ dest }) => {
  const source = path.join(__dirname, '..', 'assets', 'code-thumbnail.png');
  await fs.promises.copyFile(source, dest);
};
