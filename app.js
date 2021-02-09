
const submitButton = document.querySelector('#app form button')
const zipCopdefield = document.querySelector('#app form input')
const content = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run(event) {
  event.preventDefault()

  let zipCode = zipCopdefield.value

  zipCode = zipCode.replace(' ', '')
  zipCode = zipCode.replace('.', '')
  zipCode = zipCode.trim()

  

  axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((response) => {
      
      const { erro, logradouro, uf, localidade, bairro } = response.data
      
      if (erro) throw new Error('CEP inválido')
      
      content.innerHTML = ''
      createLine(logradouro)
      createLine(`${localidade}/${uf}`)
      createLine(bairro)
    })
    .catch((error) => {
      content.innerHTML = ''
      console.log(error)
      createLine('Algo deu errado!')
    })


}

function createLine(text) {
  let line = document.createElement('p')
  let textLine = document.createTextNode(text)

  line.appendChild(textLine)
  content.appendChild(line)
}
