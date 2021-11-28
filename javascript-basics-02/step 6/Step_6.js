var imgs = document.querySelectorAll("img");

function changeImg(e, key) {
    e.target.src = "images/image" + (key + 1) + "_2.jpg";
};

function changeImg2(e, key) {
    e.target.src = "images/image" + (key + 1) + ".jpg";
};


imgs.forEach((img, key) => {
    img.addEventListener("mouseover", (e) => { changeImg(e, key) })

    img.addEventListener("mouseout", (e) => { changeImg2(e, key) })




})