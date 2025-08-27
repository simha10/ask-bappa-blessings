# Video Background Setup Guide

## Overview
This guide explains how to set up the video background for the "Ask Bappa Blessings" website.

## Video File Requirements

### File Format
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1080p or 4K recommended
- **Duration**: 30-60 seconds (loops automatically)
- **File Size**: Under 10MB for optimal loading
- **Aspect Ratio**: 16:9 recommended

### Content Guidelines
- Choose spiritual or festive themed videos
- Avoid fast-moving or distracting content
- Ensure good contrast for text readability
- Consider cultural appropriateness for Ganesha festival

## Installation Steps

### 1. Create Videos Directory
Create the following directory structure:
```
public/
  └── videos/
      └── background.mp4
```

### 2. Add Your Video File
Place your video file in the `public/videos/` directory and name it `background.mp4`.

### 3. Alternative Video Sources
If you want to use a different video file or URL, update the `VideoBackground.tsx` component:

```tsx
// For local file
<source src="/videos/your-video.mp4" type="video/mp4" />

// For external URL
<source src="https://example.com/your-video.mp4" type="video/mp4" />
```

## Customization Options

### Video Opacity
Adjust the opacity in `VideoBackground.tsx`:
```tsx
className="absolute inset-0 w-full h-full object-cover opacity-30"
// Change opacity-30 to your desired value (0-100)
```

### Overlay Color
Modify the dark overlay in `VideoBackground.tsx`:
```tsx
<div className="absolute inset-0 bg-black/70 z-10"></div>
// Change bg-black/70 to adjust color and opacity
```

### Z-Index Management
The video background uses `z-0` to stay behind all content. Adjust if needed:
```tsx
<div className="fixed inset-0 z-0 overflow-hidden">
```

## Performance Optimization Tips

### 1. Video Compression
- Use tools like HandBrake or FFmpeg to compress videos
- Target file size: 5-10MB for optimal performance
- Use appropriate bitrate for your resolution

### 2. Preloading
The video uses `preload="auto"` for better loading performance.

### 3. Fallback Support
A gradient background is provided as fallback for browsers that don't support video.

## Troubleshooting

### Video Not Playing
1. Check file path and name
2. Verify video format (MP4 with H.264 codec)
3. Check browser console for errors

### Performance Issues
1. Reduce video file size
2. Lower resolution if needed
3. Check network conditions

### Mobile Considerations
- Videos autoplay with `muted` and `playsInline` attributes
- Test on mobile devices for performance

## Recommended Video Sources

### Free Stock Video Sites
- Pexels Videos
- Pixabay Videos
- Coverr
- Mixkit

### Cultural/Spiritual Themes
- Festival celebrations
- Temple ceremonies
- Spiritual symbols
- Nature scenes with spiritual elements

## Browser Support
- Chrome: Full support
- Firefox: Full support
- Safari: Full support (iOS requires muted)
- Edge: Full support

## File Structure
```
public/
├── videos/
│   └── background.mp4 (your video file)
src/
├── components/
│   └── VideoBackground.tsx
└── App.tsx (imports VideoBackground)
```

## Updates and Maintenance
- Regularly check video file integrity
- Update video for seasonal themes
- Monitor performance metrics
- Test on different devices and browsers

For any issues, check the browser console for error messages and verify the video file meets the requirements.
