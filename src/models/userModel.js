const users = require("../data/users")

const findAll = () => {
    return users
}

const create = (newUser) => {
    users.push(newUser)

    return newUser
}
const findById = () => {
    const id = 1
    
    const tamanhoArray = users.length

    let acheiUsuario = null
    
    for (let i = 0; i < tamanhoArray; i++){
        if ( users[i].id == id){
           acheiUsuario = users[i] 
        }
            
    }
    return acheiUsuario
}

module.exports = {
    findAll,
    create,
    findById
}