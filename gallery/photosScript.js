let button = document.querySelector('.bth')
let content = document.querySelector('.content')
let counter = 7;
let htmlGridItemPhoto = '';

let NewArea = () =>{
    let NewDivSection = document.createElement('div');
    NewDivSection.classList.add('content-grid');
    content.appendChild(NewDivSection);
    return NewDivSection;
}

let render = () => {
    if(counter <= 50) {
        let temp = NewArea();
        htmlGridItemPhoto = `
        <img src="img/${counter++}.jpg" alt="фото города" class="content__img grid-item">
        <img src="img/${counter++}.jpg" alt="фото города" class="content__img grid-item">
        <img src="img/${counter++}.jpg" alt="фото города" class="content__img grid-item">
        <img src="img/${counter++}.jpg" alt="фото города" class="content__img grid-item">
    `;
        temp.insertAdjacentHTML('afterbegin', htmlGridItemPhoto);
    } else {
        button.removeEventListener('click', render);
        return;
    }
}
button.addEventListener('click', render)
