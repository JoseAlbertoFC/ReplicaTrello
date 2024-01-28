const {TeamMember} = require('../../../src/db');

const updateMembers = async(info, idToUpd)=>{
    try {
        const {name, rol} = info;

        if(!idToUpd) return 'We need the id to make the update.'
        else if(!isNaN(idToUpd)) return `The type of the id is ${typeof idToUpd}, so maybe there is the problem.`;
else if(!name) return 'Without name, we cant continue, sorry'
else if( rol != 'Backend' && rol != 'Frontend') return 'Okidoki, the rol must be or Backend or Frontend'

const updMemberInfo = await TeamMember.update({
    name: name, rol: rol
}, {
    where: {id: idToUpd}
})

if(updMemberInfo[0] == '1') return 'Succesfully updated!';
else if(updMemberInfo[0]== '0') return 'Whoops, something went wrong';
else return `Very well, something is not right... the updated throw this: ${updMemberInfo}`;
    } catch (error) {
        throw new Error(error.message);

    }
}

module.exports={
    updateMembers
}