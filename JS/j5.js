
// how to check that any element is hidden or not

let HiddenElement  = document.getElementById('hidItem');
let style = window.getComputedStyle(HiddenElement);
let hidden = style.getPropertyValue('visibility');
if(hidden){
    console.log('it is hidden')
}