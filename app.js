var button = document.querySelector('#app button')

button.addEventListener('click', () => {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.github.com/users')
  xhr.send()

  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText)
      console.log(data[2].login)
    }
  }
})