export function qs(selector) {
    return query = document.querySelectorAll(selector);
 }

export function onTouch(elementSelector, callback) { 
   const element = qs(elementSelector);
   element.addEventListener('click', callback);
}
