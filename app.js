
var button = document.querySelector('#app button')

button.addEventListener('click',() => {
  axios.get('https://api.github.com/users')
    .then((response) => {
      var data = response.data
      console.log(data[0])
    })
    .catch((error) => {
      console.log(error)
    })
})