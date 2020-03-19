var urls = [
    "https://www.test.com",
    "https://www.google.com",
    "https://www.apple.com",
    "https://www.app.com",
]

const randomurl = urls[Math.floor(Math.random() * urls.length)];

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector(".btn-primary").onclick = openwebsite
})




function openwebsite(){
    console.log(randomurl)    
    window.open("https://www.test.com")
}