# Kids Loader - Mascot Image Setup

## Overview
The Kids Space loader now uses professional mascot images from the attachments instead of SVGs. You need to save these images with **transparent backgrounds (PNG format)** in the `public/images/mascots/` folder.

## Required Images

Save these 4 images to `public/images/mascots/`:

### 1. **python_mascot.png**
- **Source**: Blue character with yellow snake/code (4th image)
- **Size**: 120x140px recommended
- **Format**: PNG with transparent background
- **Used for**: Python programming language mascot (slides from left)

### 2. **css_mascot.png**
- **Source**: Blue rocket with "CSS" label (2nd image)
- **Size**: 120x140px recommended
- **Format**: PNG with transparent background
- **Used for**: CSS/Web styling mascot (enters from right)

### 3. **sql_mascot.png**
- **Source**: Red character with "SQL" label (3rd image)
- **Size**: 120x140px recommended
- **Format**: PNG with transparent background
- **Used for**: SQL database mascot (drops from top)

### 4. **rocket_mascot.png**
- **Source**: Red/orange mascot on rocket (1st image)
- **Size**: 80x80px recommended
- **Format**: PNG with transparent background
- **Used for**: Main rocket that appears after mascots merge

## How to Remove Black Backgrounds

### Option 1: Online Tool (Easiest)
1. Go to **[remove.bg](https://www.remove.bg/)** or similar service
2. Upload each image
3. Download as PNG (transparent background)
4. Save to `public/images/mascots/`

### Option 2: Using Python Script (Auto)
1. Save all images to `public/images/` with these exact names:
   - `python_mascot_raw.png`
   - `css_mascot_raw.png`  
   - `sql_mascot_raw.png`
   - `rocket_mascot_raw.png`

2. Run the background removal script:
```bash
python remove_backgrounds.py
```

3. This will create the transparent versions in `public/images/mascots/`

### Option 3: Manual (Photoshop, GIMP, Affinity Photo)
- Open image in editor
- Select > By Color Tool → Select black background
- Delete or make transparent
- Export as PNG with transparency

## File Structure
```
public/
├── images/
│   └── mascots/
│       ├── python_mascot.png     (120×140)
│       ├── css_mascot.png        (120×140)
│       ├── sql_mascot.png        (120×140)
│       └── rocket_mascot.png     (80×80)
```

## Animation Timeline
- **0-2s**: All three mascots enter screen
  - Python: Slides from left
  - CSS: Enters from right  
  - SQL: Drops from top
- **2-5s**: All mascots converge toward center
- **5-7s**: Mascots merge, rocket appears and charges up
- **7-8s**: Rocket launches upward and fades

## Text Display
- Main: "**Loading Your Coding Journey...**"
- Rotating subtexts:
  - "Learning Python"
  - "Styling with CSS"
  - "Managing Data with SQL"

## Building & Testing
Once images are saved:
```bash
npm run build    # Verify no image errors
npm run dev      # Test locally
```

Navigate to Kids Space page to see the full 8-second animation!

---
**Note**: Component is already configured to use these images. Just make sure images are transparent PNGs in the `public/images/mascots/` folder.
