// INITIAL RATINGS
const ratings = {
    amala: 4.7,
    semo: 1.4,
    eba: 2.8,
    wheat: 1.1,
    iyan: 5 
}

// TOTAL STARS
const starsTotal = 5

// RUN getRatings WHEN DOM LOADS
document.addEventListener('DOMContentLoaded', getRatings)

// GET FORM ELEMENTS
const okeleSelect = document.getElementById('okele-select')
const ctrlRating = document.getElementById('rating-control')

// INIT OKELE
let okele

// OKELE SELECT CHANGE
okeleSelect.addEventListener('change', (e) => {
    okele = e.target.value
    // ENABLE RATING CONTROL
    ctrlRating.disabled = false
    ctrlRating.value = ratings[okele]
})

// RATING CONTROL CHANGE
ctrlRating.addEventListener('blur', (e) => {
    const rating = parseFloat(e.target.value)
    // CHECK 5 OR UNDER
    if(rating > 5){
        alert('Please rate 1 - 5')
        return
    }

    // CHANGE RATING
    ratings[okele] = rating

    getRatings()
})

// getRatings
function getRatings(){
    for(let rating in ratings){
        // GET PERCENTAGE
        const starPercentage = (ratings[rating]/starsTotal) * 100

        // ROUND TO NEAREST TEN
        const starPercentageRounded = `${Math.round(starPercentage/10) * 10}%`

        // SET WITH OF STARS INNER TO starPercentageRounded
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded

        // ADD PERCENTAGE RATING
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating]
    }
}