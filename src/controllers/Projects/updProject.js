const { Project } = require("../../../src/db");

const updProject = async (info, idToUpd) => {
  try {
    const { name, description } = info;

    if (!idToUpd)
      return "Without Id we cant affort a successful updating operation."
    if (!name)
      return "Sorry, you can't update this Project Reference without a name, because it's necessary for the Database.";

    const updateThatProject = await Project.update(
      { name: name, description: description },
      { where: { id: idToUpd } }
    );

    if (updateThatProject)
      return (
        updateThatProject || "Se debió actualizar correctamente, verifiquemos!."
      );
      else return 'WOWOWOOWOWOWWOOWOWOOWow... como que algo salió mal.'
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = { updProject };
