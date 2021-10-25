const content = "내가 가장 좋아하는 3가지 음식소개";
const text = document.querySelector(".fav-text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 200)