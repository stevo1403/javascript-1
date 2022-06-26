function showInfo(){
    let name = document.querySelector("main div div span#name");
    let height = document.querySelector("main div div span#height");
    let country = document.querySelector("main div div span#country");

    name.textContent = "Adebayo Stephen";
    height.textContent = "4ft";
    country.textContent = "Nigeria";
}

showInfo();