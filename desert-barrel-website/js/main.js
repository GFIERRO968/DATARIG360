// Desert Barrel — pilot site interactions (no backend, no real payment processing)

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Checkout modal ---------- */
  const modal = document.getElementById('checkoutModal');
  const modalForm = document.getElementById('modalForm');
  const modalProcessing = document.getElementById('modalProcessing');
  const modalSuccess = document.getElementById('modalSuccess');
  const sumProduct = document.getElementById('sumProduct');
  const sumTotal = document.getElementById('sumTotal');
  const qtyValue = document.getElementById('qtyValue');
  const checkoutForm = document.getElementById('checkoutForm');
  const cardFields = document.getElementById('cardFields');
  const orderIdEl = document.getElementById('orderId');

  let currentProduct = { name: '', price: 0 };
  let qty = 1;

  function formatAED(amount) {
    return 'Dhs. ' + amount.toLocaleString('en-US', { minimumFractionDigits: 2 }) + ' AED';
  }

  function updateSummary() {
    sumProduct.textContent = currentProduct.name;
    sumTotal.textContent = formatAED(currentProduct.price * qty);
    qtyValue.textContent = qty;
  }

  function openModal(product) {
    currentProduct = product;
    qty = 1;
    updateSummary();
    modalForm.hidden = false;
    modalProcessing.hidden = true;
    modalSuccess.hidden = true;
    checkoutForm.reset();
    cardFields.classList.remove('hidden');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      openModal({
        name: card.dataset.name,
        price: parseFloat(card.dataset.price)
      });
    });
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  document.getElementById('qtyPlus').addEventListener('click', () => {
    if (qty < 10) { qty++; updateSummary(); }
  });
  document.getElementById('qtyMinus').addEventListener('click', () => {
    if (qty > 1) { qty--; updateSummary(); }
  });

  /* ---------- Payment method toggle ---------- */
  const paymethodRadios = checkoutForm.querySelectorAll('input[name="paymethod"]');
  paymethodRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      cardFields.classList.toggle('hidden', radio.value !== 'card');
      paymethodRadios.forEach(r => r.closest('.radio-card').classList.toggle('selected', r.checked));
    });
  });
  paymethodRadios.forEach(r => r.closest('.radio-card').classList.toggle('selected', r.checked));

  /* ---------- Card field formatting ---------- */
  const cardNumberInput = checkoutForm.querySelector('input[name="cardnumber"]');
  cardNumberInput.addEventListener('input', () => {
    let digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
    cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
  });

  const cardExpiryInput = checkoutForm.querySelector('input[name="cardexpiry"]');
  cardExpiryInput.addEventListener('input', () => {
    let digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length > 2) digits = digits.slice(0, 2) + '/' + digits.slice(2);
    cardExpiryInput.value = digits;
  });

  const cardCvvInput = checkoutForm.querySelector('input[name="cardcvv"]');
  cardCvvInput.addEventListener('input', () => {
    cardCvvInput.value = cardCvvInput.value.replace(/\D/g, '').slice(0, 4);
  });

  /* ---------- Fake checkout submission (demo only, no network calls) ---------- */
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedMethod = checkoutForm.querySelector('input[name="paymethod"]:checked').value;
    if (selectedMethod === 'card') {
      const digits = cardNumberInput.value.replace(/\D/g, '');
      if (digits.length < 12 || !cardExpiryInput.value.includes('/') || cardCvvInput.value.length < 3) {
        alert('Por favor completa correctamente los datos de la tarjeta (demo).');
        return;
      }
    }

    modalForm.hidden = true;
    modalProcessing.hidden = false;

    setTimeout(() => {
      modalProcessing.hidden = true;
      modalSuccess.hidden = false;
      const randomId = Math.floor(100000 + Math.random() * 900000);
      orderIdEl.textContent = 'DB-' + randomId;
    }, 1400);
  });

  document.getElementById('modalDone').addEventListener('click', closeModal);
});
