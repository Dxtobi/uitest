


var hover = document.querySelectorAll('.hover-effect');
var hover_text = document.querySelectorAll('.hover-effect-text');

//hover_text.addEventListener('mouseover', hoverFunc)


//hover_text.addEventListener('mouseleave', hoverFuncRemove)
//elem.addEventListener('mouseleave', hoverFuncRemove)
//mouseleave

hover.forEach((elem) => {
    elem.addEventListener('mouseover', () => hoverFuncElement(elem))
    elem.addEventListener('mouseleave',()=> hoverFuncRemove(elem))
})

hover_text.forEach((elem) => {
    elem.addEventListener('mouseover', () => hoverFunc(elem))
    elem.addEventListener('mouseleave',()=> hoverFuncRemove(elem))
})



function hoverFunc(e) {
    e.classList.add('text-hover-effect')
}

function hoverFuncElement(elem) {
    //console.log(elem)
    elem.classList.add('hover-effect-obj')
}

function hoverFuncRemove(e) {
    
    e.classList.remove('text-hover-effect')
    e.classList.remove('hover-effect-obj')
}


