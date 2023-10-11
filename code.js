var header = document.getElementById('Header')
window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = "#720b37"
    }
    else{
        header.style.backgroundColor = "transparent"
    }
})