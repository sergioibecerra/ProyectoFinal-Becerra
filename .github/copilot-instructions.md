# Copilot Instructions for React E-commerce Project

## Project Overview
This is a React e-commerce application built with Vite, featuring a product catalog with categories, cart functionality, and Firebase integration. The project is structured as a CoderHouse React course delivery ("entrega-3").

## Architecture & Key Components

### Routing Structure
- Uses `react-router` v7+ with `BrowserRouter` in `src/App.jsx`
- Main routes: `/` (catalog), `/category/:categoryId`, `/detail/:itemId`, `/cart`, `*` (404)
- Categories are hardcoded: cat01 (Remeras), cat02 (Calzado), cat03 (Camping), cat04 (Pesca)

### Component Organization
- Follow the established pattern: `src/components/[ComponentName]/[ComponentName].jsx` + `[ComponentName].css`
- Each component folder contains both JSX and CSS files
- Example: `NavBar/NavBar.jsx` and `NavBar/NavBar.css`

### Styling System
- CSS custom properties defined in `src/App.css` root selector:
  ```css
  --bg-gray: #f6f6f7;    /* Shopify-inspired light background */
  --bg-dark: #E0E0E0;    /* Navigation background */
  --bg-accent: #BDBDBD;  /* Hover states */
  --text-dark: #202223;  /* Primary text */
  --text-light: #6d7175; /* Secondary text */
  --accent: #008060;     /* Primary accent color */
  --radius: 6px;         /* Consistent border radius */
  ```
- Use these variables consistently across components

## Development Workflow

### Available Scripts
- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Production build
- `npm run lint` - ESLint with React-specific rules
- `npm run preview` - Preview production build

### ESLint Configuration
- Uses flat config format (`eslint.config.js`)
- Custom rule: `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]`
- React Hooks and React Refresh plugins enabled

## Project-Specific Patterns

### Import Conventions
- Use relative imports for local assets: `import homeLogo from '../../assets/logo.png'`
- Component imports: `import NavBar from './components/NavBar/NavBar'`
- React Router: `import { Link } from 'react-router'` (note: not react-router-dom)

### Firebase Integration
- Firebase v12+ is installed but not yet implemented
- Expect future integration for product data and cart persistence

### Debug Patterns
- Remove console.log statements marked with `// TODO: Eliminar debug`
- Example in `NavBar.jsx`: `console.log('Cargo componente: NavBar');`

## Key Files & Dependencies

### Critical Dependencies
- `react` v19.1.1 (latest)
- `react-router` v7.9.5 (not react-router-dom)
- `firebase` v12.4.0 (configured but unused)
- `vite` v7.1.7 with React plugin

### Incomplete Components
- `src/components/CartWidget/` exists but is empty - needs implementation
- Routes currently show placeholder `<div>` elements instead of proper components

## Development Notes
- Project uses ES modules (`"type": "module"` in package.json)
- Vite config is minimal - extend as needed for aliases or environment variables
- Assets are stored in `src/assets/` (currently only contains `logo.png`)
- Global styles in `src/index.css` set minimum responsive design constraints

When implementing new features:
1. Follow the component folder structure pattern
2. Use the established CSS custom properties
3. Implement proper React Router navigation with `Link` components
4. Consider Firebase integration for data persistence
5. Remove debug console.log statements before committing