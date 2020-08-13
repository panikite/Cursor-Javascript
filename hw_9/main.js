
function generateBlocks() {
    const wrapper1 = document.createElement('div');
    wrapper1.classList.add('wrapper', 'wrapper-1');
    document.body.append(wrapper1);
    const container = document.createElement('div');
    container.style.width = '250px';
    container.style.height= '250px';
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    wrapper1.append(container);

    for (let i = 0; i < 25; i++) {
        const i = document.createElement('div');
        i.style.width = '50px';
        i.style.height = '50px';
        i.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        container.append(i);
    }
}

generateBlocks();



function generateBlocksInterval() {
    const wrapper2 = document.createElement('div');
    wrapper2.classList.add('wrapper', 'wrapper-2');
    document.body.append(wrapper2);
    const container = document.createElement('div');
    container.style.width = '250px';
    container.style.height= '250px';
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    wrapper2.append(container);

    for (let i = 0; i < 25; i++) {
        const i = document.createElement('div');
        i.style.width = '50px';
        i.style.height = '50px';
        setInterval(()=>{
            i.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        },1000);
        container.append(i);
    }   
}

generateBlocksInterval();