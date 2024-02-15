const toggle = document.getElementById('darkmode-toggle')
const body = document.querySelector('body')
const header = document.querySelector('header')

toggle.onclick = function() {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    header.classList.toggle('active')

}