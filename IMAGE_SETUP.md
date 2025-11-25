# Görsel Kurulum Rehberi - KargoTakipet.net

## 🖼️ Ana Sayfa Görseli

Ana sayfaya dünya çapında kargo ağını gösteren bir görsel eklenmiştir.

### Görseli Ekleme

Sağladığınız görseli (dünya haritası + kargo taşımacılığı görseli) şu şekilde ekleyin:

1. **Görseli Kaydedin:**
   - Görseli `global-cargo-network.jpg` olarak kaydedin
   - Veya `global-cargo-network.png` olarak kaydedin (PNG tercih edilirse)

2. **Dosyayı Yerleştirin:**
   - Görseli proje ana dizinine koyun: `/kargo2/global-cargo-network.jpg`
   - Veya `images/` klasörü oluşturup oraya koyabilirsiniz

3. **HTML'de Güncelleme (Gerekirse):**
   - Eğer `images/` klasörü kullanıyorsanız, `index.html` dosyasında şu satırı değiştirin:
   ```html
   <!-- Şu andan: -->
   <img src="global-cargo-network.jpg" ...>

   <!-- Şuna: -->
   <img src="images/global-cargo-network.jpg" ...>
   ```

### Görsel Özellikleri

**Önerilen Boyutlar:**
- Genişlik: 1200-1600px
- Yükseklik: 600-800px
- Format: JPG veya PNG
- Dosya boyutu: Max 500KB (optimize edilmiş)

**Mevcut Ayarlar:**
- ✅ Responsive tasarım (tüm ekran boyutlarına uyumlu)
- ✅ Hover efekti (hafif büyüme animasyonu)
- ✅ Yuvarlatılmış köşeler (border-radius: 20px)
- ✅ Gölge efekti
- ✅ Fade-in animasyonu

### Görsel Konumu

Görsel şu konumda yer alıyor:
```
Hero Section (Başlık + Açıklama + Buton)
         ↓
    [GÖRSEL BURADA]
         ↓
   Google AdSense Reklamı
         ↓
Kargo Takip Hizmetleri Kartları
```

### Görsel Altı Metin

Görselin altında şu metinler görünüyor:
- **Başlık:** 🌍 Dünya Çapında Kesintisiz Takip
- **Alt Başlık:** Kargonuz nerede olursa olsun, anlık takip imkanı

Bu metinleri değiştirmek isterseniz `index.html` dosyasında `.network-overlay` bölümünü düzenleyin.

## 🎨 Stil Özelleştirmeleri

Görseli özelleştirmek isterseniz `styles.css` dosyasında `.global-network-section` sınıfını düzenleyebilirsiniz:

```css
/* Örnek: Görseli daha büyük yapmak */
.network-image {
    max-width: 1200px; /* 1000px'den 1200px'e çıkar */
}

/* Örnek: Gölge efektini artırmak */
.network-image {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
}

/* Örnek: Hover efektini değiştirmek */
.network-image:hover {
    transform: scale(1.05); /* 1.02'den 1.05'e çıkar */
}
```

## 📱 Mobil Uyumluluk

Görsel mobil cihazlarda otomatik olarak responsive olacak şekilde ayarlanmıştır:
- Ekran genişliğine göre otomatik boyutlandırma
- Mobilde daha küçük border-radius (10px)
- Mobilde metin boyutları küçültülmüş

## 🚀 Hızlı Başlangıç

1. Görseli indirin
2. `global-cargo-network.jpg` olarak kaydedin
3. Proje ana dizinine koyun
4. Tarayıcıda `index.html`'i açın
5. Görsel hero section'ın hemen altında görünecek!

## 💡 İpuçları

- **Optimize edin:** Görseli [TinyPNG](https://tinypng.com/) veya [Squoosh](https://squoosh.app/) ile optimize edin
- **Format:** Web için JPG daha hızlı yüklenir, ama şeffaflık gerekiyorsa PNG kullanın
- **Lazy Loading:** Büyük görseller için lazy loading eklenebilir: `loading="lazy"`
- **WebP Format:** Modern tarayıcılar için WebP formatı kullanılabilir (daha küçük dosya boyutu)

## 🔧 Alternatif: CDN Kullanımı

Görseli bir CDN'e yükleyip URL'sini kullanabilirsiniz:

```html
<img src="https://cdn.kargotakipet.net/images/global-cargo-network.jpg"
     alt="Dünya Çapında Kargo Ağı">
```

## ✅ Kontrol Listesi

- [ ] Görseli indirdim
- [ ] `global-cargo-network.jpg` olarak kaydettim
- [ ] Proje ana dizinine koydum
- [ ] Görseli optimize ettim (max 500KB)
- [ ] Tarayıcıda kontrol ettim
- [ ] Mobil görünümde test ettim
- [ ] Tüm tarayıcılarda test ettim

---

**Not:** Görsel olmadan site çalışacaktır, ancak o bölüm boş görünecektir. Görseli ekledikten sonra sayfa otomatik olarak görseli gösterecektir.
