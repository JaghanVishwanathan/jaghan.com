# Portfolio Setup Instructions

## Assets Required

1. **Avatar Image**: Place your waving avatar image at `src/assets/images/avatar-waving.png`
2. **Resume PDF**: Copy `jaghanvishwanathana.pdf` from the root `images/` folder to `src/assets/jaghanvishwanathana.pdf`

## Development

```bash
cd angular-portfolio
npm install
ng serve
```

Navigate to `http://localhost:4200/`

## Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/angular-portfolio/` directory.

## Deployment

For GitHub Pages deployment:
1. Build the project: `ng build --configuration production --base-href /jaghan.com/`
2. Copy the `CNAME` file from root to `dist/angular-portfolio/`
3. Deploy the `dist/angular-portfolio/` folder contents to your GitHub Pages repository

## Notes

- The travel map component uses Leaflet.js - ensure you have internet connection for map tiles
- Contact form integrates with Google Sheets (existing script URL is configured)
- All professional data is loaded from `ContentService` based on your CV
