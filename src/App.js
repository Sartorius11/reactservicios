import logo from './logo.svg';
import './App.css';
import ServicioCustomers from './Components/ServicioCustomers';
import BuscadorCustomers from './Components/BuscadorCustomers';
import BuscadorCoches from './Components/BuscadorCoches';
import DepartamentosEmpleados from './Components/DepartamentosEmpleados';
import MaestroEmpleados from './Components/MaestroDetalle/MaestroDepartamentos.js';


function App() {
  return (
    <div className="App">
      {/* <ServicioCustomers/> */}
      {/* <BuscadorCustomers/> */}
      {/* <BuscadorCoches/> */}
      {/* <DepartamentosEmpleados/> */}
      <MaestroEmpleados/>
    </div>
  );
}

export default App;
