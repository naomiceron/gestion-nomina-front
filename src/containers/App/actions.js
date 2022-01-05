import axios from '../../axios';

const appActions = {
    
    getSolicitud: () => (
        (dispatch) => {
            axios.get('/Solicitud')
            .then(res => {
                dispatch({
                    type: "GET_SOLICITUD",
                    datos:  res.data
                  });
            })
        }
    )
};

export default appActions;