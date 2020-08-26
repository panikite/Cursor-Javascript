
/* Generae Id */
function* createIdGenerator() {
    let i = 1;
    while(true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator();
const genIdButton = document.getElementById('genId');
const idContainer = document.getElementById('id_list');

genIdButton.addEventListener('click',() => {
    idContainer.append(document.createElement('p').innerHTML = idGenerator.next().value);
})


/* Change Font Size */

let fontSizeBody = window.getComputedStyle(document.body).fontSize;
const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((el) => {
    el.addEventListener('click',() => {
        if (el.dataset.target === "up") {
            fontSizeBody = genFontSize("up").next().value;
            document.body.style.fontSize = fontSizeBody;
        }
        else if (el.dataset.target === "down") {
            fontSizeBody = genFontSize("down").next().value;
            document.body.style.fontSize = fontSizeBody;
        }
    })
})

function* genFontSize(size) {
    if (size == "up") yield (parseInt(fontSizeBody) + 2) + 'px';
    else if (size == "down") yield (parseInt(fontSizeBody) - 2) + 'px';
    else yield fontSizeBody;
}

