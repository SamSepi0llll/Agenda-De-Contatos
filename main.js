const form = document.getElementById('formulario')
const img = '<img src="./images/pngwing.com.png"/>'
let numbercontact = []
let namecontact = []
let linhas = ""
let DiaAtual = new Date()
let DiaSem = DiaAtual.getDay()
let Day = document.querySelector('h1#Dia')

form.addEventListener('submit', function(e){
    e.preventDefault()
    VerificaContatoExistente()
})
function VerificaContatoExistente(){
    if(numbercontact.includes(numberinput.value) || namecontact.includes(nameinput.value.toUpperCase())){
        document.querySelector('.sucess').style.display = ''
        document.querySelector('.error').style.display = 'block'
    }else{
        document.querySelector('.error').style.display = ''
        document.querySelector('.sucess').style.display = 'block'
        numbercontact.push(numberinput.value)
        namecontact.push(nameinput.value.toUpperCase())
        AddRow()
    }
}
function AddRow(){
    const nameinput = document.getElementById('nameinput')
    const numberinput = document.getElementById('numberinput')
    let linha = '<tr>'
    linha += `<td>${nameinput.value}</td>`
    linha += `<td>${numberinput.value}</td>`
    linha += `<td>${img}</td>`
    linha += `</tr>`
    linhas += linha
    const corpoTab = document.querySelector('tbody')
    corpoTab.innerHTML = linhas
    nameinput.value = ''
    numberinput.value = ''
}
switch(DiaSem){
    case 0:
        Day.innerHTML = "Bom Domingo!"
        break
    case 1:
        Day.innerHTML = "Boa Segunda!"
        break
    case 2:
        Day.innerHTML = "Boa Terça!"
        break
    case 3:
        Day.innerHTML = "Boa Quarta!"
        break
    case 4:
        Day.innerHTML = "Boa Quinta!"
        break
    case 5:
        Day.innerHTML = "Boa Sexta!"
        break
    case 6:
        Day.innerHTML = "Bom Sábado!"
        break
}
