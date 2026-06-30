const sharp = require('sharp');
const fs = require('fs');

async function processImage(imagePath) {
    console.log("Processing", imagePath);
    try {
        const { data, info } = await sharp(imagePath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            if (r < 15 && g < 15 && b < 15) {
                data[i+3] = 0;
            }
        }

        await sharp(data, {
            raw: {
                width: info.width,
                height: info.height,
                channels: 4
            }
        })
        .png()
        .toFile(imagePath.replace('.png', '-nobg.png'));
        
        console.log("Saved", imagePath.replace('.png', '-nobg.png'));
    } catch(e) {
        console.error(e);
    }
}

const files = [
    'd:/urbancode/Urbancode-nextJs/public/images/home/home-hero/data analytics.png',
    'd:/urbancode/Urbancode-nextJs/public/images/home/home-hero/testing.png',
    'd:/urbancode/Urbancode-nextJs/public/images/home/home-hero/aws (1).png'
];

files.forEach(f => {
    if(fs.existsSync(f)) {
        processImage(f);
    } else {
        console.log("Not found:", f);
    }
});
