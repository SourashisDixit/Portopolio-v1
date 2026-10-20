# Sourashis Dixit - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a tech-forward design with electric cyan accents and smooth animations.

## 📋 Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS 4
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Professional Layout**: Hero section, about, skills, experience, projects, and contact
- **GitHub Integration**: Direct links to your GitHub projects
- **Social Links**: LinkedIn, GitHub, Email, and Phone contact options
- **Profile Image**: Professional profile photo integration

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: IBM Plex Sans, IBM Plex Mono, Inter

## 📦 Prerequisites

Before running the project locally, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v10 or higher) - [Install](https://pnpm.io/installation)
  - Or use `npm install -g pnpm`

## 🚀 Getting Started

### 1. Clone or Extract the Project

```bash
# If you have the folder, navigate to it
cd sourashis-portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

This will install all required packages including React, Tailwind CSS, and other dependencies.

### 3. Start Development Server

```bash
pnpm dev
```

The development server will start at `http://localhost:5173` (or another port if 5173 is busy).

Open your browser and navigate to the URL shown in the terminal. You'll see the portfolio with hot-reload enabled - any changes you make will instantly reflect in the browser.

### 4. Build for Production

When you're ready to deploy:

```bash
pnpm build
```

This creates an optimized production build in the `dist/` folder.

### 5. Preview Production Build

To test the production build locally:

```bash
pnpm preview
```

## 📁 Project Structure

```
sourashis-portfolio/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   │   └── Home.tsx     # Main portfolio page
│   │   ├── contexts/        # React contexts
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles & theme
│   └── index.html           # HTML template
├── server/
│   └── index.ts             # Express server (for production)
├── package.json             # Project dependencies
└── README.md                # This file
```

## 🎨 Customization

### Update Your Information

Edit `client/src/pages/Home.tsx` to update:
- Your name and title
- About section content
- Skills and technologies
- Experience details
- Project information
- Contact details

### Change Colors

Edit `client/src/index.css` to modify:
- Primary color (deep navy): `--primary: #1a1f3a`
- Accent color (cyan): `--accent: #00d9ff`
- Background colors
- Text colors

### Update Profile Image

Replace the image URL in the About section with your own image URL.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔗 GitHub Projects

The portfolio includes links to your GitHub projects:
- **ForEver**: https://github.com/SourashisDixit
- **ElectroStore**: https://github.com/SourashisDixit

Update these URLs in `Home.tsx` if you have different repositories.

## 📧 Contact Information

Update your contact details in the Contact section:
- Email: dixitsourashis@gmail.com
- Phone: +91 78478 03593
- LinkedIn: https://www.linkedin.com/in/sourashis-dixit-2003s
- GitHub: https://github.com/SourashisDixit

## 🚢 Deployment Options

### Option 1: Vercel (Recommended for React)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Option 3: GitHub Pages
Build the project and push the `dist/` folder to your GitHub Pages repository.

### Option 4: Traditional Hosting
Build the project (`pnpm build`) and upload the `dist/` folder to your web hosting provider.

## 🛠️ Available Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type check
pnpm check

# Format code
pnpm format
```

## 📝 Environment Variables

The project uses environment variables for analytics. These are automatically injected in production but can be customized in `.env` file if needed.

## 🎯 Performance Tips

- Images are optimized with CDN URLs
- CSS is minified and optimized
- JavaScript is bundled and minified
- Lazy loading is implemented for images
- Smooth animations use GPU acceleration

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules
pnpm install
```

### Build Errors
```bash
# Clean build
rm -rf dist
pnpm build
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About

Portfolio website for **Sourashis Dixit**, a Full Stack .NET Developer building practical applications with .NET, React, and Azure.

---

**Happy coding!** 🚀

For questions or support, reach out via email or LinkedIn.
