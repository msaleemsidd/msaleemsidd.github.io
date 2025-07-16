# MyProfile - Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing Saleem Siddiqui's game development portfolio.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark Theme**: Beautiful dark theme with custom color palette
- **Interactive Components**: Hover effects, smooth scrolling, and interactive elements
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with categories
- **Skills Section**: Animated progress bars and skill categories
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd MyProfile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- **Hero Section** (`src/components/Hero.js`):
  - Change "Saleem Siddiqui" to your actual name
  - Update the description and social links

- **About Section** (`src/components/About.js`):
  - Update personal information (birthday, location, experience)
  - Modify the about text and skills
  - Replace the profile image placeholder

- **Skills Section** (`src/components/Skills.js`):
  - Update skill percentages and categories
  - Add or remove skills as needed

- **Projects Section** (`src/components/Projects.js`):
  - Replace project data with your actual projects
  - Update GitHub and live links
  - Add project images

- **Contact Section** (`src/components/Contact.js`):
  - Update email, phone, and location
  - Modify social media links

### Styling
The color scheme and styling can be customized in:

- **Tailwind Config** (`tailwind.config.js`): Update colors and animations
- **CSS Variables** (`src/index.css`): Modify component styles

### Colors
The current color scheme uses:
- Primary: `#0a192f` (Dark blue)
- Secondary: `#64ffda` (Cyan)
- Text Primary: `#ccd6f6` (Light blue)
- Text Secondary: `#8892b0` (Gray)

## 📁 Project Structure

```
MyProfile/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/MyProfile",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth animations with hardware acceleration
- SEO optimized with proper meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Portfolio design for Saleem Siddiqui
- Icons from React Icons
- Animations powered by Framer Motion
- Built with React and Tailwind CSS

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy Coding! 🚀** 