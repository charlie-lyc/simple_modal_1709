const modal = document.getElementById('simpleModal')
const modalBtn = document.getElementById('modalBtn')
const closeBtn = document.getElementsByClassName('closeBtn')[0]

const openModal = () => {
    modal.style.display = 'block'
}
const closeModal = () => {
    modal.style.display = 'none'
}

modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

// Additional feature
const clickModalOutside = (e) => {
    if (e.target === modal) {
        closeModal()
    }
}
window.addEventListener('click', clickModalOutside)
