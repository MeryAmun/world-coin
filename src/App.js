import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Navbar,Footer } from './components/index'
import { Home } from './pages/index'

function App() {
  return (
    <div className="app">
    <Navbar/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
</Routes>
    <Footer/>
    </div>
  );
}

export default App;
