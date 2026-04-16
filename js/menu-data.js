async function getMenuData() {
  const response = await fetch('data/menu.json');

  if (!response.ok) {
    throw new Error('No se pudo cargar data/menu.json');
  }

  return response.json();
}

function formatCup(value) {
  return `${value} CUP`;
}

function normalizePhone(phone) {
  return String(phone || '').replace(/\D/g, '');
}

function buildWhatsAppChatUrl(phone) {
  const digits = normalizePhone(phone);
  if (!digits) {
    return '#';
  }

  const message = encodeURIComponent('Hola Azucararte, quisiera hacer un pedido.');
  return `https://wa.me/${digits}?text=${message}`;
}

function renderFeaturedCards(featuredItems) {
  const featuredGrid = document.querySelector('[data-featured-grid]');
  if (!featuredGrid || !Array.isArray(featuredItems)) {
    return;
  }

  featuredGrid.textContent = '';

  featuredItems.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'relative overflow-hidden rounded-3xl';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.alt;
    image.loading = 'lazy';
    image.className = 'h-80 w-full object-cover';

    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 flex items-center justify-center bg-black/35 p-6 text-center';

    const title = document.createElement('h3');
    title.className = 'text-4xl font-extrabold leading-none text-white';
    title.textContent = item.name;

    overlay.appendChild(title);
    article.appendChild(image);
    article.appendChild(overlay);
    featuredGrid.appendChild(article);
  });
}

function renderMenuSection(section) {
  const sectionNode = document.querySelector(`[data-menu-section="${section.id}"]`);
  if (!sectionNode || !Array.isArray(section.items)) {
    return;
  }

  sectionNode.textContent = '';

  section.items.forEach((item) => {
    const name = document.createElement('div');
    name.className = 'font-bold';
    name.textContent = item.name;

    const price = document.createElement('div');
    price.className = 'text-right font-bold';
    price.textContent = formatCup(item.price);

    sectionNode.appendChild(name);
    sectionNode.appendChild(price);
  });
}

function renderContactInfo(contact) {
  if (!contact) {
    return;
  }

  const addressNode = document.querySelector('[data-contact-address]');
  const primaryPhoneNode = document.querySelector('[data-contact-phone-primary]');
  const secondaryPhoneNode = document.querySelector('[data-contact-phone-secondary]');
  const whatsappGroupNode = document.querySelector('[data-contact-whatsapp-group]');

  if (addressNode && contact.address) {
    addressNode.textContent = contact.address;
  }

  if (primaryPhoneNode && contact.primaryPhone) {
    primaryPhoneNode.textContent = contact.primaryPhone;
    primaryPhoneNode.setAttribute('href', buildWhatsAppChatUrl(contact.primaryPhone));
    primaryPhoneNode.setAttribute('aria-label', `Escribir por WhatsApp al ${contact.primaryPhone}`);
  }

  if (secondaryPhoneNode && contact.secondaryPhone) {
    secondaryPhoneNode.textContent = contact.secondaryPhone;
    secondaryPhoneNode.setAttribute('href', `tel:${normalizePhone(contact.secondaryPhone)}`);
    secondaryPhoneNode.setAttribute('aria-label', `Llamar al ${contact.secondaryPhone}`);
  }

  if (whatsappGroupNode && contact.whatsappGroupUrl) {
    whatsappGroupNode.textContent = contact.whatsappGroupLabel || whatsappGroupNode.textContent;
    whatsappGroupNode.setAttribute('href', contact.whatsappGroupUrl);
  }
}

async function hydrateDataDrivenBlocks() {
  try {
    const data = await getMenuData();
    renderFeaturedCards(data.featured);

    if (Array.isArray(data.sections)) {
      data.sections.forEach(renderMenuSection);
    }

    renderContactInfo(data.contact);
  } catch (error) {
    console.error(error);
  }
}

hydrateDataDrivenBlocks();
