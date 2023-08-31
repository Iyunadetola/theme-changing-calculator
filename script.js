let firstIcon = document.getElementById('icon-one')
let secondIcon = document.getElementById('icon-two')
let thirdIcon = document.getElementById('icon-three')
let fourthIcon = document.getElementById('icon-four')

let calcBody = document.querySelector('.calculator')
let calc = document.querySelector('.calc')
let themee = document.querySelector('.themee')
let del = document.querySelector('.del')
let reset = document.querySelector('.reset')
let equal = document.querySelector('.equal')
let displayInput = document.querySelector('.display-inp')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')






















// firstIcon.addEventListener('click',()=>{
    
//     secondIcon.style.display = 'block'
//     // calcBody.style.backgroundColor='hsl(0, 0%, 93%)'
//     console.log('click')
//     firstIcon.style.display = 'none'
    
// } )

secondIcon.addEventListener('click', ()=>{
  secondIcon.style.display ='none'
  thirdIcon.style.display='block'
  calcBody.style.backgroundColor = 'hsl(0, 5%, 81%)'
  calc.style.color = 'black'
  themee.style.color = 'black'
  del.style.backgroundColor = 'hsl(176, 100%, 44%)'
  reset.style.backgroundColor = 'hsl(176, 100%, 44%)'
  displayInput.style.backgroundColor = 'hsl(0, 0%, 93%)'
  displayInput.style.color = 'black'
  one.style.color ='black'
  two.style.color ='black'
  three.style.color='black'

})
thirdIcon.addEventListener('click', ()=>{
    thirdIcon.style.display ='none'
    fourthIcon.style.display ='block'
    // fourthIcon.style.paddingLeft = '99px'
    calcBody.style.backgroundColor = 'hsl(268, 75%, 9%)'
    calc.style.color = 'hsl(52, 100%, 62%)'
    themee.style.color = 'hsl(52, 100%, 62%)'
    del.style.backgroundColor = 'hsl(281, 89%, 26%)'
    reset.style.backgroundColor = 'hsl(281, 89%, 26%)'
    one.style.color ='hsl(52, 100%, 62%)'
    two.style.color ='hsl(52, 100%, 62%)'
    three.style.color='hsl(52, 100%, 62%)'
    displayInput.style.backgroundColor = 'hsl(268, 71%, 12%)'
    displayInput.style.color = 'hsl(52, 100%, 62%)'
    equal.style.backgroundColor = 'hsl(176, 100%, 44%)'
    equal.style.Color = 'black'
    
    


    




})

fourthIcon.addEventListener('click', ()=>{
    fourthIcon.style.display = 'none'
    secondIcon.style.display = 'block'
    calcBody.style.backgroundColor = ' hsl(223, 31%, 20%);'
    calc.style.color = 'white'
    themee.style.color = 'white'
    del.style.backgroundColor = 'hsl(225, 21%, 49%)'
    reset.style.backgroundColor = 'hsl(225, 21%, 49%)'
    displayInput.style.backgroundColor = 'hsl(224, 36%, 15%)'
    displayInput.style.color = 'white'
    one.style.color ='white'
    two.style.color ='white'
    three.style.color='white'
    equal.style.backgroundColor = 'hsl(29, 93%, 50%)'


 })
