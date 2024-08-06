import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from './Pages/LoginComp/Login';
import AddUser from './Pages/RegisterComp/Register';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
   <>
      <BrowserRouter>
   <Navbar></Navbar>
   <div className='container'>
    <Switch>
    {/* <Route path="/"  component={Movies} exact/> */}
    <Route path="/login"  component={LoginUser} exact/>
    <Route path="/register"  component={AddUser} exact/>



    {/* <Route path ="*" component ={NotFound} exact/> */}
    </Switch>
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
