export function getUserData(){
    return sessionStorage.getItem(`userData`);
}

export function setUserData(data){
    sessionStorage.setItem(`userData`, JSON.stringify(data))
}

export function clearUserData(){
   sessionStorage.removeItem(`userData`);
}