// Handle Mobile Interface
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// Handle Light / Dark Mode
const modeButtons = document.querySelectorAll('.mode-toggle');
const html = document.documentElement; 

modeButtons.forEach(button => {

    button.addEventListener('click', () => {

        html.classList.toggle('dark');

        if (html.classList.contains('dark')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }


        modeButtons.forEach(btn => {
            const icon = btn.querySelector('i');
            if (html.classList.contains('dark')) {

                button.style.backgroundColor = 'white'; 

                icon.classList.replace('fa-sun', 'fa-moon'); 
            } else {

                button.style.backgroundColor = 'hsl(12, 88%, 59%)'; 

                icon.classList.replace('fa-moon', 'fa-sun'); 

            }
        });
    });
});


