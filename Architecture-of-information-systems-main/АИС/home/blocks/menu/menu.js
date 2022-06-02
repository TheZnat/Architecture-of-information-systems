const menuItem = document.querySelectorAll('.menu-item')
const modal = document.getElementById('myModal');
let textModal = '';

menuItem.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block"
        textModal = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-text">${this.dataset.labs}</h2>
            <div class="modal-body">
                <p class="modal-text">Отсчет по лабораторной работе</p>
                <embed ${this.dataset.pathPdf} width=100% height=500px>
            </div>
            <div class="modal-footer">
                <h3 class="modal-text"><a href="#" download>скачать скрипт</a></h3>
            </div>
        </div>
        `;
        modal.insertAdjacentHTML('afterbegin', textModal);
    }
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.reload();
    }
}