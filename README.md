# Developer Portfolio Website

A production-ready developer portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases your skills, projects, and professional experience with a modern, responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Next.js 14 and App Router
- **SEO Ready**: Built-in SEO optimization with sitemap and robots.txt
- **Interactive**: Animated components and smooth transitions
- **Command Menu**: Quick navigation with Cmd+K (⌘K) shortcut
- **Project Showcase**: Detailed project pages with metrics and case studies
- **Skill Matrix**: Interactive skill visualization
- **Testimonials**: Animated testimonial carousel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd terminal-card
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

1. **Update your details** in `src/lib/config.ts`:
   - Name, title, description
   - Social media links
   - Contact information
   - Calendly link

2. **Add your projects** in `src/lib/data.ts`:
   - Project details and metrics
   - Technology stack
   - Challenges and outcomes

3. **Add your skills** in `src/lib/data.ts`:
   - Skill categories and proficiency levels
   - Technology expertise

### Images

1. **Add your avatar** as `/public/avatar.png`
2. **Add project covers** in `/public/projects/`:
   - `project-a-cover.png`
   - `project-b-cover.png`
   - `project-c-cover.png`
3. **Add favicon** as `/public/favicon.ico`

### Content

- **About page**: Update your story in `src/app/about/page.tsx`
- **Projects**: Modify project details in `src/lib/data.ts`
- **Testimonials**: Update testimonials in `src/lib/data.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js
   - Deploy with zero configuration

### Other Platforms

- **Netlify**: Works with Next.js static export
- **AWS Amplify**: Supports Next.js applications
- **Railway**: Easy deployment with GitHub integration

## 📁 Project Structure

```
terminal-card/
├── public/                 # Static assets
│   ├── projects/          # Project images
│   ├── avatar.png         # Your profile picture
│   └── favicon.ico        # Site favicon
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── projects/      # Projects pages
│   │   ├── stack/         # Tech stack page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── header.tsx    # Navigation header
│   │   ├── footer.tsx    # Site footer
│   │   └── ...           # Other components
│   └── lib/              # Utility functions and data
│       ├── config.ts     # Site configuration
│       ├── data.ts       # Projects and skills data
│       ├── schema.ts     # TypeScript schemas
│       └── utils.ts      # Utility functions
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── next.config.mjs       # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎯 Key Features Explained

### Command Menu (⌘K)
- Quick navigation between pages
- Search through projects
- Theme switching
- Accessible via keyboard shortcut

### Project Showcase
- Detailed project pages with case studies
- Before/after metrics
- Technology stack display
- Challenge/solution/outcome format

### Skill Matrix
- Interactive skill visualization
- Proficiency levels with color coding
- Clickable skills for project filtering

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

**Happy coding! 🚀**
