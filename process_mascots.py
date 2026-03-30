#!/usr/bin/env python3
"""
Process mascot images and remove black backgrounds
Install: pip install Pillow
Run: python process_mascots.py
"""
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("PIL not found. Install with: pip install Pillow")
    sys.exit(1)

def remove_background_and_save(image_data: bytes, output_path: str, threshold: int = 40):
    """Convert image bytes to PNG with transparent background"""
    try:
        # Open image from bytes
        img = Image.open(Path(output_path).parent / f"temp_{Path(output_path).name}")
        
        # Ensure RGBA
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        data = img.getdata()
        new_data = []
        
        # Make dark pixels transparent
        for item in data:
            r, g, b, a = item if len(item) == 4 else (item[0], item[1], item[2], 255)
            # If very dark (nearly black), make transparent
            if r < threshold and g < threshold and b < threshold:
                new_data.append((r, g, b, 0))
            else:
                new_data.append((r, g, b, 255))
        
        img.putdata(new_data)
        img.save(output_path, 'PNG')
        print(f"✓ Saved: {output_path}")
        return True
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

# Image mapping
images = {
    'rocket_mascot.png': 'Red/orange rocket with mascot (1st image)',
    'css_mascot.png': 'Blue CSS rocket with 2 characters (2nd image)',
    'sql_mascot.png': 'Red SQL character dancing (3rd image)',
    'python_mascot.png': 'Blue/yellow Python character with thumbs up (4th image)'
}

print("=" * 60)
print("KIDS LOADER MASCOT IMAGE SETUP")
print("=" * 60)
print("\nTo complete setup:")
print("\n1. Download the 4 mascot images from the attachments:")
for fname, desc in images.items():
    print(f"   - {fname}: {desc}")

print("\n2. Save them to: public/images/mascots/")
print("\n3. Run this script again to remove black backgrounds")
print("\nNote: Transparent PNG images are required for the animation!")
print("=" * 60 + "\n")

# Create directory
mascots_dir = Path('public/images/mascots')
mascots_dir.mkdir(parents=True, exist_ok=True)
print(f"✓ Directory created: {mascots_dir}")
