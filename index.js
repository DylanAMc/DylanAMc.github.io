const card_1 = document.querySelector(".card-1")
const card_2 = document.querySelector(".card-2")

const submit = document.querySelector(".submit")
const rate_again = document.querySelector(".rate-again")

const rating = document.querySelector(".rating")
const rates = document.querySelectorAll(".btn-rating")

submit.addEventListener("click" , ()  => {
    card_2.classList.remove("hidden")
    card_1.style.display ="none"
    
})

rate_again.addEventListener("click" , ()  => {
    card_2.classList.add("hidden")
    card_1.style.display ="block"
    
})

rates.forEach((rate) =>{
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})



