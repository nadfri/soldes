"use strict";

input_price.oninput = () => result.textContent = percentCalcul(input_price.value, spanPercent.textContent) + "€";



plus.onclick = () => {
    let percent = parseInt(spanPercent.textContent)
    if (percent < 95)
        spanPercent.textContent = percent + 5;
    result.textContent = percentCalcul(input_price.value, spanPercent.textContent) + "€"
}

minus.onclick = () => {
    let percent = parseInt(spanPercent.textContent)
    if (percent > 0)
        spanPercent.textContent = percent - 5;
    result.textContent = percentCalcul(input_price.value, spanPercent.textContent) + "€"
}


function percentCalcul(price, percent) {
    percent = percent ? percent : 0;
    price = price ? price : 0;
    return (price * (1 - percent / 100)).toFixed(2);
}

ajouter.onclick = () => {
    const li = document.createElement("li");
    const spanPrice = document.createElement("span");
    spanPrice.className = "spanPrice";

    const input = document.createElement("input");
    input.type = "number";
    input.className = "price";
    input.placeholder = "Prix";

    const spanEuro = document.createElement("span");
    spanEuro.textContent = "€";

    spanPrice.appendChild(input);
    spanPrice.appendChild(spanEuro);

    const plus = document.createElement("i");
    plus.className = "fas fa-plus-square";

    const minus = document.createElement("i");
    minus.className = "fas fa-minus-square";

    const spanPercent = document.createElement("span");
    spanPercent.className = "spanPercent";
    spanPercent.textContent = 10;

    const spanSymbPercent = document.createElement("span");
    spanSymbPercent.textContent = "%";

    const spanResult = document.createElement("span");
    spanResult.className = "result";
    spanResult.textContent = "0€";

    input.oninput = () => spanResult.textContent = percentCalcul(input.value, spanPercent.textContent) + "€";

    plus.onclick = () => {
        let percent = parseInt(spanPercent.textContent)
        if (percent < 95)
            spanPercent.textContent = percent + 5;
        spanResult.textContent = percentCalcul(input.value, spanPercent.textContent) + "€"
    };

    minus.onclick = () => {
        let percent = parseInt(spanPercent.textContent)
        if (percent < 95)
            spanPercent.textContent = percent + 5;
        spanResult.textContent = percentCalcul(input.value, spanPercent.textContent) + "€"
    };

    li.appendChild(spanPrice);
    li.appendChild(minus);
    li.appendChild(spanPercent);
    li.appendChild(spanSymbPercent);
    li.appendChild(plus);
    li.appendChild(spanResult);

    ol.appendChild(li);



}

