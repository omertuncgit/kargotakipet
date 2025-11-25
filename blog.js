// Blog configuration
const blogPosts = [
    {
        file: 'blogs/turkiyede-kargo-takibi.md',
        title: 'Türkiye\'de Kargo Takibi: Kapsamlı Rehber',
        date: '2025-01-20',
        excerpt: 'Türkiye\'deki kargo takip süreçlerini ve en etkili takip yöntemlerini öğrenin. Tüm kargo şirketleri için detaylı bilgiler.'
    },
    {
        file: 'blogs/uluslararasi-kargo-gonderimi.md',
        title: 'Türkiye\'den Uluslararası Kargo Gönderimi Rehberi',
        date: '2025-01-18',
        excerpt: 'Yurtdışına kargo göndermek için bilmeniz gereken her şey. Gümrük işlemleri, belgeler ve ipuçları.'
    },
    {
        file: 'blogs/e-ticaret-kargo-entegrasyonu.md',
        title: 'E-Ticaret ve Kargo Entegrasyonu: Başarılı Teslimat Rehberi',
        date: '2025-01-15',
        excerpt: 'E-ticaret işletmeniz için en uygun kargo çözümleri ve entegrasyon süreçleri hakkında kapsamlı rehber.'
    },
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
                <a href="blogs.html?post=${index}" class="read-more">Devamını Oku →</a>
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
            const adHtml = `
                <div style="margin: 30px 0; padding: 20px; background: #FFFBEB; border-radius: 10px; text-align: center;">
                    <ins class="adsbygoogle"
                         style="display:block; text-align:center;"
                         data-ad-layout="in-article"
                         data-ad-format="fluid"
                         data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
                         data-ad-slot="YYYYYYYYYY"></ins>
                </div>
            `;
            paragraphs[midPoint].insertAdjacentHTML('beforebegin', adHtml);
        }

        blogContentElement.innerHTML = `
            <div class="blog-post">
                <a href="blogs.html" class="back-link">← Tüm Yazılara Dön</a>
                <h1>${post.title}</h1>
                <div class="blog-meta">📅 ${formatDate(post.date)}</div>
                <div class="blog-content">
                    ${tempDiv.innerHTML}
                </div>
            </div>
        `;

        // Initialize the in-article ad
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
        blogContentElement.innerHTML = `
            <div class="blog-post">
                <a href="blogs.html" class="back-link">← Tüm Yazılara Dön</a>
                <p>Blog yazısı yüklenirken hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
            </div>
        `;
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
