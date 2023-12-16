let burger = document.querySelector('.burger')


let burgerMenu = document.querySelector('.burger-menu')


burger.addEventListener('click', () => {
    burger.classList.toggle('burger-transform')
    burgerMenu.classList.toggle('burger-menu__active')
    
})



// let questionButtons = document.querySelectorAll('.btn_wrapper')
// questionButtons.forEach( element => {
//     element.addEventListener('click', (event) => {
//         console.log(typeof event.currentTarget);
//         let text = event.currentTarget.querySelector('.question_text')
//         text.classList.toggle("question_text__block")
//     })
// })