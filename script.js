// International tracking sites data
const trackingSites = [
    {
        icon: '🌊',
        name: 'Maersk Line',
        description: 'Dünyanın en büyük konteyner nakliye şirketi ile kargonuzu takip edin.',
        url: 'https://www.maersk.com/tracking'
    },
    {
        icon: '📦',
        name: 'MSC',
        description: 'Mediterranean Shipping Company - Küresel rotalarda gönderilerinizi takip edin.',
        url: 'https://www.msc.com/track-a-shipment'
    },
    {
        icon: '🚢',
        name: 'CMA CGM',
        description: 'CMA CGM Group gönderileri için dünya çapında gerçek zamanlı takip.',
        url: 'https://www.cma-cgm.com/ebusiness/tracking'
    },
    {
        icon: '⚓',
        name: 'Hapag-Lloyd',
        description: 'Dünyanın önde gelen nakliye şirketlerinden biriyle konteyner ve program takibi.',
        url: 'https://www.hapag-lloyd.com/en/online-business/track/track-by-container.html'
    },
    {
        icon: '🌏',
        name: 'COSCO Shipping',
        description: 'Çin\'in en büyük nakliye şirketi ile kargonuzu takip edin.',
        url: 'https://elines.coscoshipping.com/ebusiness/cargoTracking'
    },
    {
        icon: '🚛',
        name: 'ONE (Ocean Network Express)',
        description: 'ONE\'ın kapsamlı takip sistemi ile konteynerlerinizi izleyin.',
        url: 'https://ecomm.one-line.com/ecom/CUP_HOM_3301.do'
    },
    {
        icon: '📍',
        name: 'Evergreen Line',
        description: 'Gerçek zamanlı konteyner takibi ve program bilgisi.',
        url: 'https://www.evergreen-line.com/emodal/cmn_function/qryContainerNoCtrl'
    },
    {
        icon: '🔍',
        name: 'Yang Ming',
        description: 'Yang Ming Marine Transport Corporation ile gönderilerinizi takip edin.',
        url: 'https://www.yangming.com/e-service/track_trace/track_trace_cargo_tracking.aspx'
    },
    {
        icon: '✈️',
        name: 'DHL Global Forwarding',
        description: 'Dünya çapında hava ve deniz yolu kargo gönderilerini takip edin.',
        url: 'https://www.dhl.com/global-en/home/tracking.html'
    },
    {
        icon: '🌐',
        name: 'Kuehne + Nagel',
        description: 'Deniz, hava ve kara yolu nakliyesi için kapsamlı takip.',
        url: 'https://www.kn-portal.com/tracking/'
    },
    {
        icon: '📮',
        name: 'ZIM',
        description: 'ZIM Entegre Nakliye Hizmetleri ile konteynerlerinizi takip edin.',
        url: 'https://www.zim.com/tools/track-a-shipment'
    },
    {
        icon: '🛳️',
        name: 'HMM (Hyundai Merchant Marine)',
        description: 'Kore\'nin en büyük konteyner taşıyıcısı ile kargonuzu takip edin.',
        url: 'https://www.hmm21.com/e-service/USA/trackTrace/trackTrace.do'
    },
    {
        icon: '🇹🇷',
        name: 'Yurtiçi Kargo',
        description: 'Türkiye\'nin önde gelen kargo ve lojistik şirketi, ülke çapında hizmet.',
        url: 'https://www.yurticikargo.com/tr/online-servisler/gonderi-sorgula'
    },
    {
        icon: '📮',
        name: 'Aras Kargo',
        description: 'Türkiye\'nin en büyük kargo şirketlerinden biri, geniş dağıtım ağı.',
        url: 'https://www.araskargo.com.tr/kargo-takip'
    },
    {
        icon: '🚚',
        name: 'MNG Kargo',
        description: 'Türkiye genelinde hızlı ve güvenilir kargo teslimat hizmeti.',
        url: 'https://www.mngkargo.com.tr/kargo-takip'
    },
    {
        icon: '📬',
        name: 'PTT Kargo',
        description: 'Türk Posta\'nın ülke çapında güvenilir kargo hizmeti.',
        url: 'https://gonderitakip.ptt.gov.tr/'
    },
    {
        icon: '⚡',
        name: 'Sürat Kargo',
        description: 'Türkiye genelinde hızlı gönderim ile ekspres kargo teslimat hizmeti.',
        url: 'https://www.suratkargo.com.tr/kargo-takip'
    },
    {
        icon: '📦',
        name: 'UPS Türkiye',
        description: 'Türkiye\'de uluslararası nakliye ve takip hizmetleri.',
        url: 'https://www.ups.com/tr/tr/tracking/tracking.page'
    }
];

