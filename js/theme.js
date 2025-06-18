// Theme management functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Function to set theme
    function setTheme(isDark) {
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = html.classList.contains('dark');
            setTheme(!isDark);
        });
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme); 