import { v4 as uuidv4 }  from 'uuid'

    let users = []
    
export const getUser = (req, res) =>{
    res.send(users)
}

export const createUser = (req, res) =>{
     const user = req.body
     users.push({...user, id:uuidv4()})
     res.send(`user with ${user.firstname} add to data base`)
}
export const chooseUser = (req, res) =>{
     const {id} = req.params;
    const findUser =  users.find((user) => user.id === id)
     res.send(findUser)
}
export const deleteUser = (req, res) =>{
    const {id} = req.params;
    users = users.filter(user=> user.id != id)
    res.send(`The user with Id ${id} was deleted`)
}

export const updateUser = (req, res) =>{
    const { id } = req.params;
    const userToUpdate = users.find((user)=> user.id === id)
    const { firstname, lastname, age} = req.body

    if(firstname) userToUpdate.firstname = firstname;
    if(lastname) userToUpdate.lastname = lastname;
    if(age) userToUpdate.age = age;      
    
    res.send(`the user with id ${id} is updated`)
}