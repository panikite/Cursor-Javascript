 
const keys = Array.from(document.querySelectorAll('.key'));
const audio = Array.from(document.querySelectorAll('audio'));
const overlay = Array.from(document.querySelectorAll('.cat_overlay'));

window.addEventListener('keydown', e => {
    keys.forEach((key,i) => {
        if(key.id == e.keyCode) {
            audio[i].play();
            overlay[i].style.opacity = 0;
            key.classList.add('key_active');
            setTimeout(()=>{
                key.classList.remove('key_active')
                overlay[i].style.opacity = 1;
            },500);
        }
    })
})


keys.forEach((key,i) => {
    key.addEventListener('click', () => {
        audio[i].play();
        overlay[i].style.opacity = 0;
        key.classList.add('key_active');
        setTimeout(()=>{
            key.classList.remove('key_active')
            overlay[i].style.opacity = 1;
        },500);
    })
})





