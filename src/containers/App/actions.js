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
            axios.get('/Empleado')
            .then(res => {
                dispatch({
                    type: "GET_EMPLEADOS",
                    datos:  res.data
                  });
            })
            axios.get('/Nomina')
            .then(res => {
                dispatch({
                    type: "GET_NOMINA",
                    datos:  res.data
                  });
            })
        }
    )
};

export default appActions;