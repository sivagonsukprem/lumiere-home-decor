/* ==========================================================================
   Bax Baxter Home Decor — Mock Data (Demo/Prototype only, no backend)
   ========================================================================== */

const IMG = (seed, w = 800, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const CATEGORIES = [
  { id: 'furniture', th: 'เฟอร์นิเจอร์', en: 'Furniture', img: IMG('furniture-cat', 600, 800), count: 48 },
  { id: 'decor', th: 'ของแต่งบ้าน', en: 'Home Decor', img: IMG('decor-cat', 600, 800), count: 76 },
  { id: 'lighting', th: 'โคมไฟ', en: 'Lighting', img: IMG('lighting-cat', 600, 800), count: 32 },
  { id: 'living', th: 'ของใช้ในบ้าน', en: 'Home & Living', img: IMG('living-cat', 600, 800), count: 54 },
  { id: 'garden', th: 'สวนและกลางแจ้ง', en: 'Garden & Outdoor', img: IMG('garden-cat', 600, 800), count: 21 },
  { id: 'other', th: 'สินค้าอื่นๆ', en: 'Other', img: IMG('other-cat', 600, 800), count: 15 },
];

const PRODUCT_NAMES = [
  'โซฟาผ้าลินิน โทนดิน', 'โต๊ะกลางไม้โอ๊ค', 'เก้าอี้ทานอาหารหวาย', 'ตู้เก็บของไม้สัก',
  'โคมไฟตั้งพื้นทรงกลม', 'โคมไฟแขวนหวาย', 'แจกันเซรามิกมินิมอล', 'กระจกเงาทรงโค้ง',
  'พรมทอมือลายเรขาคณิต', 'หมอนอิงผ้าลินิน', 'ผ้าคลุมโซฟากำมะหยี่', 'ชั้นวางหนังสือไม้',
  'เตียงไม้เนื้อแข็ง', 'ที่นอนออร์โธปิดิกส์', 'ม่านผ้าลินินธรรมชาติ', 'เชิงเทียนทองเหลือง',
  'ถาดเสิร์ฟไม้โอ๊ค', 'ชุดจานเซรามิกทำมือ', 'กระถางต้นไม้เซรามิก', 'เก้าอี้โยกไม้',
  'โต๊ะทำงานไม้เรียบหรู', 'ตู้ข้างเตียงมินิมอล', 'ราวแขวนเสื้อผ้าไม้', 'กรอบรูปไม้ธรรมชาติ',
];

function generateProducts() {
  const products = [];
  let id = 1;
  CATEGORIES.forEach((cat) => {
    const perCat = 8;
    for (let i = 0; i < perCat; i++) {
      const nameIdx = (id - 1) % PRODUCT_NAMES.length;
      const price = Math.floor(Math.random() * 18000) + 990;
      const hasSale = Math.random() > 0.6;
      const oldPrice = hasSale ? Math.floor(price * (1.15 + Math.random() * 0.3)) : null;
      const stock = Math.random() > 0.15 ? Math.floor(Math.random() * 40) : 0;
      products.push({
        id: id,
        sku: `LH-${String(id).padStart(4, '0')}`,
        name: PRODUCT_NAMES[nameIdx],
        category: cat.id,
        categoryTh: cat.th,
        price: price,
        oldPrice: oldPrice,
        rating: (Math.random() * 1.3 + 3.7).toFixed(1),
        reviews: Math.floor(Math.random() * 180) + 3,
        stock: stock,
        isNew: Math.random() > 0.75,
        img: IMG('product-' + id, 800, 800),
        gallery: [IMG('product-' + id, 800, 800), IMG('product-' + id + '-b', 800, 800), IMG('product-' + id + '-c', 800, 800), IMG('product-' + id + '-d', 800, 800), IMG('product-' + id + '-e', 800, 800)],
        colors: ['#3F3527', '#A8874F', '#E6DFD3', '#1C1917'],
        sizes: ['S', 'M', 'L'],
        desc: 'ชิ้นงานคัดสรรวัสดุคุณภาพสูง ออกแบบเพื่อความเรียบง่ายแต่หรูหรา เหมาะกับการตกแต่งบ้านสไตล์โมเดิร์นมินิมอล ทนทาน ใช้งานได้ยาวนาน ผลิตจากวัสดุธรรมชาติที่เป็นมิตรต่อสิ่งแวดล้อม',
        material: 'ไม้โอ๊คแท้ / ผ้าลินิน',
        dimension: '120 x 60 x 75 ซม.',
        weight: '18 กก.',
        origin: 'ผลิตในประเทศไทย',
        warranty: 'รับประกัน 2 ปี',
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
