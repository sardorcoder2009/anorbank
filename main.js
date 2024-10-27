const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')



btn.addEventListener('click' , () => {
   
    if( btn.classList.contains('div2')){
        btn.classList.remove('div2')
    } else {
        btn.classList.add('div2')
    }
})

btn2.addEventListener('click' , () => {
   
    if( btn2.classList.contains('div2')){
        btn2.classList.remove('div2')
    } else {
        btn2.classList.add('div2')
    }
})
btn3.addEventListener('click' , () => {
   
    if( btn3.classList.contains('div2')){
        btn3.classList.remove('div2')
    } else {
        btn3.classList.add('div2')
    }
})