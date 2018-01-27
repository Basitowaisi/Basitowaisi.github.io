const trigger = document.querySelector('.trigger');
const close = document.querySelector('.close');
const mobilenav = document.querySelector('.mobile-nav');
trigger.addEventListener('click',opennav);
close.addEventListener('click',opennav);

function opennav() {
    if(mobilenav.dataset.visibility == 'false'){
    mobilenav.style.display='flex';
    mobilenav.setAttribute('data-visibility','true');
    setTimeout(() => {
        mobilenav.classList.add('animate-nav'); 
    }, 400);
    } else {
        mobilenav.style.display = 'none';
        mobilenav.classList.remove('animate-nav');
        mobilenav.setAttribute('data-visibility', 'false');
    }
}