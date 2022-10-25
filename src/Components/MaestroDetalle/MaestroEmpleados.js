import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

class MaestroEmpleados extends Component {
    state = {
        empleados : [],
        status : false
    }

    generarEmpleados = () => {
        var url = Global.urlEmpleados + "/api/empleados/empleadosdepartamento/";
        axios.get(url + this.props.idDepartamento).then(res => {
            this.setState({
                empleados : res.data,
                status : true
            });
        });
    }

    componentDidUpdate = () => {
        this.generarEmpleados();
    }

    render() {
        return (
            <div>
                <h1 style={{color : "blue"}}>Maestro Empleados ::: {this.props.idDepartamento}</h1>
                {                               
                    this.state.status == true && (
                        this.state.empleados.map((emp, index) => {
                            return(
                                <h3 key={index}>
                                    {emp.apellido}
                                </h3>
                            )
                        })
                    )
                }
            </div>
        )
    }
}

export default MaestroEmpleados;