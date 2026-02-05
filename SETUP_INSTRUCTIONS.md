# Complete Setup Instructions

## What You Have

Your portfolio project folder contains everything needed to run the website locally and deploy it online.

### Important Files:

1. **QUICK_START.txt** - Quick reference for getting started (read this first!)
2. **README_LOCAL_SETUP.md** - Detailed setup and customization guide
3. **package.json** - Project dependencies and scripts
4. **client/src/pages/Home.tsx** - Main portfolio page (edit your content here)
5. **client/src/index.css** - Global styles and theme colors

## System Requirements

- **Node.js**: Version 18 or higher
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **pnpm**: Package manager (recommended over npm)
  - Install globally: `npm install -g pnpm`
  - Verify installation: `pnpm --version`

## Step-by-Step Setup

### 1. Extract the Project

Extract the `ankit-rout-portfolio-clean.tar.gz` file to your desired location.

On Windows: Use 7-Zip, WinRAR, or built-in extraction
On Mac/Linux: `tar -xzf ankit-rout-portfolio-clean.tar.gz`

### 2. Open Terminal/Command Prompt

Navigate to the extracted folder:
```bash
cd ankit-rout-portfolio
```

### 3. Install Dependencies

This downloads and installs all required packages (React, Tailwind CSS, etc.):
```bash
pnpm install
```

This may take 2-5 minutes depending on your internet speed.

### 4. Start Development Server

```bash
pnpm dev
```

You'll see output like:
```
  VITE v7.1.7  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 5. View Your Portfolio

Open your browser and go to: `http://localhost:5173`

Your portfolio is now running! Any changes you make to files will automatically reload in the browser.

## Customizing Your Portfolio

### Edit Your Information

1. Open `client/src/pages/Home.tsx` in your code editor
2. Find sections like:
   - Hero section (name, title, description)
   - About section (your bio)
   - Skills section (technologies)
   - Experience section (jobs)
   - Projects section (your projects)
   - Contact section (contact info)

3. Update the text and links
4. Save the file - changes appear instantly in browser

### Change Colors

1. Open `client/src/index.css`
2. Look for CSS variables around line 160:
   - `--primary: #1a1f3a` (deep navy)
   - `--accent: #00d9ff` (electric cyan)
3. Change the hex color codes
4. Save and see changes instantly

### Update Profile Image

The profile image URL is in the About section. Replace it with your own image URL.

## Building for Production

When ready to deploy:

```bash
pnpm build
```

This creates an optimized build in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Easiest for React)
```bash
npm install -g vercel
vercel
```
Follow the prompts to deploy your site.

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
1. Build the project: `pnpm build`
2. Push the `dist` folder to your GitHub Pages repository

### Option 4: Traditional Web Hosting
1. Build the project: `pnpm build`
2. Upload the `dist` folder to your web hosting provider via FTP/SFTP

## Project Structure

```
ankit-rout-portfolio/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/
│   │   │   └── Home.tsx     # Main portfolio (EDIT THIS)
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Styles and theme (EDIT THIS)
│   └── index.html           # HTML template
├── server/
│   └── index.ts             # Production server
├── package.json             # Dependencies
├── QUICK_START.txt          # Quick reference
└── README_LOCAL_SETUP.md    # Detailed guide
```

## Common Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Check for TypeScript errors
pnpm check

# Format code
pnpm format
```

## Troubleshooting

### "Command not found: pnpm"
Install pnpm globally:
```bash
npm install -g pnpm
```

### "Port 5173 already in use"
Vite will automatically use the next available port. Check the terminal output for the actual URL.

### "Dependencies not installing"
Clear cache and reinstall:
```bash
rm -rf node_modules
pnpm install
```

### "Build fails with errors"
Clean build:
```bash
rm -rf dist
pnpm build
```

## GitHub Projects

Your portfolio links to these GitHub repositories:
- **ForEver**: https://github.com/ankit-7i/ForEver
- **ElectroStore**: https://github.com/ankit-7i/ElectroStore

Update these URLs in `Home.tsx` if you have different repositories.

## Contact Information

Update your contact details in the Contact section:
- Email: ankitrout513151979@gmail.com
- Phone: +91 7682949708
- LinkedIn: https://linkedin.com/in/ankitrout07
- GitHub: https://github.com/ankit-7i

## Technology Stack

- **React 19**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite**: Fast build tool
- **shadcn/ui**: Pre-built UI components
- **Lucide React**: Icon library

## Performance Tips

- Images use CDN URLs for fast loading
- CSS and JavaScript are minified in production
- Smooth animations use GPU acceleration
- Responsive design works on all devices

## Need Help?

1. Check **QUICK_START.txt** for quick reference
2. Read **README_LOCAL_SETUP.md** for detailed guide
3. Visit React docs: https://react.dev
4. Visit Tailwind docs: https://tailwindcss.com
5. Contact: ankitrout513151979@gmail.com

## Next Steps

1. Extract the project
2. Run `pnpm install`
3. Run `pnpm dev`
4. Edit `client/src/pages/Home.tsx` with your information
5. Deploy to Vercel, Netlify, or your hosting provider

---

**Your portfolio is ready to impress!** 🚀

Good luck with your job search!
