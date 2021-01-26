"use strict";

price.onfocus = () => price.value = "";

price.oninput = () => {
    result.textContent = percentCalcul(price.value, percent.textContent) + "€";
    animationScale(result);
}

plus.onclick = () => {
    percent.classList.add("slideUp");
    setTimeout(() => percent.classList.replace("slideUp", "slideDown"), 200);
    animationScale(result);
    let percent_Int = parseInt(percent.textContent);
    if (percent_Int < 95)
        percent.textContent = percent_Int + 5;

    setTimeout(() => {
        percent.classList.remove("slideDown");
    }, 300);

    result.textContent = percentCalcul(price.value, percent.textContent) + "€";
}

minus.onclick = () => {
    percent.classList.add("slideDown");
    setTimeout(() => percent.classList.replace("slideDown", "slideUp"), 200);
    animationScale(result);
    let percent_Int = parseInt(percent.textContent)
    if (percent_Int > 0)
        percent.textContent = percent_Int - 5;

    setTimeout(() => {
        percent.classList.remove("slideUp");

    }, 300);


    result.textContent = percentCalcul(price.value, percent.textContent) + "€";
}

function percentCalcul(price, percent) {
    percent = percent ? percent : 0;
    price = price ? price : 0;
    return (price * (1 - percent / 100)).toFixed(2);
}

function animationScale(div) {
    div.classList.add("scale15");
    setTimeout(() => { div.classList.remove("scale15") }, 200);
}

/******************Bouton d'Installation PWA******************/
window.onbeforeinstallprompt = (event) => {
    installBtn.classList.add("slide"); //affiche la banniere perso
    event.preventDefault(); // annuler la banniere par defaut
    
    installBtn.onclick = () => {
        installBtn.classList.remove("slide"); //faire disparaitre le bouton
        setTimeout(() => installBtn.style.display = "none", 500);
        event.prompt(); //permettre l'installation
    };
};

/******************Service Worker ******************/
//Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw.js')
            .then(registration => {
                console.log(
                    `Service Worker enregistré ! Ressource: ${registration.scope}`
                );
            })
            .catch(err => {
                console.log(
                    `Echec de l'enregistrement du Service Worker: ${err}`
                );
            });
    });
}