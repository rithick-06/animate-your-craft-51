# Rithick Portfolio - Animate Your Craft

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include smooth animations, interactive components, and a professional design showcasing Rithick's projects and skills.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion animations and Three.js 3D elements
- **Interactive Components**: Particle backgrounds, 3D icons, and dynamic content
- **Portfolio Sections**: About, Projects, Skills, Contact, and more
- **Performance Optimized**: Built with Vite for fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Animations**: Framer Motion, Three.js, TSParticles
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/animate-your-craft-51.git
cd animate-your-craft-51
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

3. **The GitHub Action will automatically deploy** your site when you push to the main branch.

### Option 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main branch

## 🌐 Access Your Deployed Site

Your portfolio will be available at:
```
https://yourusername.github.io/animate-your-craft-51/
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Portfolio/      # Main portfolio components
│   ├── RithickPortfolio/ # Rithick-specific components
│   └── ui/            # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🎨 Customization

- **Colors**: Update Tailwind CSS variables in `tailwind.config.ts`
- **Content**: Modify component files in `src/components/`
- **Styling**: Customize CSS in `src/index.css` and component files
- **Animations**: Adjust Framer Motion settings in component files

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For any questions or support, please reach out through the contact form on the portfolio website.

---

**Note**: Make sure to replace `yourusername` with your actual GitHub username in the deployment instructions and URLs.
