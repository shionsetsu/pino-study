const pic = document.getElementsByClassName('pic');
const overlay = document.querySelector('.overlay');
// console.log(overlay.classList);

pic.onclick = function(){
    console.log("click");
    overlay.classList.remove('hidden');
}

overlay.onclick = function(){
    console.log("wow!") ;
    overlay.classList.add('hidden');    
}

let d = document;
let pic = d.getElementsByClassName('pic');
pic.onclick = function(){
    console.log("wow!");
}