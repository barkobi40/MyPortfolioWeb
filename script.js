<script>
  const toggleButton = document.getElementById('darkModeToggle');
  const modeIcon     = document.getElementById('modeIcon');

  // Helper שמגדיר מצב + אייקון
  function setMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    modeIcon.src     = isDark ? 'assets/icons/moon.svg' : 'assets/icons/sun.svg';
    modeIcon.alt     = isDark ? 'Dark mode'            : 'Light mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // ▶️ ברגע שהעמוד נטען
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    setMode(saved === 'dark');
  });

  // ▶️ לחיצה על הכפתור
  toggleButton.addEventListener('click', () => {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    setMode(!isCurrentlyDark);
  });
</script>
