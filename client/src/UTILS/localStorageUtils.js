

const getLocalStorageUser = () =>{
    const parseUser = JSON.parse(localStorage.getItem("user"));
    return parseUser;
}

const setLocalStorageUser = (user) =>{
    localStorage.setItem("user", JSON.stringify(user));
}

const getToken = () => {
    const parsedUser = getLocalStorageUser();
    return parsedUser.token;
  };

module.exports = {
    getLocalStorageUser,
    setLocalStorageUser,
    getToken,
}