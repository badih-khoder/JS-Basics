var imgs = document.querySelectorAll("img");

function changeImg(e, key) {
    e.target.src = "images/image" + (key + 1) + "_2.jpg";
};

imgs.forEach((img, key) => {
    img.addEventListener("mouseover", (e) => { changeImg(e, key) })
})