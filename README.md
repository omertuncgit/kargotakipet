# Cargo Tracking Hub 🚢

A static website for tracking cargo shipments worldwide with an integrated blog system. Features a beautiful pastel yellow theme and provides quick access to major cargo tracking services.

## Features

- **Cargo Tracking Links**: Direct access to 12+ major shipping carriers and freight forwarders
- **Blog System**: Markdown-based blog with automatic rendering
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Pastel Yellow Theme**: Modern, easy-on-the-eyes color scheme
- **Fancy Hero Section**: Eye-catching animated hero section
- **Card-based Layout**: Clean, organized presentation of tracking services

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

1. Maersk Line
2. MSC (Mediterranean Shipping Company)
3. CMA CGM
4. Hapag-Lloyd
5. COSCO Shipping
6. ONE (Ocean Network Express)
7. Evergreen Line
8. Yang Ming
9. DHL Global Forwarding
10. Kuehne + Nagel
11. ZIM
12. HMM (Hyundai Merchant Marine)

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

The site includes three comprehensive blog posts:

1. **Getting Started with Cargo Tracking** - Basics of tracking shipments online
2. **Understanding Container Numbers** - Guide to reading container identification numbers
3. **Common Shipping Delays and How to Handle Them** - Tips for managing delays

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

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
