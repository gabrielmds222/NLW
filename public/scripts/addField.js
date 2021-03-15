//procurar botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//clicar no botão

//executar ação ao clicar
function cloneField() {
    //puplicar os campos. que campos?
   const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    
   //limpar os campos
    const fields = newFieldsContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field) {
   field.value = ""
    })
     //colocar na pagina
     document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
