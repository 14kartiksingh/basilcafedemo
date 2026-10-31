/**
 * Basil Café - Navigation & Mobile Drawer
 * Handles multi-page navigation state and responsive mobile drawer
 */

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('translate-x-full');
    if (mobileDrawerBackdrop) {
      mobileDrawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      mobileDrawerBackdrop.classList.add('opacity-100');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('translate-x-full');
    if (mobileDrawerBackdrop) {
      mobileDrawerBackdrop.classList.remove('opacity-100');
      mobileDrawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openDrawer);
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeDrawer);
  }

  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && !mobileDrawer.classList.contains('translate-x-full')) {
      closeDrawer();
    }
  });

  // Highlight active page link if not statically set
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.remove('text-on-surface-variant', 'hover:text-on-surface');
      link.classList.add('text-primary', 'font-title-md', 'font-semibold', 'border-b-2', 'border-primary');
      link.setAttribute('aria-current', 'page');
    }
  });
});
