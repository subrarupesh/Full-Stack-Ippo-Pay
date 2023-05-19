import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' 
                        element={<Read />} />
                    <Route path='/create' 
                        element={<Create />} />
                    <Route path='/edit' 
                        element={<Update />} />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
