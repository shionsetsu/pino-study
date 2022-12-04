const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
let d = document;


// btnA.addEventListener('click',function() {
//     changeBg('tomato');
// })

// btnB.addEventListener('click',function() {
//     changeBg('skyblue');
//     // document.body.style.backgroundColor='green'
// })

const btn = document.querySelectorAll('.btn')
console.log(btn);
for(let i=0; i<btn.length; i++){
    btn[i].onclick = function(evt){
        const color = evt.target.dataset.color
        console.log(evt.target.dataset.color);
        changeBg(color);

    }
    // btn[i].onclick = changeBg;
}

function changeBg(value){
    // console.log();
    document.body.style.backgroundColor = value;
    // document.body.style.backgroundColor='gold'

}

// btn.onclick = function(){

// }

