import {db, Table} from './db.config.js'

// Create or Update users
const createOrUpdate = async (data = {}) =>{
    const params = {
        TableName: Table,
        Item: data
    }

    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}


export {
    createOrUpdate,
    readAllUsers,
    getUserById,
    deleteUserById
}
