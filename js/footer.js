/* Shared footer injected via JS so pages work directly from file:// (no server needed) */
(function () {
  function computeBase() {
    // pages at root (index.html) -> ''
    // pages/*.html (contact.html) -> ''  ... but those live in /pages so need '../'
    var path = window.location.pathname;
    var depth = (path.match(/\/pages\//) ? path.split('/pages/')[1].split('/').length - 1 : -1);
    if (depth < 0) return ''; // at root
    return '../'.repeat(depth + 1);
  }
  var base = computeBase();

  var footerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <div class="footer-logo">Bax Baxter Home Decor<span>.</span></div>
        <p>ร้านของแต่งบ้านออนไลน์ โทนพาสเทลอบอุ่น คัดสรรวัสดุคุณภาพสูงเพื่อบ้านที่มีความหมายต่อคุณ</p>
        <div class="footer-social">
          <a href="#" title="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0022 12z"/></svg></a>
          <a href="#" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" title="LINE"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.94 2 10.8c0 4.32 3.55 7.94 8.36 8.66.33.07.77.22.88.5.1.26.07.66.03.92l-.14.87c-.04.26-.2 1 .87.55s5.77-3.4 7.87-5.83C21.36 14.14 22 12.55 22 10.8 22 5.94 17.52 2 12 2z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>ช้อปปิ้ง</h4>
        <ul>
          <li><a href="${base}pages/shop/category.html">หมวดหมู่สินค้า</a></li>
          <li><a href="${base}pages/shop/product-list.html">สินค้าทั้งหมด</a></li>
          <li><a href="${base}pages/shop/product-list.html?filter=new">สินค้ามาใหม่</a></li>
          <li><a href="${base}pages/shop/product-list.html?filter=sale">สินค้าลดราคา</a></li>
          <li><a href="${base}pages/shop/cart.html">ตะกร้าสินค้า</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>บัญชีผู้ใช้</h4>
        <ul>
          <li><a href="${base}pages/account/login.html">เข้าสู่ระบบ</a></li>
          <li><a href="${base}pages/account/register.html">สมัครสมาชิก</a></li>
          <li><a href="${base}pages/account/profile.html">โปรไฟล์ของฉัน</a></li>
          <li><a href="${base}pages/account/orders.html">ประวัติคำสั่งซื้อ</a></li>
          <li><a href="${base}pages/account/wishlist.html">รายการโปรด</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>บริการลูกค้า</h4>
        <ul>
          <li><a href="${base}pages/contact.html">ติดต่อเรา</a></li>
          <li><a href="${base}pages/faq.html">คำถามที่พบบ่อย</a></li>
          <li><a href="${base}pages/shipping-policy.html">นโยบายการจัดส่ง</a></li>
          <li><a href="${base}pages/return-policy.html">นโยบายการคืนสินค้า</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>ติดต่อเรา</h4>
        <ul class="footer-contact">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg><span>123 ถนนสุขุมวิท กรุงเทพฯ 10110</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><span>02-123-4567</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><span>hello@baxbaxterhomedecor.co.th</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span>ทุกวัน 9:00 - 20:00 น.</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 Bax Baxter Home Decor. สงวนลิขสิทธิ์ทุกประการ · Concept Demo</div>
      <div class="footer-payments">
        <span>VISA</span><span>Mastercard</span><span>PromptPay</span><span>โอนผ่านธนาคาร</span>
      </div>
    </div>
  </div>`;

  document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('site-footer-placeholder');
    if (el) el.innerHTML = footerHTML;
  });
})();
