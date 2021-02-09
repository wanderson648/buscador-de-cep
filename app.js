
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
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

}
