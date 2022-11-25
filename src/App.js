import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import Bisection from'./RootOfEquation/Bisection';
import FalsePosition from'./RootOfEquation/FalsePosition';
import Onepoint from'./RootOfEquation/Onepoint';
import Newton from './RootOfEquation/Newton';
import Secant from './RootOfEquation/Secant';
import CramersRule from './LinearAlgebra/CramersRule';
import GaussEliminate from './LinearAlgebra/GaussEliminate';
import MatrixInverse from './LinearAlgebra/MatrixInverse';
import Mytest from './RootOfEquation/Mytest';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/bisection' element={<Bisection/>}/>
        <Route path='/falsePosition' element={<FalsePosition/>}/>
        <Route path='/onepoint' element={<Onepoint/>}/>
        <Route path='/newton' element={<Newton/>}/>
        <Route path='/secant' element={<Secant/>}/>
        <Route path='/mytest' element={<Mytest/>}/>
        <Route path='/cramer' element={<CramersRule/>}/>
        <Route path='/gaussEliminate' element={<GaussEliminate/>}/>
        <Route path='/matrixInverse' element={<MatrixInverse/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
