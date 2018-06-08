function liHandler(eventObject) {
    console.log('li clicked:', eventObject.target);
    eventObject.target.remove();

}

function clickHandler(eventObject) {
    console.log('> button clicked:', inputElem.value);
    var task = inputElem.value;

    if (task == "")
        return;

    var liElem = document.createElement('li');
    liElem.textContent = task;
    liElem.addEventListener('click', liHandler);

    ulElem.appendChild(liElem);

    inputElem.value = "";
}

function mouseEnterHandler() {
    console.log('mouse entered');
}
function mouseLeaveHandler() {
    console.log('mouse left');
}
// function = callback, event based programming.

var ulElem = document.body.querySelector('#to-do');
var inputElem = document.body.querySelector('#item');
var addBtnElem = document.body.querySelector('#addBtn');

addBtnElem.addEventListener('click', clickHandler);
// addBtnElem.addEventListener('click', mouseEnterHandler);
// addBtnElem.addEventListener('click', mouseLeaveHandler);
