const filters = document.querySelector('.filters');
if (filters) {
  const buttons = filters.querySelectorAll('button');
  const cards = document.querySelectorAll('.card');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const selected = event.target.closest('button[data-filter]');
    if (!selected) return;
    let count = 0;
    for (const card of cards) {
      card.hidden = selected.dataset.filter !== 'Tous' && card.dataset.cat !== selected.dataset.filter;
      if (!card.hidden) count++;
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button === selected));
    }
    document.getElementById('count').textContent = count + (count > 1 ? ' projets affichés' : ' projet affiché');
  });
}
