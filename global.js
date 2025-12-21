/*  Header, Footer ve Popup Yönetimi */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       1. HEADER (ÜST MENÜ) YERLEŞTİRME
       ========================================= */
    const headerKodu = `
     <header>
        <div class="container header-ic">

            <div class="logo">
                <a href="index.html">
                    <img src="img/logo.png" alt="Panaçılım Yapı Otomasyon Logo">
                </a>
            </div>

            <input type="checkbox" id="menu-btn" class="menu-btn">
            <label for="menu-btn" class="menu-icon"><span class="nav-icon"></span></label>

            <nav class="nav-links">
                <ul>
                    <li><a href="index.html">Anasayfa</a></li>
                    <li><a href="urunler.html">Ürünlerimiz</a></li>

                    <li class="acilir-kutu">
                        <a href="markalar.html">Markalar ▾</a>
                        <ul class="alt-menu">
                            <li><a href="manusa.html">Manusa</a></li>
                            <li><a href="nice.html">Nice</a></li>
                            <li><a href="ninz.html">Ninz</a></li>

                        </ul>
                    </li>
                    <li><a href="teknikservis.html">Teknik Servis</a></li>
                    <li><a href="kurumsal.html">Kurumsal</a></li>
                    <li><a href="referanslar.html">Referanslar</a></li>
                    <li>
                        <a href="https://wa.me/905532092445" target="_blank" class="buton-iletisim">
                            <i class="fa-brands fa-whatsapp"></i> Teklif Al
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    `;

    // Sayfada "header-alani" id'li bir kutu varsa içine menüyü bas
    const headerDiv = document.getElementById("header-alani");
    if (headerDiv) {
        headerDiv.innerHTML = headerKodu;

        // --- AKTİF MENÜYÜ İŞARETLEME (BONUS) ---
        // Hangi sayfadaysak o linkin altını çizili/koyu yapar
        const currentPath = window.location.pathname.split("/").pop(); // örn: index.html
        const menuLinks = document.querySelectorAll('.nav-links a');

        menuLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath && linkPath !== '#') {
                link.style.color = '#eef4ff'; // Hafif parlak yap
                link.style.borderBottom = '2px solid white';
            }
        });
    }

    /* =========================================
       2. FOOTER YERLEŞTİRME
       ========================================= */
    const footerKodu = `
   <footer id="iletisim">
    <div class="container footer-ic">

        <div class="footer-kolon">
            <h3>Markalarımız</h3>
            <ul>
                <li><a href="manusa.html">Manusa</a></li>
                <li><a href="nice.html">Nice</a></li>
                <li><a href="ninz.html">Ninz</a></li>
            </ul>
        </div>

        <div class="footer-kolon">
            <h3>Ürün Grupları</h3>
            <ul>
                <li><a href="manusa.html">Fotoselli Kapılar</a></li>
                <li><a href="nice-robus.html">Bahçe Kapısı Motorları</a></li>
                <li><a href="nicebariyer.html">Kollu Bariyerler</a></li>
                <li><a href="yanginkapilari.html">Yangın Dayanımlı Kapılar</a></li>
                <li><a href="kepenk.html">Otomatik Kepenkler</a></li>
            </ul>
        </div>

        <div class="footer-kolon">
            <h3>İletişim</h3>
            <p><i class="fa-solid fa-location-dot"></i> Ferhatpaşa Mah. 9. Sok. No: 17/A <br>Ataşehir / İSTANBUL</p>

            <p>
                <a href="tel:02164711222">
                    <i class="fa-solid fa-phone"></i> 0216 471 12 22
                </a>
            </p>

            <p>
                <a href="tel:905532092445">
                    <i class="fa-solid fa-mobile-screen"></i> 0553 209 24 45
                </a>
            </p>

            <p>
                <a href="mailto:bilgi@panacilim.com.tr">
                    <i class="fa-solid fa-envelope"></i> bilgi@panacilim.com.tr
                </a>
            </p>
        </div>
    </div>
    <div class="alt-footer">
        <p>&copy; 2025 Panaçılım Yapı Otomasyon. Tüm hakları saklıdır.</p>
    </div>
</footer>
    `;

    const footerDiv = document.getElementById("footer-alani");
    if (footerDiv) {
        footerDiv.innerHTML = footerKodu;
    }

    /* =========================================
       3. KİBAR POPUP (SAĞ ALT BİLDİRİM)
       ========================================= */
    const popupHTML = `
    <div id="kis-bildirim" class="kis-bildirim-kutu" style="display:none;">
        <span class="kis-kapat" id="kis-kapat-btn">&times;</span>
        <div class="kis-ikon">
            <i class="fa-solid fa-snowflake"></i>
        </div>
        <div class="kis-icerik">
            <h4>Kış Bakımı Zamanı!</h4>
            <p>Kapınız soğukta donmasın, performansını korusun.</p>
            <a href="https://wa.me/905532092445?text=Kış%20bakımı%20randevusu%20almak%20istiyorum." target="_blank" class="kis-buton">
                <i class="fa-brands fa-whatsapp"></i> Randevu Al
            </a>
        </div>
    </div>
    `;

    // Popup'ı sayfaya ekle
    document.body.insertAdjacentHTML("beforeend", popupHTML);

    const bildirimKutu = document.getElementById('kis-bildirim');
    const bildirimKapat = document.getElementById('kis-kapat-btn');

    // 2 saniye sonra sağ alttan çıksın
    setTimeout(function () {
        if (bildirimKutu) {
            bildirimKutu.style.display = 'flex';
        }
    }, 2000);

    // Kapatma işlemi
    if (bildirimKapat) {
        bildirimKapat.onclick = function () {
            bildirimKutu.style.display = 'none';
        }
    }

});