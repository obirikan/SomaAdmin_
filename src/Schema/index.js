

// create a random unique identifier
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}


export const updateTableName = 'Updates';



export const updateSchema = (list,title,action,message,image)=>{
    return{
        id:uuidv4(),
        list,
        title,
        action,
        message,
        image,
        dateCreated:new Date(),
    }
}

export const RegisterSchema = (fullname,email,username,adminType)=>{
    return{
        id:uuidv4(),
        fullname,
        email,
        username,
        adminType,
        dateCreated:new Date(),
    }
}

export const UniversitySchema = (University,image,code)=>{
    return{
        id:uuidv4(),
        University,
        image,
        code,
        dateCreated:new Date(),
    }
}