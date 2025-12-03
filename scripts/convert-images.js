const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../public/images/blogs');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file).toLowerCase() === '.jpg') {
            const inputFile = path.join(directoryPath, file);
            const outputFile = path.join(directoryPath, path.basename(file, '.jpg') + '.webp');

            sharp(inputFile)
                .webp({ quality: 80 })
                .toFile(outputFile)
                .then((info) => {
                    console.log(`Converted ${file} to WebP:`, info);
                })
                .catch((err) => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
