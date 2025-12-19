# Portfolio Website

A modern, responsive portfolio website built with Astro and optimized for GitLab Pages deployment.

## 🚀 Features

- **Modern Stack**: Built with Astro for optimal performance and SEO
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Fast Performance**: Static site generation for lightning-fast load times
- **SEO Optimized**: Semantic HTML, meta tags, and Open Graph support
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Clean Code**: Well-structured components and modular architecture
- **GitLab Pages Ready**: Pre-configured for seamless deployment

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── ExperienceCard.astro
│   │   ├── EducationCard.astro
│   │   └── ProjectCard.astro
│   ├── data/            # Data files for content
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── projects.ts
│   │   └── personal.ts
│   ├── layouts/         # Layout components
│   │   └── Layout.astro
│   ├── pages/           # Page routes
│   │   ├── index.astro       # Home page
│   │   ├── about.astro       # About page
│   │   ├── experience.astro  # Experience page
│   │   ├── education.astro   # Education page
│   │   ├── projects.astro    # Projects page
│   │   └── contact.astro     # Contact page
│   └── styles/          # Global styles
│       └── global.css
├── public/              # Static assets
├── .gitlab-ci.yml       # GitLab CI/CD configuration
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Setup and Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## ✏️ Customization

### Personal Information

Update your personal information in the data files:

1. **Personal Info** (`src/data/personal.ts`)
   - Name, role, bio
   - Email, GitHub, LinkedIn
   - Technologies and tools

2. **Experience** (`src/data/experience.ts`)
   - Add/edit your work experience
   - Include company, role, dates, and description

3. **Education** (`src/data/education.ts`)
   - Add your educational background
   - Include degrees, institutions, and achievements

4. **Projects** (`src/data/projects.ts`)
   - Showcase your projects
   - Add descriptions, tech stack, and links

### GitLab Pages Configuration

Before deploying to GitLab Pages, update the configuration in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://<your-username>.gitlab.io',
  base: '/<your-repository-name>',
  // ... rest of config
});
```

Replace:
- `<your-username>` with your GitLab username
- `<your-repository-name>` with your repository name

### Styling

- **Theme Colors**: Edit CSS variables in `src/styles/global.css`
- **Component Styles**: Each component has scoped styles that can be customized
- **Animations**: Modify animations in the global CSS file

## 🚀 Deployment to GitLab Pages

### Automatic Deployment

This project includes a `.gitlab-ci.yml` file that automatically builds and deploys your site when you push to the main branch.

### Steps:

1. **Push your code to GitLab**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitLab Pages**
   - Go to your GitLab project
   - Navigate to Settings > Pages
   - The site will be automatically deployed after the CI/CD pipeline completes

3. **Access your site**
   - Your site will be available at: `https://<your-username>.gitlab.io/<repository-name>`

### Manual Deployment

If you prefer to build manually:

```bash
npm run build
# The dist/ folder contains your built site
```

Then upload the contents of the `dist/` folder to your hosting provider.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 Theme Toggle

The site includes a dark/light mode toggle that:
- Automatically detects system preferences
- Saves user preference to localStorage
- Provides smooth transitions between themes

## ♿ Accessibility

This portfolio follows accessibility best practices:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators for keyboard users

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile devices (< 480px)
- Tablets (481px - 768px)
- Desktops (> 768px)

## 🔧 Technology Stack

- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Language**: TypeScript
- **Styling**: CSS (scoped styles, CSS variables)
- **Hosting**: GitLab Pages
- **CI/CD**: GitLab CI/CD

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For questions or feedback, please reach out through the contact page on the website.

---

**Note**: Remember to update all placeholder content (name, email, social links, etc.) with your actual information before deploying!
