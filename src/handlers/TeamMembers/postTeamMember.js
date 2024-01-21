// Acá van loos handlers de TeamMembers
const { createTM } = require("../../controllers/TeamMembers/createTeamMember");

const postTeamMember = async (req, res) => {
  try {
    const { name, rol } = req.body;
    
    const result = await createTM({ name, rol });
console.log(Array.isArray(result));
    if (result.length > 0 && Array.isArray(result))
      res.status(200).json(result);
    else
      res
        .status(400)
        .json({
          message: "Something went strange and maybe this is not an array",
          info: result,
        });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { postTeamMember };
