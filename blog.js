// Blog configuration
const blogPosts = [
    {
        file: "blogs/posta-sektoru-pazar-verileri-2024-01.md",
        title: "Türkiye Posta Sektörü Pazar Verileri Raporu",
        date: "2026-04-02",
        excerpt: "Türkiye Posta Sektörü Pazar Verileri Raporu BTK 2024-1 pazar verilerine göre hazırlanmıştır. Detaylar makalede......"
    },
    {
        file: "blogs/online-alisveris-faydalar-zararlar.md",
        title: "Online Market Alışverişin Faydaları ve Zararları",
        date: "2026-04-02",
        excerpt: "Bu makalede Online alışverişin müşteri ve satıcı açısından faydaları ve zararları üstünde durulmuştur. Keyifli okumalar dileriz...."
    },
    {
        file: "blogs/kelimelik-oyunu-harf-sayisi-ve-hileler.md",
        title: "Kelimelik Oyunu Harf Sayısı ve Hileler",
        date: "2026-04-02",
        excerpt: "KELİMELİK OYUNUNDA KULLANILAN HARF SAYISI, PUANLARI VE HİLELER..."
    },
    {
        file: "blogs/modacruz-urun-ekleme.md",
        title: "Modacruz'a Ürün Ekleme",
        date: "2026-04-02",
        excerpt: "Moda Cruz ikinci el kıyafet ve aksesuar alışveriş sitesidir. Erkek ve kadın ürünleri satılabilir. Gelin bu sitede nasıl satış yapılır bir göz gezdirel..."
    },
    {
        file: "blogs/dolap-uygulamasinda-satislar-nasil-artar.md",
        title: "Dolap uygulamasında satışlar nasıl arttırılır?",
        date: "2026-04-02",
        excerpt: "Artık kullanmadığınız kıyafet, çanta, ayakkabı ya da aksesuarları Dolap.com’da satabilirsiniz. İkinci el online alış ve satışla pahalı ve tek sefer gi..."
    },
    {
        file: "blogs/amazon-sketchers-alisveris-nasil-yapilir.md",
        title: "Amazon.com'dan Nasıl Ucuz Sketchers Alışverişi Yapılır?",
        date: "2026-04-02",
        excerpt: "Amazon.com Türkiye’ye ürün gönderebilmekte. Eğer uygun filtreyi uygularsanız Türkiye’ye kargo bedeli alınmadan gönderilen ürünleri bulabilirsiniz...."
    },
    {
        file: "blogs/aliexpress-nasil-alisveris-ve-kargo-takibi-yapilir.md",
        title: "Aliexpress Kargo Takibi Nasıl Yapılır? Alışveriş Yaparken Dikkat Edilmesi Gerekenler",
        date: "2026-04-02",
        excerpt: "AliBaba grubunun dolayısıyla perakende satış yapan Aliexpress in kurucusu ve Başkanı JACK MA. Çindeki ve dünyadaki sayılı zenginlerden. JACK MA İsmini..."
    },
    {
        file: "blogs/aliexpress-derecelendirmeleri-a0-a1-a2-a3-a4-nedir.md",
        title: "Aliexpress Derecelendirmeleri A0, A1, A2, A3, A4 nedir?",
        date: "2026-04-02",
        excerpt: "Aliexpress çok alışveriş yapan müşterilerini A0, A1, A2, A3, A4 etiketleriyle derecelendiriyor. Böylece satıcıların size nasıl davranması konusunda ke..."
    },
    {
        file: 'blogs/amazon-cagri-merkezi.md',
        title: 'Amazon.com.tr Çağrı Merkezine Kolayca Ulaşın',
        date: '2026-04-02',
        excerpt: 'Amazon Türkiye müşteri hizmetlerine nasıl ulaşacağınızı adım adım resimli anlatımla öğrenin.'
    },
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