// Cargo sites data
const cargoSites = [
    {
        name: 'YURTİÇİ KARGO TAKİP',
        image: 'assets/yurtici.png',
        url: 'https://www.yurticikargo.com/tr/online-servisler/gonderi-sorgula'
    },
    {
        name: 'PTT KARGO TAKİP',
        image: 'assets/ptt_1.png',
        url: 'https://gonderitakip.ptt.gov.tr/'
    },
    {
        name: 'MNG KARGO TAKİP',
        image: 'assets/mgn.png',
        url: 'https://www.dhlecommerce.com.tr/gonderitakip'
    },
    {
        name: 'ARAS KARGO TAKİP',
        image: 'assets/aras.png',
        url: 'https://www.araskargo.com.tr/kargo-takip'
    },
    {
        name: 'SÜRAT KARGO TAKİP',
        image: 'assets/surat.png',
        url: 'https://www.suratkargo.com.tr'
    },
    {
        name: 'HOROZ KARGO TAKİP',
        image: 'assets/Horoz_Kargo.png',
        url: 'https://app3.horoz.com.tr/wsKurumsal/_genel/frmGonderiTakip.aspx?lng=tr'
    },
    {
        name: 'CEVA LOGISTICS TAKİP',
        image: 'assets/ceva.PNG',
        url: 'https://www.cevalogistics.com/en'
    },
    {
        name: 'TRENDYOL EXPRESS TAKİP',
        image: 'assets/trendyol-express_.PNG',
        url: 'https://kargotakip.trendyol.com/gonderi-sorgula'
    },
    {
        name: 'AMAZON TAKİP',
        image: 'assets/amazon-logo.png',
        url: 'https://www.amazon.com.tr/gp/css/order-history'
    },
    {
        name: 'KURYENET TAKİP',
        image: 'assets/kuryenet.PNG',
        url: 'https://musterihizmetleri.kuryenet.com.tr/MusteriHizmetleriKuryenet/'
    },
    {
        name: 'DHL TAKİP',
        image: 'assets/dhl.png',
        url: 'https://www.dhl.com/tr-tr/home/tracking.html'
    },
    {
        name: 'FEDEX TAKİP',
        image: 'assets/fedex.png',
        url: 'https://www.fedex.com/tr-tr/home.html'
    },
    {
        name: 'UPS TAKİP',
        image: 'assets/ups.png',
        url: 'https://www.ups.com/tr/tr/home'
    },
    {
        name: 'TNT TAKİP',
        image: 'assets/tnt.png',
        url: 'https://www.tnt.com/express/tr_tr/site/shipping-tools/tracking.html'
    },
    {
        name: 'ARAMEX TAKİP',
        image: 'assets/aramex.PNG',
        url: 'https://www.aramex.com/tr/tr/track/shipments'
    },
    {
        name: 'HEPSIJET TAKİP',
        image: 'assets/hepsijet.png',
        url: 'https://www.hepsijet.com/kargo-takip'
    },
    {
        name: 'AGT KARGO TAKİP',
        image: 'assets/agt_logo.PNG',
        url: 'https://takipagt.aktif.com/'
    },
    {
        name: 'KARGOKAR TAKİP',
        image: 'assets/kargokar.png',
        url: 'http://kargokar.com/index.html'
    },
    {
        name: 'FILLO TAKİP',
        image: 'assets/fillo_logo.png',
        url: 'https://fillo.com.tr/'
    },
    {
        name: 'AKTİF İLETİ TAKİP',
        image: 'assets/aktif_ileti_1.png',
        url: 'https://takipagt.aktif.com/'
    },
    {
        name: 'KOLAY GELSİN TAKİP',
        image: 'assets/kolaygelsin_logo.jpg',
        url: 'https://www.kolaygelsin.com/tracking'
    },
    
    {
        name: 'ALIEXPRESS TAKİP',
        image: 'assets/aliexpress-kargo-takip_.png',
        url: 'https://www.aliexpress.com/p/order/index.html'
    },
    {
        name: 'BANGGOOD TAKİP',
        image: 'assets/banggood_kargo_takip.png',
        url: 'https://www.banggood.com/user/orders/list.html'
    }
];

// Function to generate cargo grid
function generateCargoGrid() {
    const container = document.getElementById('cargo-grid-container');
    if (!container) return;

    container.innerHTML = '';

    cargoSites.forEach(cargo => {
        const cargoItem = document.createElement('a');
        cargoItem.href = cargo.url;
        cargoItem.target = '_blank';
        cargoItem.className = 'cargo-item';

        cargoItem.innerHTML = `
            <div class="cargo-logo-wrapper">
                <img src="${cargo.image}" alt="${cargo.name}" class="cargo-logo">
            </div>
            <h3 class="cargo-name">${cargo.name}</h3>
        `;

        container.appendChild(cargoItem);
    });
}

// Function to generate tracking cards
function generateTrackingCards() {
    const container = document.getElementById('tracking-cards-container');
    if (!container) return;

    container.innerHTML = '';

    trackingSites.forEach((site, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        // Add ad unit after the 10th card (index 9)
        if (index === 10) {
            const adCard = document.createElement('div');
            adCard.className = 'card';
            adCard.style.cssText = 'display: flex; align-items: center; justify-content: center; min-height: 250px; background: linear-gradient(135deg, #FFF4C2 0%, #FFE999 100%);';
            adCard.innerHTML = `
                <ins class="adsbygoogle"
                     style="display:block; min-width: 250px; max-width: 100%;"
                     data-ad-format="fluid"
                     data-ad-layout-key="-fb+5w+4e-db+86"
                     data-ad-client="ca-pub-8019592601622390"
                     data-ad-slot="YYYYYYYYYY"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            `;
            container.appendChild(adCard);
        }

        card.innerHTML = `
            <div class="card-icon">${site.icon}</div>
            <h3>${site.name}</h3>
            <p>${site.description}</p>
            <a href="${site.url}" target="_blank" class="card-link">Takip Et →</a>
        `;

        container.appendChild(card);
    });
}

// Main script for index.html
document.addEventListener('DOMContentLoaded', function() {
    // Generate cargo grid and tracking cards dynamically
    generateCargoGrid();
    generateTrackingCards();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initially hide cards for animation
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
