
const themeSwitcher = document.querySelector('#theme-switcher');
const themeIcon = document.querySelector('#theme-icon');
const body = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');
const divScope = document.querySelector('.scope');
const footer = document.querySelector('footer');
const ulElements = document.querySelectorAll('main ul');

// Setting default mode to dark
let mode = 'dark';

// Function to toggle theme
function toggleTheme() {
  // If mode is dark, apply light background to elements
  // Toggle mode variable
    mode = mode === 'dark' ? 'light' : 'dark';

    // Toggle body classes
    body.classList.toggle('dark', mode === 'dark');
    body.classList.toggle('light', mode === 'light');
    header.classList.toggle('dark', mode === 'dark');
    header.classList.toggle('light', mode === 'light');
    main.classList.toggle('dark', mode === 'dark');
    main.classList.toggle('light', mode === 'light');
    divScope.classList.toggle('dark', mode === 'dark');
    divScope.classList.toggle('light', mode === 'light');
    footer.classList.toggle('dark', mode === 'dark');
    footer.classList.toggle('light', mode === 'light');
    ulElements.forEach(ul => {
        ul.classList.toggle('dark', mode === 'dark')
        ul.classList.toggle('light', mode === 'light');
    });


  
  
  // Toggle theme icon
  if (mode === 'dark') {
    themeIcon.src = "./assets/images/sunrise.png";
    themeIcon.alt = "Sunrise Icon";
} else {
    themeIcon.src = "./assets/images/moon.png"; // Replace's with  dark mode icon path
    themeIcon.alt = "Dark Mode Icon";
}
}
  
  
 // Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', toggleTheme);     





