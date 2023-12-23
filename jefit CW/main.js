let achive_img = [
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/12members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/6members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/13members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/17members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/18members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/9members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/2members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/5members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/3members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/10members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/14members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/7members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/20members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/15members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/1members-150x150.png",
    "https://www.jefit.com/wp/wp-content/uploads/2021/11/11members-150x150.png",
];

let picContainer = document.querySelector("#picContainer");
let currentIndex = 0;
let numPhotos = 7;

function displayPhotos() {
    picContainer.innerHTML = "";  

    for (let i = 0; i < numPhotos; i++) {
        let img = document.createElement("img");
        img.src = achive_img[currentIndex];
        picContainer.appendChild(img);

        currentIndex = (currentIndex + 1) % achive_img.length;
    }
}

let autoplayInterval = setInterval(displayPhotos, 3000);

picContainer.addEventListener("mouseover", function () {
    clearInterval(autoplayInterval);
});

 
picContainer.addEventListener("mouseout", function () {
    autoplayInterval = setInterval(displayPhotos, 3000);
});

displayPhotos();
 
 
document.getElementById('signup').addEventListener('click',signup);

function signup(){
    window.location.href = "signUp.html"; 
} 
 
 
var elements = document.querySelectorAll(".sigupall");

 
elements.forEach(function(element) {
    element.addEventListener("click", sign);
});

 
function sign() {
    window.location.href = "signUp.html";
}
