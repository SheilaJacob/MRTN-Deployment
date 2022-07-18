import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewPet from './components/NewPet';
import DisplayList from './components/DisplayList';
import PetDetails from './components/PetDetails';
import UpdatePet from './components/UpdatePet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <h1 style={{color: "purple"}}>Pet Shelter</h1>

        <BrowserRouter>            
            <Routes>    
                  <Route element={<DisplayList/>} path="/" />
                  <Route element={<NewPet/>} path="/new" />
                  <Route element={<UpdatePet/>} path="/pet/edit/:id" />
                  <Route element={<PetDetails/>} path="/pet/:id" />
            </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
