#!/usr/bin/env python3
"""
Script to remove black backgrounds from mascot images and save as PNG
"""
from PIL import Image
import os

def remove_black_background(input_path, output_path):
    """
    Convert black background to transparent
    """
    try:
        img = Image.open(input_path)
        
        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Get image data
        data = img.getdata()
        new_data = []
        
        # Define black threshold (very dark pixels)
        threshold = 30
        
        for item in data:
            # If pixel is very dark (nearly black), make it transparent
            if len(item) == 4:  # RGBA
                r, g, b, a = item
                if r < threshold and g < threshold and b < threshold:
                    new_data.append((r, g, b, 0))  # Make transparent
                else:
                    new_data.append(item)
            elif len(item) == 3:  # RGB
                r, g, b = item
                if r < threshold and g < threshold and b < threshold:
                    new_data.append((r, g, b, 0))  # Make transparent
                else:
                    new_data.append((r, g, b, 255))  # Keep opaque
        
        img.putalpha(255)
        img.putdata(new_data)
        
        # Save
        img.save(output_path, 'PNG')
        print(f"✓ Saved: {output_path}")
        
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")

# Create output directory
output_dir = 'public/images/mascots'
os.makedirs(output_dir, exist_ok=True)

print("Note: Please first save the mascot images to the public/images/ directory with these names:")
print("  - python_mascot.png (blue/yellow Python character)")
print("  - css_mascot.png (blue CSS rocket)")
print("  - sql_mascot.png (red SQL character)")
print("  - rocket_mascot.png (red/orange rocket mascot)")
print("\nThen run this script to convert them to transparent PNGs")
