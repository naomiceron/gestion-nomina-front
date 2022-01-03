import React, {Component} from 'react';
import "../css/Login.css"
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3000/usuarios";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            correo: '',
            contraseña:''
        }
    }
    handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {correo: this.state.form.correo, contraseña: md5(this.state.form.contraseña)}}) 
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            console.log("ey " + response.value);
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('correo', respuesta.correo, {path: "/"});
                alert('Bienvenido ' + respuesta.nombre);
                window.location.href="./menu";
            }else{
                alert('Credenciales no correctas');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount(){
        if(cookies.get('correo')){
            window.location.href="./menu"; 
        }
    }

    render(){
        return(
            <div className='containerPrincipal'>
                <div className='containerSecundario'>
                    <div className='form-group'>
                        <label>Usuario:</label>
                        <br/>
                        <input
                            type='text'
                            className='form-control'
                            name='correo'
                            onChange={this.handleChange}
                        />
                        <br/>
                        <label>Contraseña:</label>
                        <br/>
                        <input
                            type='password'
                            className='form-control'
                            name='contraseña'
                            onChange={this.handleChange}
                        />
                        <br/>
                        <button className='btn btn-primary' onClick={()=> this.iniciarSesion()}>Iniciar Sesion</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;