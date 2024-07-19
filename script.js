const button = document.getElementById('click-button')
const uname = document.getElementById('username')
const uname12 = document.getElementById('username12')
button.addEventListener('click', ()=>{
    const value = uname.value
    console.log(value)
    localStorage.setItem('name',value)
    location.reload()
})

window.addEventListener("load", ()=>{
    const value = localStorage.getItem('name')
    username12.innerText = value
})


