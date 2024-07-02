const inputFeild = document.getElementById('Input-Field')


function ShowInput(value){
  inputFeild.value += value
}

function Clear(){
    inputFeild.value =''
}

function ShowTotal(){
    try{
        inputFeild.value = eval(inputFeild.value)
    }catch{
        inputFeild.value ='error'
    }
}
ShowInput()

const Circlecolor = document.getElementById('Circle-color')
const ButttonElements = document.getElementById('Btn')

ButttonElements.addEventListener('click',() => {
   let randomRed = Math.floor(Math.random()*256)
   let randomBlue = Math.floor(Math.random()*256)
   let randomGreen = Math.floor(Math.random()*256)

   let RandomColor = `rgb(${randomRed},${randomBlue},${randomGreen})`

   Circlecolor.style.backgroundColor = RandomColor
})

