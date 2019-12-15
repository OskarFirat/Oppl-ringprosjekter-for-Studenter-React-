export const increment = (argumentverdi) =>{
    return {
        type: 'INCREMENT',
        payload: argumentverdi
    }
}

export const decrement = () =>{
    return {
        type: 'DECREMENT'
    }
}