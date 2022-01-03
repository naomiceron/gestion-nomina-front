import React, { Component } from "react";

class Horas extends Component{
    render(){
        return (
            <div className='containerPrincipal'>
                <div className='containerSecundario'>
                    <div className='form-group'>
                        <h1>Reporte de horas trabajadas</h1>
                        <label>ID Empleado:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                        />
                        <br/>
                        <label>nombre:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                        />
                        <br/>
                        <label>correo:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                        />
                        <br/>
                        <label>banco:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                        />
                        <br/>
                        <label>numero de cuenta:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                        />
                        <br/>
                        <label>salario base:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                        />
                        <br/>
                        <label>horas extra:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                        />
                        <br/> <br/>
                        <button className='btn btn-primary'>Guardar horas trabajadas</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Horas;