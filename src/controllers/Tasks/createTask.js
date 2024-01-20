const { Task } = require("../../../src/db");

const createTask = async (name, description, status) => {
    try {
        const newTask = await Task.create({
            name, description, status
        })

        return newTask
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message )
    }
}

module.exports = {
    createTask
}