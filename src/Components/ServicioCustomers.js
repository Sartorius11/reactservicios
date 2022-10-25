import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'

export default class ServicioCustomers extends Component {
    //ALMACENAMOS EN UNA VARIABLE  LA URL DE SERVICIO 
    urlCustomers = "Global.urlCustomers.json"


    //Tendremos un ARRAY CON TODOS LOS CUSTOMERS DEL SERVICIO 
    state= {
        customers: []
    }

    //METODO PARA CARGAR TODOS LOS ELEMENTOS customer
    //DEL NUEVO SERVICIO API EN EL ARRAY DE STATE
    loadCustomers= () => {
        //IMPLEMENTAMOS EL METODO DE PETICION
        var request ="customers.json";


        //LEEMOS EL SERVICIO CON EL METODO GET
        axios.get(this.urlCustomers+ request).then(reponse =>{
            //console.log(reponse.data);
            this.setState({
                customers:reponse.data.results
            });
        });
    }

    //QUEREMOS CARGAR LOS CUSTOMERS AL INICIAR LA PAGINA 
    componentDidMount= () => {
        this.loadCustomers();
    }


  render() {
    return (
      <div>
        <h1>Servicio Customers</h1>

        {
            this.state.customers.map((customer, index)=>{
                return (<h2 style={
                    {color:"red"}} key={customer.id}>
                        {customer.contactName}

                    </h2>);
            })
        }
        
        </div>
    )
  }
}
