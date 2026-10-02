const enterButton = document.getElementById("enterButton");

const welcomeScreen = document.getElementById("welcomeScreen");

const mainPage = document.getElementById("mainPage");


enterButton.addEventListener("click", function() {

    welcomeScreen.classList.add("hidden");

    setTimeout(function() {

        mainPage.classList.add("visible");

    }, 500);

});