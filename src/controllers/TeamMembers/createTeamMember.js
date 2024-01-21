// Acá van los controllers de TeamMembers
const {TeamMember} = require('../../../src/db');

const createTM = async(info)=>{
    try {
        if(!info) return 'Haber haber, ¿qué pasó con la info?';
        const {name, rol} = info;

        if(!name) return 'Ok, without name we cant do a frigg. Have a great day!';
        const tMCreate = await TeamMember.create({name, rol});
console.log(tMCreate);
        if(tMCreate) return [tMCreate]
        else return `Maybe is not an array, or, it's just an empty array, so, let's try again later, won't you?`;

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createTM
}