# Google AdSense Kurulum Rehberi - KargoTakipet.net

Bu rehber, KargoTakipet.net için Google AdSense reklamlarını aktif etmeniz için gerekli adımları içerir.

## 📋 Gerekli Değişiklikler

Sitede 3 farklı dosyada değişiklik yapmanız gerekiyor:

### 1. Google AdSense Publisher ID'nizi Alın

1. [Google AdSense](https://www.google.com/adsense) hesabınıza giriş yapın
2. Hesap ayarlarından Publisher ID'nizi bulun (pub-XXXXXXXXXXXXXXXXX formatında)
3. Bu ID'yi aşağıdaki dosyalarda değiştirin

### 2. Dosya Değişiklikleri

#### A) `index.html` - 4 yerde değişiklik
Publisher ID'nizi şu satırlarda değiştirin:

```html
<!-- Satır 30: Ana AdSense Script -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>

<!-- Satır 61: Üst Banner Reklam -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"

<!-- Satır 152: Kartlar Arası Reklam -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"

<!-- Satır 222: Alt Banner Reklam -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
```

#### B) `blogs.html` - 3 yerde değişiklik

```html
<!-- Satır 31: Ana AdSense Script -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>

<!-- Satır 54: Blog Üst Banner -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"

<!-- Satır 75: Blog Alt Banner -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
```

#### C) `blog.js` - 1 yerde değişiklik

```javascript
// Satır 102: Blog İçi Reklam
data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
```

#### D) `ads.txt` - Publisher ID

```
google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

### 3. Ad Slot ID'lerini Ayarlayın

AdSense hesabınızdan reklam birimleri oluşturun ve her biri için bir Ad Slot ID alın:

**index.html için 3 reklam birimi:**
1. **Top Banner** - Horizontal/Responsive Display
2. **In-Feed Ad** - In-feed format
3. **Bottom Banner** - Responsive Display

**blogs.html için 2 reklam birimi:**
1. **Blog Top Banner** - Horizontal/Responsive Display
2. **Blog Bottom Banner** - Responsive Display

**blog.js için 1 reklam birimi:**
1. **In-Article Ad** - In-article format

Aldığınız Ad Slot ID'lerini (YYYYYYYYYY formatında) ilgili `data-ad-slot` alanlarına yazın.

## 🎯 Reklam Yerleşimleri

### Ana Sayfa (index.html)
- ✅ **Hero Section Sonrası:** Horizontal banner (728x90 veya responsive)
- ✅ **Kargo Kartları Arası:** Kuehne + Nagel ile ZIM arasında in-feed reklam
- ✅ **Footer Öncesi:** Responsive banner

### Blog Sayfası (blogs.html)
- ✅ **Başlık Altı:** Blog listesi öncesi horizontal banner
- ✅ **Liste Sonrası:** Footer öncesi responsive banner
- ✅ **Blog İçeriği:** Yazının ortasında in-article reklam (otomatik)

## 📊 Reklam Tipleri

1. **Horizontal Banner** (`data-ad-format="horizontal"`)
   - Sayfa üstü ve altı için ideal
   - Responsive, tüm ekran boyutlarına uyum sağlar

2. **In-Feed Ad** (`data-ad-format="fluid"`)
   - Kargo kartları arasına doğal şekilde yerleşir
   - Kullanıcı deneyimini bozmaz

3. **In-Article Ad** (`data-ad-layout="in-article"`)
   - Blog yazıları içinde otomatik yerleşir
   - İçeriğin ortasına eklenir (5+ paragraf varsa)

4. **Responsive Display** (`data-ad-format="auto"`)
   - Otomatik boyutlandırma
   - En iyi performansı verir

## 🔧 Hızlı Değiştirme (Find & Replace)

Tüm dosyalarda hızlı değişiklik için:

```bash
# Publisher ID değiştirme
find . -type f \( -name "*.html" -o -name "*.js" -o -name "*.txt" \) -exec sed -i 's/ca-pub-XXXXXXXXXXXXXXXXX/ca-pub-GERÇEK-ID-BURAYA/g' {} +

# Ad Slot ID'leri manuel olarak her reklam için farklı olmalı
```

## ✅ Kontrol Listesi

- [ ] Google AdSense hesabı oluşturuldu
- [ ] Publisher ID alındı
- [ ] 6 reklam birimi oluşturuldu (3 index + 2 blogs + 1 in-article)
- [ ] index.html dosyasında 4 yerde Publisher ID değiştirildi
- [ ] blogs.html dosyasında 3 yerde Publisher ID değiştirildi
- [ ] blog.js dosyasında 1 yerde Publisher ID değiştirildi
- [ ] ads.txt dosyasında Publisher ID değiştirildi
- [ ] Tüm Ad Slot ID'leri ilgili yerlere eklendi
- [ ] ads.txt dosyası website root dizinine yüklendi
- [ ] Site Google AdSense'e eklendi ve onay bekliyor

## 🚀 Deployment Sonrası

1. Site yayına alındıktan sonra Google AdSense'e giriş yapın
2. "Sites" bölümünden kargotakipet.net'i ekleyin
3. Doğrulama kodu otomatik olarak eklenmiş olacak (head'deki script)
4. AdSense onayını bekleyin (genellikle 1-3 gün)
5. Onay sonrası reklamlar otomatik gösterilmeye başlayacak

## 💡 İpuçları

- **İlk 1-2 hafta:** Reklamlar boş görünebilir, bu normaldir
- **Optimizasyon:** AdSense otomatik olarak en iyi performans gösteren reklamları gösterir
- **Mobile:** Tüm reklamlar responsive, mobil cihazlarda otomatik uyum sağlar
- **Performans:** Auto ads'ı devre dışı bıraktık, manuel yerleştirmeler daha iyi kontrol sağlar

## 📈 Gelir Maximizasyonu

1. **Blog içerikleri yazın:** Daha fazla sayfa = daha fazla reklam gösterimi
2. **SEO optimizasyonu:** Organik trafik = daha değerli reklamlar
3. **Kullanıcı deneyimi:** Çok fazla reklam eklemekten kaçının
4. **A/B Testing:** AdSense otomatik eksperimenter kullanın

## 🆘 Sorun Giderme

**Reklamlar görünmüyor:**
- Publisher ID'yi kontrol edin
- AdSense hesabının onaylandığından emin olun
- Tarayıcı konsolunu kontrol edin (F12)
- AdBlocker kapalı mı kontrol edin

**Boş alan var ama reklam yok:**
- AdSense henüz uygun reklam bulamadı (normal)
- Birkaç saat bekleyin
- Sayfa içeriği ve traffic arttıkça iyileşir

**Policy ihlali uyarısı:**
- ads.txt dosyasının doğru yüklendiğinden emin olun
- İçeriğin AdSense politikalarına uygun olduğunu kontrol edin

## 📞 Destek

Sorularınız için:
- [Google AdSense Yardım Merkezi](https://support.google.com/adsense)
- [AdSense Topluluk Forumu](https://support.google.com/adsense/community)

---

**Not:** XXXXXXXXXXXXXXXXX ve YYYYYYYYYY değerlerini mutlaka kendi AdSense hesabınızdan aldığınız gerçek ID'lerle değiştirin!
