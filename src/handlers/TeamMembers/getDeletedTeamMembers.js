const { readDeletedTeamMembers } = require("../../controllers/TeamMembers/readDeletedTeamMembers");

const getDeletedTeamMembers = async (req, res) => {
    try {
        const result = await readDeletedTeamMembers();
        if (!result) return res.status(404).json({message: "No eliminated Team Members were found"})
        res.status(200).json(result)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
        throw new Error(error.message);
    }
} 

module.exports = {
    getDeletedTeamMembers,
}