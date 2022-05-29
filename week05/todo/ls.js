
export function readFromLS(key){
    return key = JSON.parse(localStorage.getItem(key));
}

export function writeToLS(key, data){
    return localStorage.setItem(key, JSON.stringify(data));
}
