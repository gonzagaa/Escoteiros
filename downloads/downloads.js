const filterElement = document.querySelector('input')
const cards = document.querySelectorAll('.cards .card')

filterElement.addEventListener('input', filterCards)

function filterCards() {
    
    if(filterElement.value != '') {
        for (let card of cards) {
            let title = card.querySelector('span')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            
            if(!title.includes(filterText)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "flex"
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "flex" 
        }
    }
}