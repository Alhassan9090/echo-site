// Local illustration only. No account, storage, analytics or network requests.
const controls = document.querySelectorAll('[data-demo-view]');
for (const control of controls) {
  control.addEventListener('click', () => {
    const target = control.getAttribute('data-demo-view');
    for (const button of controls) {
      button.setAttribute('aria-pressed', String(button === control));
    }
    for (const panel of document.querySelectorAll('[data-demo-panel]')) {
      panel.hidden = panel.id !== target;
    }
  });
}
