/**
 * Basil Café - Unified Vanilla JavaScript Modules
 * Handles menu preview tabs, dietary filter, gallery filter, FAQ accordion & reservation validation
 */

// 1. Home Page: Menu Preview Tabs
function switchTab(category, element) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.classList.remove('bg-primary-container', 'text-surface-container', 'shadow-sm');
    tab.classList.add('text-on-surface-variant');
  });
  if (element) {
    element.classList.add('bg-primary-container', 'text-surface-container', 'shadow-sm');
    element.classList.remove('text-on-surface-variant');
  }

  // Filter preview dishes if data-tab-category is present
  const dishes = document.querySelectorAll('[data-dish-category]');
  if (dishes.length > 0) {
    dishes.forEach(dish => {
      const cat = dish.getAttribute('data-dish-category');
      if (category === 'all' || cat === category) {
        dish.style.display = '';
      } else {
        dish.style.display = 'none';
      }
    });
  }
}

// 2. Menu Page: Dietary Filter & Scroll-Spy
document.addEventListener('DOMContentLoaded', () => {
  const dietaryPills = document.querySelectorAll('.filter-pill');
  const menuItems = document.querySelectorAll('.menu-item-row, .menu-item-card');
  const clearDietaryBtn = document.getElementById('clear-dietary-filter');

  if (dietaryPills.length > 0) {
    dietaryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filter = pill.getAttribute('data-filter');

        // Update pill active classes
        dietaryPills.forEach(p => {
          p.classList.remove('bg-primary', 'text-on-primary');
          p.classList.add('bg-surface-container-high', 'text-on-surface');
        });
        pill.classList.remove('bg-surface-container-high', 'text-on-surface');
        pill.classList.add('bg-primary', 'text-on-primary');

        if (clearDietaryBtn) {
          if (filter !== 'all') {
            clearDietaryBtn.classList.remove('hidden');
          } else {
            clearDietaryBtn.classList.add('hidden');
          }
        }

        // Filter items
        menuItems.forEach(item => {
          const itemTags = item.getAttribute('data-dietary') || '';
          if (filter === 'all' || itemTags.split(' ').includes(filter)) {
            item.style.display = '';
            item.style.opacity = '1';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    if (clearDietaryBtn) {
      clearDietaryBtn.addEventListener('click', () => {
        const allBtn = document.querySelector('[data-filter="all"]');
        if (allBtn) allBtn.click();
      });
    }
  }

  // Sticky Category Nav Scroll-Spy
  const categorySections = document.querySelectorAll('.menu-category, #specials');
  const categoryNavLinks = document.querySelectorAll('.category-link');

  if (categorySections.length > 0 && categoryNavLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let currentId = '';
      categorySections.forEach(sec => {
        const top = sec.offsetTop - 190;
        if (window.scrollY >= top) {
          currentId = sec.getAttribute('id');
        }
      });

      categoryNavLinks.forEach(link => {
        link.classList.remove('bg-secondary-container', 'text-on-secondary-fixed');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('bg-secondary-container', 'text-on-secondary-fixed');
        }
      });
    });
  }

  // 3. Gallery Page: Category Filter & Dynamic Counter
  const galleryFilters = document.querySelectorAll('#galleryFilterGroup .filter-btn');
  const galleryItems = document.querySelectorAll('#galleryGrid .gallery-item');
  const countDisplay = document.getElementById('itemCountDisplay');

  if (galleryFilters.length > 0 && galleryItems.length > 0) {
    galleryFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');

        // Button active state
        galleryFilters.forEach(b => {
          b.classList.remove('bg-primary', 'text-surface-container', 'shadow-sm');
          b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
        });
        btn.classList.add('bg-primary', 'text-surface-container', 'shadow-sm');
        btn.classList.remove('bg-surface-container-low', 'text-on-surface-variant');

        let visibleCount = 0;
        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'flex';
            item.classList.remove('opacity-0', 'scale-95');
            item.classList.add('opacity-100', 'scale-100');
            visibleCount++;
          } else {
            item.classList.remove('opacity-100', 'scale-100');
            item.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
              if (btn.getAttribute('data-filter') !== 'all' && item.getAttribute('data-category') !== btn.getAttribute('data-filter')) {
                item.style.display = 'none';
              }
            }, 200);
          }
        });

        if (countDisplay) {
          countDisplay.textContent = visibleCount < 10 ? '0' + visibleCount : visibleCount;
        }
      });
    });
  }

  // 4. Contact Page: Reservation Form -> opens WhatsApp with a prefilled booking message
  const reservationForm = document.getElementById('reservationForm');
  const confirmationNotice = document.getElementById('confirmationNotice');

  if (reservationForm) {
    const dateInput = document.getElementById('date');
    if (dateInput) {
      const t = new Date();
      const today = new Date(t.getTime() - t.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      dateInput.min = today;
      if (!dateInput.value) dateInput.value = today;
    }

    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const val = (id) => (document.getElementById(id)?.value || '').trim();
      const picked = (name) => {
        const el = reservationForm.querySelector(`input[name="${name}"]:checked`);
        if (!el) return '';
        const label = el.closest('label');
        const first = label ? label.querySelector('span') : null;
        return first ? first.textContent.trim() : el.value;
      };

      let niceDate = val('date');
      if (niceDate) {
        const d = new Date(niceDate + 'T00:00:00');
        if (!isNaN(d)) niceDate = d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
      }

      const lines = [
        'Hello Basil Café, I would like to book a table.',
        '',
        'Name: ' + (val('fullName') || '-'),
        'Phone: ' + (val('phone') || '-'),
        'Guests: ' + (val('partySize') || '2'),
        'Date: ' + (niceDate || '-'),
        'Time: ' + (picked('timeSlot') || '-'),
        'Seating: ' + (picked('seating') || 'No preference')
      ];
      if (val('email')) lines.push('Email: ' + val('email'));
      if (val('notes')) lines.push('Note: ' + val('notes'));

      const url = 'https://wa.me/917300776850?text=' + encodeURIComponent(lines.join('\n'));

      if (confirmationNotice) {
        confirmationNotice.classList.remove('hidden');
        confirmationNotice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      const win = window.open(url, '_blank');
      if (win) { win.opener = null; } else { window.location.href = url; }
    });
  }
});

// 5. Contact Page: FAQ Accordion Toggle
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.material-symbols-outlined');
  const isHidden = content.classList.contains('hidden');

  // Close other FAQ items
  document.querySelectorAll('#faqAccordion > div').forEach(item => {
    const otherContent = item.querySelector('div');
    const otherIcon = item.querySelector('.material-symbols-outlined');
    if (otherContent && otherContent !== content) {
      otherContent.classList.add('hidden');
      if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
    }
  });

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
}
