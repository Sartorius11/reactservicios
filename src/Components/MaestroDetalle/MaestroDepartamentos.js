import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import MaestroEmpleados from './MaestroEmpleados';

class MaestroDepartamentos extends Component {
    cajaSelect = React.createRef();
    state = {
        departamentos : [],
        empleados : [],
        idDepartamento : 0
    }

    loadDepartamentos = () => {
        axios.get(Global.urlDepartamentos).then(res => {
            this.setState({
                departamentos : res.data,
                statusDep : true
            })
        });
    }

    loadEmpleados = (e) => {
        e.preventDefault(); // Recibimos 'e' porque vamos a recibir un evento del form
        var idDept = this.cajaSelect.current.value;
        this.setState({
            idDepartamento : idDept
        })
    }

    componentDidMount = () => {
        // Cuando carguemos el componente, llamaremos al método
        this.loadDepartamentos();
    }
    
    render() {
        return (
            <div>
                <h1 style={{color : "red"}}>Maestro Departamentos</h1>

                <form onSubmit={this.loadEmpleados}>
                    <label>Departamentos: </label>
                    <select ref={this.cajaSelect}>
                        {
                            this.state.statusDep == true && (
                                this.state.departamentos.map((dept, index) => {
                                    return (
                                        <option value={dept.Numero} key={dept.Numero}>
                                            {dept.Nombre}
                                        </option>
                                    )
                                })
                            )
                        }
                    </select> &nbsp;
                    <button>Mostrar Empleados</button>
                </form>

                {
                    this.state.idDepartamento != 0 && (
                        <MaestroEmpleados idDepartamento={this.state.idDepartamento}/>
                    )
                }

            </div>
        )
    }
}

export default MaestroDepartamentos;