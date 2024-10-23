export const formDataSaveFromLocalStorage =(user)=>{
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
}

export const getFormDataFromLocalStorage = (email) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email)
} 