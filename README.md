# Nalinam Skin and Hair Clinic - Website

<div align="center">

**Premier Dermatology Clinic in Salem, Tamil Nadu**

[![Live Site](https://img.shields.io/badge/Live-nalinamclinic.com-10b981?style=for-the-badge)](https://nalinamclinic.com)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Performance](#-performance) • [Contact](#-contact)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Performance](#-performance)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [SEO & Analytics](#-seo--analytics)
- [Accessibility](#-accessibility)
- [Contact](#-contact)

---

## 🏥 About

Nalinam Skin and Hair Clinic's official website - A modern, responsive web application showcasing our dermatology services, skin treatments, hair care solutions, and general medical consultations in Salem, Tamil Nadu. Built with cutting-edge web technologies to provide the best user experience for patients seeking quality dermatological care.

### Key Objectives

- **Patient-Centric Design**: Easy navigation and quick appointment booking
- **Performance**: Lightning-fast load times (95+ Lighthouse score)
- **Accessibility**: WCAG 2.1 AA compliant for all users
- **SEO Optimized**: Rich structured data for better search visibility
- **Mobile-First**: Seamless experience across all devices
- **Secure**: Industry-standard security headers and best practices

---

## ✨ Features

### 🎨 **User Experience**

- ⚡ **Instant Page Loads**: Advanced code splitting and lazy loading
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations**: Framer Motion for delightful interactions
- 🌐 **Progressive Web App**: Offline support with service worker
- ♿ **Accessible**: Keyboard navigation, screen reader support
- 🌍 **Local Focus**: Dedicated for Salem patients with easy directions

### 🏥 **Clinic Features**

- 📅 **Easy Appointment Booking**: Click-to-call and WhatsApp integration
- 👨‍⚕️ **Expert Doctors**: Meet Dr. Tamil Kumar (MBBS, MD)
- 💊 **Treatment Services**: 
  - Skin Treatment (Acne, Pigmentation, Anti-aging)
  - Hair Treatment (Hair Fall, Dandruff, Scalp Care)
  - General Consultation (Fever, Common Ailments)
  - Cosmetic Treatments (Chemical Peels, Facials)
- 📍 **Location**: Salem, Tamil Nadu (Permanur)
- 💬 **Patient Testimonials**: Real feedback from satisfied patients
- 📞 **Quick Contact**: Direct call: 9790029573

### 🔧 **Technical Excellence**

- ⚙️ **Modern React 19**: Latest features and hooks
- 🚀 **Vite Build Tool**: Ultra-fast HMR and build times
- 📦 **Optimized Bundles**: Code splitting, tree shaking
- 🖼️ **AVIF Images**: Next-gen image format for 50% smaller files
- 📊 **Analytics Integration**: Vercel Analytics & Speed Insights
- 🛡️ **Security Headers**: CSP, HSTS, XSS protection
- 🔐 **Data Protection**: Healthcare data privacy standards

---

## 🛠️ Tech Stack

### **Frontend**

| Technology    | Version  | Purpose      |
| ------------- | -------- | ------------ |
| React         | 19.1.1   | UI Framework |
| Vite          | 7.1.2    | Build Tool   |
| TailwindCSS   | 4.1.12   | Styling      |
| Framer Motion | 12.23.12 | Animations   |
| React Router  | 7.8.2    | Routing      |

### **Performance & Optimization**

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: On-demand component loading
- **Image Optimization**: AVIF format with fallbacks
- **Service Worker**: Aggressive caching strategy
- **Bundle Analysis**: Terser minification & tree shaking

### **SEO & Analytics**

- **Vercel Analytics**: Real-time visitor analytics
- **Speed Insights**: Core Web Vitals monitoring
- **Structured Data**: JSON-LD schemas (Medical Clinic, Local Business)
- **Sitemap**: Auto-generated XML sitemap
- **Meta Tags**: Open Graph, Twitter Cards

---

## ⚡ Performance

Our website achieves exceptional performance metrics:

### Lighthouse Scores (Desktop)

```
🟢 Performance:    98/100
🟢 Accessibility:  95/100
🟢 Best Practices: 100/100
🟢 SEO:            100/100
```

### Key Metrics

| Metric                             | Target  | Achieved |
| ---------------------------------- | ------- | -------- |
| **First Contentful Paint (FCP)**   | < 1.8s  | ~0.8s    |
| **Largest Contentful Paint (LCP)** | < 2.5s  | ~1.2s    |
| **Time to Interactive (TTI)**      | < 3.8s  | ~2.0s    |
| **Total Blocking Time (TBT)**      | < 200ms | ~50ms    |
| **Cumulative Layout Shift (CLS)**  | < 0.1   | ~0.001   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/Nalinam-skincare.git
cd Nalinam-skincare/SSS-Web
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

Edit `.env` with your configuration (if needed)

4. **Start development server**

```bash
npm run dev
```

Visit `http://localhost:5173`

### Quick Commands

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run deploy           # Deploy to Vercel
```

---

## 📁 Project Structure

```
SSS-Web/
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
├── package.json              # Dependencies & scripts
├── public/                   # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/               # Images, logos
├── src/                      # Source code
│   ├── main.jsx              # Application entry
│   ├── App.jsx               # Root component
│   ├── Components/           # React components
│   │   ├── pages/            # Page components
│   │   ├── sections/         # Section components
│   │   └── ui/               # UI components
│   ├── contexts/             # React contexts
│   ├── data/                 # Static data (testimonials, etc.)
│   ├── hooks/                # Custom hooks
│   └── utils/                # Utility functions
└── README.md                 # This file
```

---

## 💻 Development

### Code Style

- **JavaScript**: ES6+ features, functional components
- **Styling**: TailwindCSS utility-first approach
- **Components**: Small, reusable, single responsibility
- **Naming**: Descriptive, camelCase for variables, PascalCase for components

### Best Practices

1. Use PropTypes for type checking
2. Lazy load routes and heavy components
3. Optimize images before adding
4. Update SEO data for new pages
5. Test accessibility with keyboard navigation
6. Keep components under 300 lines

---

## 🌐 Deployment

### Automatic Deployment (Vercel)

- **Production**: Automatic on push to `main` branch
- **Preview**: Automatic for pull requests
- **Domain**: https://nalinamclinic.com

### Manual Deployment

```bash
npm run build
npm run deploy
```

### Environment Variables

Set these in Vercel dashboard:
- `VITE_API_URL` (if using backend)
- `VITE_ANALYTICS_ID` (if using custom analytics)

---

## 📊 SEO & Analytics

### SEO Features

- ✅ Structured Data (Medical Clinic, Local Business schemas)
- ✅ Dynamic Meta Tags (OG tags, Twitter Cards)
- ✅ XML Sitemap with all pages
- ✅ Robots.txt for proper crawling
- ✅ Canonical URLs
- ✅ Mobile-friendly design
- ✅ Page titles optimized for keywords:
  - "Skin Clinic Salem"
  - "Dermatologist Salem"
  - "Hair Treatment Salem"
  - "Nalinam Clinic"

### Analytics

- Vercel Analytics (built-in)
- Google Search Console integration
- Core Web Vitals tracking
- Patient journey analytics

### Target Keywords

- Primary: Nalinam Clinic, Skin Clinic Salem, Dermatologist Salem
- Secondary: Hair Treatment Salem, Acne Treatment, Hair Fall Treatment
- Local: Salem Skin Care, Permanur Clinic, Tamil Nadu Dermatology

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

- ✅ Keyboard navigation support
- ✅ Screen reader compatibility (ARIA labels)
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Focus indicators on interactive elements
- ✅ Alt text for all images
- ✅ Semantic HTML structure
- ✅ Skip to content links
- ✅ Proper heading hierarchy

---

## 📞 Contact

**Nalinam Skin and Hair Clinic**

- 🌐 Website: [nalinamclinic.com](https://nalinamclinic.com)
- 📧 Email: contact.nalinam@gmail.com
- 📱 Phone: +91 9790029573
- 📍 Address: 39, Kamaraj Colony, Omalur Main Road, Permanur, Salem - 636 007
- 💬 WhatsApp: +91 9790029573

### Social Media

- Facebook: [facebook.com/nalinamclinic](https://facebook.com/nalinamclinic)
- Instagram: [@nalinamclinic](https://instagram.com/nalinamclinic)
- YouTube: [youtube.com/@nalinamclinic](https://youtube.com/@nalinamclinic)

---

## 🏆 Our Services

### Skin Treatment
- Acne & Pimple Treatment
- Pigmentation Removal
- Anti-Aging Treatments
- Skin Allergy Care
- Chemical Peels
- Facial Treatments

### Hair Treatment
- Hair Fall Solutions
- Dandruff Treatment
- Scalp Disorders
- Hair Transplant Consultation
- Hair Growth Treatments

### General Consultation
- Fever Treatment
- Common Ailments
- Health Checkups
- Medical Consultations

---

## 👨‍⚕️ Our Team

**Dr. Tamil Kumar** - MBBS, MD  
Founder & Chief Physician  
Specialized in Dermatology and General Medicine

---

## 🎯 Why Choose Nalinam Clinic?

✅ Expert Dermatological Care  
✅ Personalized Treatment Plans  
✅ Modern Equipment & Techniques  
✅ Clean & Hygienic Environment  
✅ Affordable Pricing  
✅ Convenient Salem Location  
✅ 100+ Happy Patients  

---

<div align="center">

**Built with ❤️ for better skin and hair health in Salem**

© 2025 Nalinam Skin and Hair Clinic. All rights reserved.

[Book Appointment](tel:+919790029573) • [Get Directions](https://maps.google.com/?q=39+Kamaraj+Colony+Omalur+Main+Road+Permanur+Salem+636007)

</div>#   N a l i n a m - w e b - f i n a l  
 #   N a l i n a m s k i n - w e b  
 