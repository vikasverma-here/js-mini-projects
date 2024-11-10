const form  = document.querySelector('form')
const list = document.querySelector('ul')

const input = document.getElementById('input-feild')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    
    list.innerHTML+=`<li> ${input.value}</li>`
    input.value=""

})
