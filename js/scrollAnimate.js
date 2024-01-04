

$(document).ready(function () {
  

  console.log('happy hacking 😊');


var sec = document.getElementById('sec')
var btn1 = document.getElementById('back')
var btn2 = document.getElementById('nav-btn-1')
var sec1 = document.getElementById('sec1')
//var overlay = document.getElementById('morph')
var in_position = false
// var morphing = anime({
//     targets: '.morph',
//     d: [

//         { value: `M0,1080V0H1920V1082.29s38-38-489-130-525-48-628,64-223.69-25.82-396,5C256,1048.29,24.5,962.5,0,1080Z` },
//         { value: `M0,1080V0H1920V127.79s4,461.5-523,369.5-496,3-599,115-213.69-50.82-386-20C261,619.29,24.5,962.5,0,1080Z` },
//         { value: `M0,1080V0H1920V127.79S1724,172,1197,80,734,198,631,310s-193.69,65.19-366,96C114,433,24.5,962.5,0,1080Z` },

//         //{ value: `M0,0V2L1920,1v.29S1920,1,1445,3C933,5.16,960.16,3,808,3H410C222,3,116,5,0,0Z`},
//         //      { value: `M1920,0V1080H0V952.21S20,831,547,923s520,64,623-48,332,213,403,53S1885,1469,1920,0Z` },
//     ],
//     easing: 'easeInOutQuint',
//     duration: 1300,
//     loop: false,
//     autoplay: false
// })


btn2.addEventListener('click', callAnimation)



btn1.addEventListener('click', () => {
    if (in_position) {
       
        // morphing.reverse();
        // morphing.play();
        
      //  overlay.classList.remove('pointer', 'animated',  'fadeOutUp', );
        sec1.classList.remove('display', );

        sec.classList.add('animated', 'display', 'flipInY', );
        in_position = false
        }
   

})




function callAnimation (){

   
   if (!in_position) {
    // morphing.restart();

    //overlay.classList.add('pointer', 'animated',  'fadeOutUp', 'delay-1s');
    sec1.classList.add('animated', 'display', 'slideInDown', );
    sec.classList.remove('animated', 'display', 'flipInY', );
       sec.style.display = 'none'
       in_position = true
   }

}
 })

