

const getLocalStorageUser = () =>{
    const parseUser = JSON.parse(localStorage.getItem("user"));
    return parseUser;
}

const setLocalStorageUser = (user) =>{
    localStorage.setItem("user", JSON.stringify(user));
}

module.exports = {
    getLocalStorageUser,
    setLocalStorageUser,
}