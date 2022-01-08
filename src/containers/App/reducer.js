const initalState = {
    allMyIngredients: [],
    datos: []
};

//let currentIngredients = [];
const appReducer = (state = initalState, action) => {
    switch (action.type){
        case 'GET_SOLICITUD':
            return {
                ...state,
                datos: [...action.datos]
            }; 
        case 'GET_EMPLEADOS':   
            return {
                ...state,
                datos: [...action.datos]
            }; 
        case 'GET_NOMINA':   
            return {
                ...state,
                datos: [...action.datos]
            }; 
        default: return state;
    }
};

export default appReducer;