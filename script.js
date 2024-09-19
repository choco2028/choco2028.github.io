//スライドショー
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3秒ごとにスライドを切り替え
}

/* サイドバーを開く */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

/* サイドバーを閉じる */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

let sidebarOpen = false;

function toggleNav() {
    if (sidebarOpen) {
        closeNav();
    } else {
        openNav();
    }
    sidebarOpen = !sidebarOpen;
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
