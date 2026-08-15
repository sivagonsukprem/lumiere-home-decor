/* Applies data-i18n translations on load and injects a language dropdown
   into the utility bar (desktop) and mobile drawer, next to the currency
   selector. Switching language reloads the page. */
(function () {
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });
  }

  function buildSelect(id) {
    const current = getLang();
    return `<select id="${id}" class="lang-select">
      <option value="th" ${current === 'th' ? 'selected' : ''}>ไทย</option>
      <option value="en" ${current === 'en' ? 'selected' : ''}>English</option>
    </select>`;
  }

  function wireSelect(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', () => {
      setLang(el.value);
      location.reload();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations();

    const utilityLinks = document.querySelector('.utility-bar .utility-links');
    if (utilityLinks) {
      utilityLinks.insertAdjacentHTML('afterbegin', buildSelect('lang-select-desktop'));
      wireSelect('lang-select-desktop');
    }

    const drawerCurrency = document.querySelector('.mobile-drawer .drawer-currency');
    if (drawerCurrency) {
      const wrap = document.createElement('div');
      wrap.className = 'drawer-lang';
      wrap.innerHTML = buildSelect('lang-select-mobile');
      drawerCurrency.insertAdjacentElement('afterend', wrap);
      wireSelect('lang-select-mobile');
    }
  });
})();
