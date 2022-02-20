const btns = document.querySelectorAll('a')

 btns.forEach(e => {
   // click
    e.addEventListener('click',() => {
      e.style.background = 'red';

    })  
    // dubbel click
    e.addEventListener('dblclick',() => {
      e.style.background = 'yellow';
    
    }) 

    // keydowen

    e.addEventListener('keydown',() => {
           e.style.background = 'green';
        
       })      

 }) 






// // long press
// btns.forEach(e => {
//  
// })