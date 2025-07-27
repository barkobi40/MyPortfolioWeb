document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const modeIcon = document.getElementById('modeIcon');

  function setMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    if (modeIcon) {
      modeIcon.textContent = isDark ? '☀️' : '🌙';
      modeIcon.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    localStorage.setItem('dark-mode', isDark);
  }

  const saved = localStorage.getItem('dark-mode');
  setMode(saved === 'true');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isCurrentlyDark = document.body.classList.contains('dark-mode');
      setMode(!isCurrentlyDark);
    });
  }
}); 