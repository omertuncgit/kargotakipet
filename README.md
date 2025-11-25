# KargoTakipet.net 📦

Türkiye ve dünya çapında kargo takip hizmetleri için güvenilir rehberiniz. Yurtiçi Kargo, Aras, MNG, PTT, Sürat ve tüm dünya kargo şirketlerini tek yerden takip edin.

**Website:** [kargotakipet.net](https://kargotakipet.net)

A comprehensive cargo tracking platform in Turkish with an integrated blog system. Features a beautiful pastel yellow theme and provides quick access to major cargo tracking services worldwide.

## Features

- **🇹🇷 Turkish Localization**: Fully localized in Turkish for Turkish-speaking users
- **📦 Cargo Tracking Links**: Direct access to 18+ major Turkish and international carriers
- **📝 Turkish Blog System**: Comprehensive guides on cargo tracking, international shipping, and e-commerce
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Pastel Yellow Theme**: Modern, easy-on-the-eyes color scheme
- **✨ Animated Hero Section**: Eye-catching hero section with smooth animations
- **🔍 SEO Optimized**: Complete meta tags and Open Graph support
- **⚡ Fast Loading**: Static HTML with no build process required

## Structure

```
kargo2/
├── index.html          # Main homepage with tracking links
├── blogs.html          # Blog listing and post viewer
├── styles.css          # All styles with pastel yellow theme
├── script.js           # Main page JavaScript
├── blog.js             # Blog functionality and markdown rendering
├── blogs/              # Markdown blog posts
│   ├── getting-started-with-cargo-tracking.md
│   ├── understanding-container-numbers.md
│   └── shipping-delays-and-solutions.md
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Dynamic blog loading and interactions
- **Marked.js**: Markdown parsing library (loaded via CDN)

## Cargo Tracking Services Included

### Turkish Cargo Companies 🇹🇷
1. **Yurtiçi Kargo** - Turkey's leading cargo and logistics company
2. **Aras Kargo** - Extensive delivery network across Turkey
3. **MNG Kargo** - Fast and reliable delivery service
4. **PTT Kargo** - Turkish Post's nationwide service
5. **Sürat Kargo** - Express delivery service
6. **UPS Türkiye** - International shipping in Turkey

### International Carriers 🌍
7. Maersk Line
8. MSC (Mediterranean Shipping Company)
9. CMA CGM
10. Hapag-Lloyd
11. COSCO Shipping
12. ONE (Ocean Network Express)
13. Evergreen Line
14. Yang Ming
15. DHL Global Forwarding
16. Kuehne + Nagel
17. ZIM
18. HMM (Hyundai Merchant Marine)

## How to Use

### Viewing the Website

Simply open `index.html` in any modern web browser. No build process or server required!

For the best experience, you can use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### Adding Blog Posts

1. Create a new markdown file in the `blogs/` directory
2. Write your content using standard markdown syntax
3. Add the post to the `blogPosts` array in `blog.js`:

```javascript
{
    file: 'blogs/your-post-name.md',
    title: 'Your Post Title',
    date: '2025-01-20',
    excerpt: 'A brief description of your post.'
}
```

### Customizing the Theme

All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --pastel-yellow: #FFF4C2;
    --pastel-yellow-dark: #FFE999;
    --pastel-yellow-light: #FFFBEB;
    --pastel-peach: #FFE5B4;
    --text-dark: #4A4A4A;
    --text-medium: #6B6B6B;
    --accent-orange: #FFB84D;
}
```

## Blog Posts

### Turkish Blog Posts (Türkçe) 🇹🇷
1. **Türkiye'de Kargo Takibi: Kapsamlı Rehber** - Complete guide to cargo tracking in Turkey
2. **Türkiye'den Uluslararası Kargo Gönderimi Rehberi** - International shipping from Turkey guide with customs procedures
3. **E-Ticaret ve Kargo Entegrasyonu** - E-commerce cargo integration guide with API integration steps

### English Blog Posts
4. **Getting Started with Cargo Tracking** - Basics of tracking shipments online
5. **Understanding Container Numbers** - Guide to reading container identification numbers
6. **Common Shipping Delays and How to Handle Them** - Tips for managing delays

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Branding

**Brand Name:** KargoTakipet.net
**Logo:** 📦 Package icon with brand name
**Tagline:** "Türkiye ve dünya çapında kargo takip hizmetleri için güvenilir rehberiniz"
**Primary Color:** Pastel Yellow (#FFF4C2)
**Accent Color:** Orange (#FFB84D)
**Domain:** kargotakipet.net

### Brand Assets
- `favicon.svg` - SVG favicon (package icon)
- Open Graph and Twitter Card meta tags included
- Fully responsive branding across all pages

## License

This project is open source and available for personal and commercial use.

## Contributing

Feel free to fork this project and customize it for your needs. Some ideas for enhancements:

- Add more carrier links
- Create additional blog posts
- Implement search functionality
- Add a contact form
- Integrate real-time tracking APIs
- Add multilingual support

## Credits

Created with ❤️ for the global shipping community.
