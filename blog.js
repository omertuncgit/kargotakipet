// Dynamically loaded blog posts
let blogPosts = [];

// Function to load blogs from blogs.json
async function fetchBlogsData() {
    try {
        const response = await fetch('blogs.json');
        if (!response.ok) throw new Error("Failed to fetch blog data");
        blogPosts = await response.json();
    } catch (error) {
        console.error("Error fetching blogs.json:", error);
        document.getElementById('blog-list').innerHTML = '<p>Blog listesi yüklenemedi.</p>';
    }
}

// Function to load blog list
async function loadBlogList() {
    await fetchBlogsData();
    
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
                <a href="blogs.html?post=${index}" class="read-more">Devamını Oku →</a>
            </div>
        `).join('');
    }
}

// Function to load a specific blog post
async function loadBlogPost(index) {
    if (blogPosts.length === 0) await fetchBlogsData();
    
    const blogListElement = document.getElementById('blog-list');
    const blogContentElement = document.getElementById('blog-content');
    const post = blogPosts[index];

    if (!post) {
        blogContentElement.style.display = 'block';
        blogContentElement.innerHTML = '<p>Blog yazısı bulunamadı.</p>';
        return;
    }

    blogListElement.style.display = 'none';
    blogContentElement.style.display = 'block';
    blogContentElement.innerHTML = '<div class="loading">Blog yazısı yükleniyor...</div>';

    try {
        const response = await fetch(post.file);
        const markdown = await response.text();
        const html = marked.parse(markdown);

        // Insert in-article ad in the middle of content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const paragraphs = tempDiv.querySelectorAll('p, h2, h3');

        if (paragraphs.length > 5) {
            const midPoint = Math.floor(paragraphs.length / 2);
            const adHtml = \`
                <div style="margin: 30px 0; padding: 20px; background: #FFFBEB; border-radius: 10px; text-align: center;">
                    <ins class="adsbygoogle"
                         style="display:block; text-align:center;"
                         data-ad-layout="in-article"
                         data-ad-format="fluid"
                         data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
                         data-ad-slot="YYYYYYYYYY"></ins>
                </div>
            \`;
            paragraphs[midPoint].insertAdjacentHTML('beforebegin', adHtml);
        }

        blogContentElement.innerHTML = \`
            <div class="blog-post">
                <a href="blogs.html" class="back-link">← Tüm Yazılara Dön</a>
                <h1>${post.title}</h1>
                <div class="blog-meta">📅 ${formatDate(post.date)}</div>
                <div class="blog-content">
                    \${tempDiv.innerHTML}
                </div>
            </div>
        \`;

        // Initialize the in-article ad
        if(window.adsbygoogle) {
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    } catch (error) {
        blogContentElement.innerHTML = \`
            <div class="blog-post">
                <a href="blogs.html" class="back-link">← Tüm Yazılara Dön</a>
                <p>Blog yazısı yüklenirken hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
            </div>
        \`;
        console.error('Error loading blog post:', error);
    }
}

// Format date helper
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadBlogList);
