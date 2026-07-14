# PWA Icons Generation Guide

## Required Icons

You need to create the following icons in the `/public/icons/` directory:

### Standard Sizes
- `icon-72x72.png` (72x72 pixels)
- `icon-96x96.png` (96x96 pixels)
- `icon-128x128.png` (128x128 pixels)
- `icon-144x144.png` (144x144 pixels)
- `icon-152x152.png` (152x152 pixels)
- `icon-192x192.png` (192x192 pixels) - **Maskable**
- `icon-384x384.png` (384x384 pixels)
- `icon-512x512.png` (512x512 pixels) - **Maskable**

### Apple Touch Icon
- `apple-touch-icon.png` (180x180 pixels) in `/public/`

### Favicon
- `favicon.ico` (32x32 pixels) in `/public/`

## Quick Generation Methods

### Method 1: Using PWA Asset Generator (Recommended)

```bash
# Install globally
npm install -g pwa-asset-generator

# Generate all icons from a single source image (1024x1024 recommended)
pwa-asset-generator logo.png public/icons \
  --icon-only \
  --favicon \
  --maskable \
  --type png \
  --padding "10%"
```

### Method 2: Using RealFaviconGenerator

1. Visit https://realfavicongenerator.net/
2. Upload your logo (1024x1024 recommended)
3. Configure settings:
   - iOS: Enable and set background color to #FFF9F5
   - Android: Enable and set theme color to #8B7355
   - Windows: Enable
   - macOS Safari: Enable
4. Download the package
5. Extract icons to `/public/icons/`

### Method 3: Using Figma/Sketch/Photoshop

1. Create a 1024x1024 artboard
2. Design your icon with 10% padding (safe zone)
3. Export at these sizes:
   - 72, 96, 128, 144, 152, 192, 384, 512
4. Save as PNG with transparency
5. Place in `/public/icons/`

### Method 4: Using ImageMagick (Command Line)

```bash
# Install ImageMagick
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Linux

# Generate all sizes from source
for size in 72 96 128 144 152 192 384 512; do
  convert logo.png -resize ${size}x${size} public/icons/icon-${size}x${size}.png
done

# Generate favicon
convert logo.png -resize 32x32 public/favicon.ico

# Generate Apple touch icon
convert logo.png -resize 180x180 public/apple-touch-icon.png
```

## Icon Design Guidelines

### Maskable Icons (192x192 and 512x512)

- **Safe Zone**: Keep important content within 80% of the canvas
- **Padding**: 10% padding on all sides
- **Background**: Use solid background color (#FFF9F5)
- **Foreground**: Center your logo/icon

### Standard Icons

- **Transparency**: Use transparent background
- **Simplicity**: Keep design simple and recognizable at small sizes
- **Contrast**: Ensure good contrast for visibility

### Color Scheme

- **Primary**: #8B7355 (warm brown)
- **Background**: #FFF9F5 (warm off-white)
- **Accent**: Use sparingly for highlights

## Screenshots (Optional but Recommended)

Create screenshots for better PWA listing:

### Desktop Screenshot
- **Size**: 1280x720 pixels
- **Location**: `/public/screenshots/desktop-home.png`
- **Content**: Homepage on desktop view

### Mobile Screenshot
- **Size**: 750x1334 pixels
- **Location**: `/public/screenshots/mobile-home.png`
- **Content**: Homepage on mobile view

## Testing Your Icons

### 1. Build and Run

```bash
npm run build
npm start
```

### 2. Check Manifest

Visit: `http://localhost:3000/manifest.json`

Verify all icon paths are correct.

### 3. Chrome DevTools

1. Open DevTools (F12)
2. Go to **Application** tab
3. Click **Manifest** in left sidebar
4. Check:
   - All icons load correctly
   - Maskable icons display properly
   - No errors in console

### 4. Lighthouse Audit

1. Open DevTools
2. Go to **Lighthouse** tab
3. Select **Progressive Web App**
4. Click **Generate report**
5. Aim for 100% PWA score

### 5. Test Installation

**Desktop (Chrome):**
- Look for install icon in address bar
- Click to install
- Verify icon appears in app launcher

**Mobile (Android):**
- Open in Chrome
- Tap menu (three dots)
- Tap "Add to Home screen"
- Verify icon on home screen

**Mobile (iOS):**
- Open in Safari
- Tap Share button
- Tap "Add to Home Screen"
- Verify icon on home screen

## Troubleshooting

### Icons Not Showing

1. Check file paths in `manifest.json`
2. Ensure icons exist in `/public/icons/`
3. Clear browser cache
4. Rebuild: `npm run build`

### Maskable Icons Look Wrong

1. Increase padding to 15-20%
2. Ensure safe zone is respected
3. Test with Chrome's maskable icon preview

### PWA Not Installable

1. Must use HTTPS (or localhost)
2. Check service worker is registered
3. Verify manifest is valid
4. Ensure all required icons exist
5. Run Lighthouse audit for specific issues

## Resources

- [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Maskable.app](https://maskable.app/) - Test maskable icons
- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [MDN Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## Quick Start

If you just want to get started quickly:

1. Create a simple 512x512 PNG logo
2. Use PWA Asset Generator:
   ```bash
   npx pwa-asset-generator logo.png public/icons --icon-only --favicon --maskable
   ```
3. Build and test:
   ```bash
   npm run build
   npm start
   ```
4. Open Chrome DevTools > Application > Manifest
5. Verify everything looks good

Done! Your PWA icons are ready.