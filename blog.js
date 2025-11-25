// Blog configuration
const blogPosts = [
    {
        file: 'blogs/getting-started-with-cargo-tracking.md',
        title: 'Getting Started with Cargo Tracking',
        date: '2025-01-15',
        excerpt: 'Learn the basics of tracking your cargo shipments online and understand the key information you need.'
    },
    {
        file: 'blogs/understanding-container-numbers.md',
        title: 'Understanding Container Numbers',
        date: '2025-01-10',
        excerpt: 'A comprehensive guide to reading and understanding shipping container identification numbers.'
    },
    {
        file: 'blogs/shipping-delays-and-solutions.md',
        title: 'Common Shipping Delays and How to Handle Them',
        date: '2025-01-05',
        excerpt: 'Discover the most common causes of shipping delays and practical solutions to minimize their impact.'
    }
];

// Function to load blog list
function loadBlogList() {
    const blogListElement = document.getElementById('blog-list');
    const blogContentElement = document.getElementById('blog-content');

    // Check if we're viewing a specific blog post
    const urlParams = new URLSearchParams(window.location.search);
    const postIndex = urlParams.get('post');

    if (postIndex !== null) {
        // Show specific blog post
        loadBlogPost(parseInt(postIndex));
    } else {
        // Show blog list
        blogListElement.style.display = 'grid';
        blogContentElement.style.display = 'none';

        blogListElement.innerHTML = blogPosts.map((post, index) => `
            <div class="blog-card" onclick="window.location.href='blogs.html?post=${index}'">
                <h3>${post.title}</h3>
                <div class="blog-meta">📅 ${formatDate(post.date)}</div>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="blogs.html?post=${index}" class="read-more">Read More →</a>
            </div>
        `).join('');
    }
}

// Function to load a specific blog post
async function loadBlogPost(index) {
    const blogListElement = document.getElementById('blog-list');
    const blogContentElement = document.getElementById('blog-content');
    const post = blogPosts[index];

    if (!post) {
        blogContentElement.innerHTML = '<p>Blog post not found.</p>';
        return;
    }

    blogListElement.style.display = 'none';
    blogContentElement.style.display = 'block';
    blogContentElement.innerHTML = '<div class="loading">Loading blog post...</div>';

    try {
        const response = await fetch(post.file);
        const markdown = await response.text();
        const html = marked.parse(markdown);

        blogContentElement.innerHTML = `
            <div class="blog-post">
                <a href="blogs.html" class="back-link">← Back to all posts</a>
                <h1>${post.title}</h1>
                <div class="blog-meta">📅 ${formatDate(post.date)}</div>
                <div class="blog-content">
                    ${html}
                </div>
            </div>
        `;
    } catch (error) {
        blogContentElement.innerHTML = `
            <div class="blog-post">
                <a href="blogs.html" class="back-link">← Back to all posts</a>
                <p>Error loading blog post. Please try again later.</p>
            </div>
        `;
        console.error('Error loading blog post:', error);
    }
}

// Format date helper
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadBlogList);
