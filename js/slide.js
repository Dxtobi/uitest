
$(document).ready(function () { 
    var prev = document.getElementById('prev');
    var next = document.getElementById('next-slide');
    
    
    next.addEventListener('click', () => {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    })
    
    prev.addEventListener('click', () => {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length -1])
    })
})
