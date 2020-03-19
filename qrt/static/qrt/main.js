var urls = [
    "https://www.test.com",
    "https://www.google.com",
    "https://www.apple.com",
    "https://www.app.com",
]

var listlength = urls.length

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-primary').onclick = () => {
        var random_url_number = getRandomInt(listlength)
        window.open(urls[random_url_number])
    }
})


