let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')

form.addEventListener("submit", function(evento) {
   evento.preventDefault()
   salvarItem()
})

function salvarItem() {
   const comprasItem = itensInput.value
   const checarDuplicado = listaDeItens.some((elemnto) => elemnto.valor.toUpperCase() === comprasItem.toUpperCase())

   if(checarDuplicado) {
      alert("Item já existe")
   } else {
      listaDeItens.push({
         valor: comprasItem
      })
   }

   
}