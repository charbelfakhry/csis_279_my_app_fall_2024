

const getUser = () =>{
    const parseUser = JSON.parse(localStorage.getItem("user"));
    return parseUser;
}

const setUser = (user) =>{
    localStorage.setItem("user", JSON.stringify(user));
}

module.exports = {
    getUser,
    setUser,
}