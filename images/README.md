# Images Folder

This folder contains local images used throughout the Stadium876 website.

## Current Images
- `jota.jpeg` - Diogo Jota tribute article image

## Adding New Images

1. Add your image files to this folder (`public/images/`)
2. Reference them in your components using the path: `/stadium876/images/filename.ext` (due to the base path configuration)
3. Example: If you add `football-match.jpg`, reference it as `/stadium876/images/football-match.jpg`

## Benefits of Local Images
- Faster loading times
- Better reliability (no external dependencies)
- Consistent performance
- Better SEO

## Image Optimization Tips
- Use modern formats like WebP when possible
- Optimize file sizes for web
- Use descriptive filenames
- Consider responsive images for different screen sizes

## Usage Examples

### In React Components
```jsx
<img src="/stadium876/images/jota.jpeg" alt="Diogo Jota" />
```

### In Article Data
```javascript
{
  imageUrl: '/stadium876/images/jota.jpeg',
  // ... other properties
}
```
