
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
      content.innerHTML = ''
      
      const { logradouro, uf, localidade, bairro } = response.data
      
      createLine(logradouro)
      createLine(`${localidade}/${uf}`)
      createLine(bairro)
    })
    .catch((error) => {
      console.log(error)
    })


}

function createLine(text) {
  let line = document.createElement('p')
  let textLine = document.createTextNode(text)

  line.appendChild(textLine)
  content.appendChild(line)
}
