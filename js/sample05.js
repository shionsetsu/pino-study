// id名 thumbがクリックされた
const thumb = document.getElementById('thumb');
const overlay = document.querySelector('.overlay');
console.log(overlay.classList);

thumb.onclick = function(){
    // divのクラス名hiddenを削除する
    console.log("click");
    overlay.classList.remove('hidden');
}

// overlayがクリックされたときに、クラス名hiddenを付与する
overlay.onclick = function(){
    console.log("wow!") ;
    overlay.classList.add('hidden');    
}