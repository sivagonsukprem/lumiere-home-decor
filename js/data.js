/* ==========================================================================
   Bax Baxter Home Decor — Mock Data (Demo/Prototype only, no backend)
   ========================================================================== */

/* Product photography isn't available for most items in this demo, so most
   images are a generated SVG placeholder: a soft pastel background (per
   category) plus an icon/emoji that hints at the product type. A handful of
   real product photos supplied by the client (keyed by exact product name
   below) override the placeholder where available. */
const PLACEHOLDER_PALETTE = ['#FBE8E6', '#FCEEEC', '#F6DCE0', '#F3E4E8', '#FDEDE9', '#F9E3DD'];

function siteBase() {
  var path = window.location.pathname;
  var depth = (path.match(/\/pages\//) ? path.split('/pages/')[1].split('/').length - 1 : -1);
  if (depth < 0) return '';
  return '../'.repeat(depth + 1);
}

const REAL_PHOTOS = {
  'แก้วลายจุด Murano': 'assets/img/products/glassware-murano-glass.jpg',
  'ถ้วยแก้วปากบาน': 'assets/img/products/glassware-flared-cup.jpg',
  'แจกันแก้วลายจุด': 'assets/img/products/vase-speckled-glass.jpg',
  'โคมไฟตั้งโต๊ะแก้วสี': 'assets/img/products/lighting-colored-glass-table-lamp.jpg',
  'หมอนอิงผ้าลินิน': 'assets/img/products/decor-linen-throw-pillow.jpg',
  'กรอบรูปไม้ธรรมชาติ': 'assets/img/products/decor-wooden-photo-frame.jpg',
  'ผ้าปูที่นอนลินินพาสเทล': 'assets/img/products/bedding-fitted-sheet-floral.jpg',
  'ผ้าคลุมเตียงลายปัก': 'assets/img/products/bedding-embroidered-throw.jpg',
  'ชุดนอนไหมเทียมคู่': 'assets/img/products/sleepwear-silk-robe.jpg',
  'ชุดนอนผ้าลินินบาง': 'assets/img/products/sleepwear-thin-linen-set.jpg',
  'ชุดนอนแขนกุดลายลูกไม้': 'assets/img/products/sleepwear-lace-corset-set.jpg',
  'โคมไฟตั้งพื้นหินอ่อน': 'assets/img/products/lighting-floral-ceramic-lamp.jpg',
};

function productImage(name, emoji, seed, w, h) {
  if (REAL_PHOTOS[name]) return siteBase() + REAL_PHOTOS[name];
  return placeholderSVG(emoji, seed, w, h);
}

function placeholderSVG(emoji, seed, w = 800, h = 800) {
  const bg = PLACEHOLDER_PALETTE[Math.abs(hashStr(seed)) % PLACEHOLDER_PALETTE.length];
  const fontSize = Math.round(Math.min(w, h) * 0.28);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${bg}"/>
    <text x="50%" y="42%" font-size="${fontSize}" text-anchor="middle" dominant-baseline="central">${emoji}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; }
  return h;
}

const IMG = (seed, w = 800, h = 800) => placeholderSVG('🏺', seed, w, h);

const CATEGORY_PHOTOS = {
  glassware: 'assets/img/categories/glassware.jpg',
  decor: 'assets/img/categories/decor.jpg',
  lighting: 'assets/img/categories/lighting.jpg',
  vases: 'assets/img/categories/vases.jpg',
  bedding: 'assets/img/categories/bedding.jpg',
  sleepwear: 'assets/img/categories/sleepwear.jpg',
};

function categoryImage(id, emoji) {
  if (CATEGORY_PHOTOS[id]) return siteBase() + CATEGORY_PHOTOS[id];
  return placeholderSVG(emoji, id + '-cat', 600, 800);
}

const CATEGORIES = [
  { id: 'glassware', th: 'แก้วและถ้วย', en: 'Glassware', img: categoryImage('glassware', '🥃'), count: 32 },
  { id: 'decor', th: 'ของแต่งบ้าน', en: 'Home Decor', img: categoryImage('decor', '🏺'), count: 40 },
  { id: 'lighting', th: 'โคมไฟ', en: 'Lighting', img: categoryImage('lighting', '💡'), count: 24 },
  { id: 'vases', th: 'แจกัน', en: 'Vases', img: categoryImage('vases', '🌷'), count: 20 },
  { id: 'bedding', th: 'ผ้าปูที่นอน', en: 'Bedding', img: categoryImage('bedding', '🛏️'), count: 22 },
  { id: 'sleepwear', th: 'ชุดนอน', en: 'Sleepwear', img: categoryImage('sleepwear', '🌙'), count: 18 },
];

const PRODUCT_DEFS = {
  glassware: { emoji: '🥃', names: ['แก้วลายจุด Murano', 'แก้วไวน์ทรงหยดน้ำ', 'ถ้วยแก้วปากบาน', 'หลอดแก้วสีพาสเทล', 'แก้วน้ำลายหินอ่อน', 'ชุดแก้วช็อต 6 ใบ', 'แก้วมัคเซรามิกเคลือบ', 'ถ้วยชาแก้วใส'] },
  decor: { emoji: '🏺', names: ['กระจกเงาทรงโค้ง', 'เชิงเทียนทองเหลือง', 'ถาดเสิร์ฟไม้โอ๊ค', 'กรอบรูปไม้ธรรมชาติ', 'ชุดจานเซรามิกทำมือ', 'พรมทอมือลายเรขาคณิต', 'หมอนอิงผ้าลินิน', 'กระถางต้นไม้เซรามิก'] },
  lighting: { emoji: '💡', names: ['โคมไฟตั้งพื้นทรงกลม', 'โคมไฟแขวนหวาย', 'โคมไฟตั้งโต๊ะแก้วสี', 'โคมไฟราวผนัง', 'โคมไฟตั้งพื้นหินอ่อน', 'ไฟตกแต่งสายพาสเทล', 'โคมไฟระย้าจิ๋ว', 'โคมไฟตั้งโต๊ะเซรามิก'] },
  vases: { emoji: '🌷', names: ['แจกันเซรามิกมินิมอล', 'แจกันแก้วลายจุด', 'แจกันดินเผาทรงเตี้ย', 'แจกันคอสูงลายหินอ่อน', 'แจกันเซรามิกพาสเทล', 'แจกันแก้วทรงหยดน้ำ', 'แจกันเซรามิกลายมือ', 'แจกันแก้วปากบาน'] },
  bedding: { emoji: '🛏️', names: ['ผ้าปูที่นอนลินินพาสเทล', 'ปลอกหมอนผ้าฝ้ายออร์แกนิก', 'ผ้าห่มนุ่มลายพิมพ์', 'ผ้าคลุมเตียงลายปัก', 'ชุดผ้าปูที่นอนคอตตอน', 'ผ้าห่มขนแกะเทียม', 'ปลอกผ้านวมลินิน', 'ผ้าปูที่นอนไหมเทียม'] },
  sleepwear: { emoji: '🌙', names: ['ชุดนอนผ้าซาตินพาสเทล', 'เสื้อคลุมนอนผ้าฝ้าย', 'ชุดนอนแขนกุดลายลูกไม้', 'ชุดนอนไหมเทียมคู่', 'เสื้อคลุมอาบน้ำนุ่ม', 'ชุดนอนผ้าลินินบาง', 'ชุดนอนแขนยาวฤดูหนาว', 'ชุดนอนผ้าไหมพรีเมียม'] },
};

function generateProducts() {
  const products = [];
  let id = 1;
  CATEGORIES.forEach((cat) => {
    const def = PRODUCT_DEFS[cat.id];
    const perCat = 8;
    for (let i = 0; i < perCat; i++) {
      const name = def.names[i % def.names.length];
      const price = Math.floor(Math.random() * 4000) + 290;
      const hasSale = Math.random() > 0.6;
      const oldPrice = hasSale ? Math.floor(price * (1.15 + Math.random() * 0.3)) : null;
      const stock = Math.random() > 0.15 ? Math.floor(Math.random() * 40) : 0;
      products.push({
        id: id,
        sku: `BB-${String(id).padStart(4, '0')}`,
        name: name,
        category: cat.id,
        categoryTh: cat.th,
        price: price,
        oldPrice: oldPrice,
        rating: (Math.random() * 1.3 + 3.7).toFixed(1),
        reviews: Math.floor(Math.random() * 180) + 3,
        stock: stock,
        isNew: Math.random() > 0.75,
        img: productImage(name, def.emoji, 'product-' + id, 800, 800),
        gallery: REAL_PHOTOS[name]
          ? [productImage(name, def.emoji, 'product-' + id, 800, 800)]
          : [
              placeholderSVG(def.emoji, 'product-' + id, 800, 800),
              placeholderSVG(def.emoji, 'product-' + id + '-b', 800, 800),
              placeholderSVG(def.emoji, 'product-' + id + '-c', 800, 800),
              placeholderSVG(def.emoji, 'product-' + id + '-d', 800, 800),
              placeholderSVG(def.emoji, 'product-' + id + '-e', 800, 800),
            ],
        colors: ['#D98089', '#E8A0A6', '#F0D9D6', '#6B4A52'],
        sizes: ['S', 'M', 'L'],
        desc: 'ชิ้นงานคัดสรรวัสดุคุณภาพสูง ออกแบบเพื่อความเรียบง่ายแต่หรูหรา เหมาะกับการตกแต่งบ้านโทนพาสเทลอบอุ่น ทนทาน ใช้งานได้ยาวนาน ผลิตจากวัสดุคุณภาพดีที่เป็นมิตรต่อสิ่งแวดล้อม',
        material: 'แก้ว / เซรามิก / ผ้าฝ้ายธรรมชาติ',
        dimension: 'ขนาดมาตรฐาน (ดูรายละเอียดต่อชิ้น)',
        weight: '0.3 - 1.5 กก.',
        origin: 'นำเข้า / ผลิตในประเทศไทย',
        warranty: 'รับประกันความเสียหายจากการผลิต 30 วัน',
      });
      id++;
    }
  });
  return products;
}

const PRODUCTS = generateProducts();

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, count);
}

function formatTHB(n) {
  return '฿' + Number(n).toLocaleString('th-TH');
}

function renderStars(rating) {
  const full = Math.round(rating);
  return '★★★★★☆☆☆☆☆'.slice(5 - full, 10 - full);
}
