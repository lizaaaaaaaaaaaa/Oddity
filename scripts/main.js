const luckyBtn = document.getElementById("lucky");
const logoImage = document.getElementsByClassName("logo__image")[0];

luckyBtn.onclick = () => {
    logoImage.src = "assets/images/icons/logo-oddity.svg";
}

