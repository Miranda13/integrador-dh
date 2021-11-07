function removeClass(id) {
    let element = document.getElementById(id);
    element.classList.remove('validation-errors');
}

function addClass(id) {
    let element = document.getElementById(id);
    element.classList.add('validation-errors');
}

let emailExpr = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
let nameExpr = /^[a-zA-ZÀ-ÿ\u0027\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u0027\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u0027\u00f1\u00d1]+$/
let passExpr = /^[a-z0-9\u002e\u002a\u002c]+$/i

function changeClass(values, errors) {
    Object.keys(values).forEach(field => {
        if (Object.keys(errors).some(error => error === field))
            addClass(field)
        else
            removeClass(field)
    })
}

export {changeClass, emailExpr, nameExpr, passExpr}