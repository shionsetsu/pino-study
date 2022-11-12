document.getElementById("textbox").addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
    send()
    document.getElementById("textbox").value = null;
    }
})

document.getElementById("send").addEventListener("click",function(c){
    send()
    document.getElementById("textbox").value = null;
})

function send(){
    let text = document.getElementById("textbox").value;
    let width = document.documentElement.clientWidth-50;
    let height = document.documentElement.clientHeight-20;
    let r_width = Math.random() *(width - 10) + 10;
    let r_height = Math.random()*(height -20) + 20;
    let style = `left: ${r_width}px; top:${r_height}px; `
    let ele = document.createElement("div");
    let hako = document.createTextNode(text);
    ele.appendChild(hako);
    ele.setAttribute("class","text");
    ele.setAttribute("style",style);
    let divyouso = document.getElementsByClassName("wall");
divyouso[0].insertBefore(ele,null);
}
