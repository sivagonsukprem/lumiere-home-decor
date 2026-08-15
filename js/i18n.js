/* Thai/English UI translation layer.
   - Product names/descriptions in data.js stay Thai-only by design.
   - Every other UI string (nav, labels, buttons, headings) is translated
     via data-i18n="key" attributes applied automatically on page load.
   - Language choice persists in localStorage, same pattern as currency.js. */

const LANG_KEY = 'lh_lang';

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  return (saved === 'en' || saved === 'th') ? saved : 'th';
}

function setLang(code) {
  if (code !== 'th' && code !== 'en') return;
  localStorage.setItem(LANG_KEY, code);
}

function t(key) {
  const dict = I18N[key];
  if (!dict) return key;
  return dict[getLang()] || dict.th || key;
}

const I18N = {
  // Utility bar
  free_shipping_bar: { th: 'จัดส่งฟรีทั่วประเทศ เมื่อสั่งซื้อครบ ฿1,500', en: 'Free shipping nationwide on orders over ฿1,500' },
  track_order: { th: 'ติดตามคำสั่งซื้อ', en: 'Track Order' },
  help: { th: 'ช่วยเหลือ', en: 'Help' },

  // Main nav
  nav_home: { th: 'หน้าแรก', en: 'Home' },
  nav_categories: { th: 'หมวดหมู่สินค้า', en: 'Categories' },
  nav_all_products: { th: 'สินค้าทั้งหมด', en: 'All Products' },
  nav_new: { th: 'มาใหม่', en: 'New Arrivals' },
  nav_sale: { th: 'สินค้าลดราคา', en: 'Sale' },
  nav_contact: { th: 'ติดต่อเรา', en: 'Contact Us' },
  nav_my_account: { th: 'บัญชีของฉัน', en: 'My Account' },
  nav_wishlist: { th: 'รายการโปรด', en: 'Wishlist' },
  nav_cart: { th: 'ตะกร้าสินค้า', en: 'Cart' },

  // Hero
  hero_eyebrow: { th: 'New Collection 2026', en: 'New Collection 2026' },
  hero_cta_explore: { th: 'Explore Collection', en: 'Explore Collection' },
  hero_cta_categories: { th: 'ดูหมวดหมู่สินค้า', en: 'View Categories' },

  // USP strip
  usp_shipping_title: { th: 'จัดส่งฟรี', en: 'Free Shipping' },
  usp_shipping_text: { th: 'สั่งซื้อครบ ฿1,500 ทั่วประเทศ', en: 'On orders over ฿1,500 nationwide' },
  usp_quality_title: { th: 'รับประกันคุณภาพ', en: 'Quality Guarantee' },
  usp_quality_text: { th: 'สินค้าแท้ รับประกันสูงสุด 2 ปี', en: 'Genuine products, up to 2-year warranty' },
  usp_payment_title: { th: 'ชำระเงินปลอดภัย', en: 'Secure Payment' },
  usp_payment_text: { th: 'รองรับบัตร โอน และ QR พร้อมเพย์', en: 'Cards, bank transfer, and PromptPay QR' },
  usp_line_title: { th: 'ปรึกษาผ่าน LINE', en: 'Chat With Us' },
  usp_line_text: { th: 'ทีมงานพร้อมช่วยเหลือทุกวัน', en: 'Our team is here to help every day' },

  // Section heads
  section_shop_category_eyebrow: { th: 'Shop by Category', en: 'Shop by Category' },
  section_shop_category_title: { th: 'เลือกช้อปตามหมวดหมู่', en: 'Shop by Category' },
  section_shop_category_sub: { th: 'ครบทุกความต้องการในการแต่งบ้าน จากห้องนั่งเล่นถึงสวนหลังบ้าน', en: 'Everything for your home, from living room to garden' },
  section_curated_eyebrow: { th: 'Curated For You', en: 'Curated For You' },
  section_curated_title: { th: 'สินค้าแนะนำ', en: 'Featured Products' },
  section_curated_sub: { th: 'คัดสรรพิเศษจากทีมดีไซน์ของเรา', en: 'Handpicked by our design team' },
  section_story_eyebrow: { th: 'Our Story', en: 'Our Story' },
  section_new_eyebrow: { th: 'New Arrivals', en: 'New Arrivals' },
  section_new_title: { th: 'สินค้ามาใหม่', en: 'New Arrivals' },
  section_new_sub: { th: 'อัปเดตเทรนด์การแต่งบ้านล่าสุดก่อนใคร', en: 'Be first to see the latest home trends' },
  section_testimonials_eyebrow: { th: 'Testimonials', en: 'Testimonials' },
  section_testimonials_title: { th: 'เสียงจากลูกค้าของเรา', en: 'What Our Customers Say' },
  newsletter_eyebrow: { th: 'Stay Updated', en: 'Stay Updated' },
  newsletter_title: { th: 'รับข่าวสารและโปรโมชันพิเศษ', en: 'Get News & Exclusive Offers' },
  newsletter_sub: { th: 'สมัครรับข่าวสารเพื่อไม่พลาดคอลเลกชันใหม่และส่วนลดพิเศษก่อนใคร', en: 'Subscribe for early access to new collections and special discounts' },
  newsletter_placeholder: { th: 'อีเมลของคุณ', en: 'Your email' },
  newsletter_submit: { th: 'สมัครสมาชิก', en: 'Subscribe' },
  newsletter_success: { th: 'สมัครรับข่าวสารสำเร็จ ขอบคุณค่ะ', en: 'Subscribed successfully, thank you!' },

  // Common product-card / buttons
  add_to_cart: { th: 'เพิ่มลงตะกร้า', en: 'Add to Cart' },
  buy_now: { th: 'ซื้อเลย', en: 'Buy Now' },
  out_of_stock: { th: 'สินค้าหมด', en: 'Sold Out' },
  view_collection: { th: 'ดูคอลเลกชัน', en: 'View Collection' },
  view_details: { th: 'ดูรายละเอียด', en: 'View Details' },

  // Breadcrumb / generic page bits
  breadcrumb_home: { th: 'หน้าแรก', en: 'Home' },

  // Footer
  footer_about: { th: 'ร้านของแต่งบ้านออนไลน์ โทนพาสเทลอบอุ่น คัดสรรวัสดุคุณภาพสูงเพื่อบ้านที่มีความหมายต่อคุณ', en: 'An online home decor store with a warm pastel touch, curating quality pieces for a home that matters to you.' },
  footer_shopping: { th: 'ช้อปปิ้ง', en: 'Shopping' },
  footer_account_col: { th: 'บัญชีผู้ใช้', en: 'Account' },
  footer_service: { th: 'บริการลูกค้า', en: 'Customer Service' },
  footer_contact: { th: 'ติดต่อเรา', en: 'Contact' },
  footer_login: { th: 'เข้าสู่ระบบ', en: 'Sign In' },
  footer_register: { th: 'สมัครสมาชิก', en: 'Register' },
  footer_profile: { th: 'โปรไฟล์ของฉัน', en: 'My Profile' },
  footer_orders: { th: 'ประวัติคำสั่งซื้อ', en: 'Order History' },
  footer_wishlist: { th: 'รายการโปรด', en: 'Wishlist' },
  footer_faq: { th: 'คำถามที่พบบ่อย', en: 'FAQ' },
  footer_shipping_policy: { th: 'นโยบายการจัดส่ง', en: 'Shipping Policy' },
  footer_return_policy: { th: 'นโยบายการคืนสินค้า', en: 'Return Policy' },
  footer_hours: { th: 'ทุกวัน 9:00 - 20:00 น.', en: 'Every day 9:00 AM - 8:00 PM' },
  footer_rights: { th: 'สงวนลิขสิทธิ์ทุกประการ · Concept Demo', en: 'All rights reserved · Concept Demo' },
};
