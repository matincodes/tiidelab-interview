const button = document.querySelector('button')
const input = document.querySelectorAll('input')

button.addEventListener('click', (e)=>{
    e.preventDefault()
    input.forEach(cur => {
        alert(cur.value)
    })
})
