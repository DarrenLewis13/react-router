import { Routes, Route,} from "react-router-dom";
import './App.css'
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/home';
import Navbar from "./components/navbar";


const App= () => {

  return (
    <>
        <Navbar />
      
        <Routes>
          <Route path= '/blue' element={<Blue/>} />
          <Route path= '/red' element={<Red/>} />
          <Route path= '/' element={<Home />}/>

        </Routes>
    
    
    </>
  )
}

export default App
