import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Contact"element={<Contact/>}/>

        <Route path="/Service"element={<Service/>}/>
        <Route path="/About"element={<About/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
