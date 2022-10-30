// const box = document.getElementsByName("box");
const box = document.querySelectorAll(".box");

// for(let i=0; i<box.length; i++){
//     console.dir (box[i]);
// }

//  配列.forEach( () => {繰り返したい内容})
box.forEach((e,i)=>{
    e.addEventListener('mousedown',() => {
        console.log("押した");
        e.style.backgroundColor="green";
        e.style.color="gold";
        e.textContent="かきくけこ"
    });

    e.addEventListener('mouseup',() => {
        console.log("離した");
        e.style.backgroundColor="tomato"
        e.style.color="";
        e.textContent="box";
    });

    e.addEventListener('mouseleave',()=>{
        console.log('動');
        e.style.backgroundColor="tomato"
        e.style.color="";
        e.textContent="box";
    });
});


window.addEventListener("mousemove",(evt) =>{
    console.log(box[0]);
    console.log(evt.clientX,evt.clientY);
    box[0].style.left=(evt.clientX-62.5)+"px";
    box[0].style.top=(evt.clientY-62.5)+"px";

    if(flg){
        
    };
});
