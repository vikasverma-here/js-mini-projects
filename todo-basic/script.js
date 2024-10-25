const form  = document.querySelector('form')
const list = document.querySelector('ul')
const dlt = document.getElementById('delete')
console.log(form,list ,dlt)
const input = document.getElementById('input-feild')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    console.log(input)
    list.innerHTML+=`<li> ${input.value}</li>`
    input.value=""

})
dlt.addEventListener('click',()=>{
list.innerHTML=" ";
})