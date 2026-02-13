import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';     // ← this is the correct line


//import Homepage from './pages/Homepage';


const isLoggedIn = false; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          //element={isLoggedIn ? <Homepage /> : <Landing />}
          element={isLoggedIn ? <Landing /> : <Landing />}
        />
        
        {/* Add more routes later */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;