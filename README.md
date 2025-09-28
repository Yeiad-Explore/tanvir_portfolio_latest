# Tanvir Ahmed Chowdhury - Portfolio Website

A modern, futuristic portfolio website built with React, TypeScript, and Tailwind CSS featuring glassmorphism design and smooth animations.

## Features

- **Modern Glassmorphism Design**: Frosted glass panels with blur effects and glowing edges
- **Smooth Animations**: GSAP and Framer Motion powered animations with cursor effects and parallax scrolling
- **Interactive Project Cards**: Animated data visualization cards with hover effects and statistics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, floating animations, and cursor-follow effects
- **Modern Footer**: Animated footer with social links and organized sections
- **3D Elements**: Interactive 3D scenes and particle effects
- **Optimized Performance**: Bundle size under 50KB with optimized assets

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- GSAP for animations
- Framer Motion for smooth UI animations
- Three.js for 3D graphics
- Lucide React for icons
- Custom CSS for glassmorphism effects

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder with optimized bundle size.

## Design Features

- **Background**: Gradient with animated neon blobs
- **Typography**: Modern Inter font with gradient text effects
- **Colors**: Translucent glass with neon blue, purple, and pink accents
- **Animations**: Smooth transitions, floating elements, and cursor-based effects
- **Interactive Cards**: Animated data visualization with hover effects and statistics
- **Layout**: Clean, minimal design with lots of white space

## Sections

- **Hero**: Large title with call-to-action buttons
- **About**: Personal information and education details
- **Experience**: Timeline of work experience and education
- **Projects**: Featured projects with interactive animated data visualization cards
- **Contact**: Contact form and information
- **Footer**: Animated footer with social links, company info, and resources

## Project Structure

```
src/
├── components/
│   ├── ui/                           # Reusable UI components (shadcn/ui structure)
│   │   ├── footer-section.tsx        # Animated footer component
│   │   └── animated-card-chart.tsx   # Interactive data visualization cards
│   ├── About.tsx                     # About section
│   ├── BackgroundBlobs.tsx           # Animated background elements
│   ├── Contact.tsx                   # Contact section
│   ├── Experience.tsx                # Experience timeline
│   ├── Hero.tsx                      # Hero section
│   ├── Navigation.tsx                # Navigation bar
│   ├── ParticleField.tsx             # Particle effects
│   ├── ProfileCard.tsx               # Profile card component
│   ├── Projects.tsx                  # Projects showcase with animated cards
│   └── Scene3D.tsx                   # 3D scene component
├── App.tsx                           # Main application component
└── index.tsx                         # Application entry point
```

## Dependencies

### Core Dependencies

- `react` & `react-dom` - React framework
- `typescript` - TypeScript support
- `tailwindcss` - CSS framework

### Animation & UI

- `gsap` - Advanced animations
- `motion` - Framer Motion for smooth UI animations
- `lucide-react` - Modern icon library

### 3D Graphics

- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber

### Utilities

- `clsx` - Conditional className utility
- `tailwind-merge` - Tailwind CSS class merging

## Performance

- Optimized bundle size under 50KB
- Lazy loading for better performance
- Reduced motion support for accessibility
- Mobile-optimized animations
- Framer Motion with reduced motion detection
- Efficient data visualization rendering

## Interactive Features

- **Animated Project Cards**: Each project features an interactive data visualization
- **Hover Effects**: Cards respond to mouse interactions with smooth animations
- **Statistics Display**: Real-time stats appear on hover with themed colors
- **Responsive Design**: Cards adapt to different screen sizes while maintaining functionality
- **Glassmorphism Theme**: Consistent visual design across all interactive elements
