




$(document).ready(function () {
    var pointer = document.getElementById('mouse-tag')
    pointer.style.display = 'none'
    var timeout
    document.addEventListener('mousemove', (e) => {
        //   console.log(e)
        
    
        pointer.style.display = 'block'
        pointer.style.left = e.pageX + 'px'
        pointer.style.top = e.pageY + 'px'
        
    
        function mouseStopped() {
            pointer.style.display = 'none'
            pointer.classList.remove('mouse-tag-center')
        }
    
        clearTimeout(timeout)
        timeout = setTimeout(mouseStopped, 2000)
    })
    
    document.addEventListener('mouseout', (e) => {
        
        pointer.style.display = 'none'
        pointer.classList.remove('mouse-tag-center')
       
        
    })
    
    //mouse-tag-center
    document.addEventListener('mousedown', (e) => {
        
        
        pointer.classList.toggle('mouse-tag-center')
       
       
        
    })

  });