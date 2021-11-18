import React from 'react';
import HomePage from './pages/home';
// import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
// import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { 
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        {/* <HomePage />   */}

        <Routes>
          <Route path="/">
            <Route path=":type" element={<HomePage />} />
            <Route path=":type/:id" element={<PetDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
