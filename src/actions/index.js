export const add_todo = (data) => {
    return{
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const delete_todo = (id) => {
    return {
        type:"DELETE_TODO",
        id
    }
}
export const remove_todo = () => {
    return {
        type:"REMOVE_TODO"
    }
}

