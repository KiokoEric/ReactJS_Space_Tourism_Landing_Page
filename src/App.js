import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destination from "./Pages/Destination/Destination"
import Mars from './Components/Destination/Mars/Mars';
import Europa from './Components/Destination/Europa/Europa';
import Titan from './Components/Destination/Titan/Titan';
import Error from './Pages/Error/Error';
import Crew from './Pages/Crew/Crew';
import Mission_Specialist from "./Components/Crew/Mission_Specialist/Mission_Specialist"
import Pilot from "./Components/Crew/Pilot/Pilot"
import Flight_Engineer from "./Components/Crew/Flight_Engineer/Flight_Engineer"
import Technology from './Pages/Technology/Technology';
import Space_Capsule from './Components/Technology/Space_Capsule/Space_Capsule';
import Space_Port from './Components/Technology/Space_Port/Space_Port';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='/Destination' element={<Destination />}></Route>
        <Route path='/Destination/Mars' element={<Mars /> } />
        <Route path='/Destination/Europa' element={<Europa /> } />
        <Route path='/Destination/Titan' element={<Titan /> } />
        <Route path='/Crew' element={<Crew /> }></Route>
        <Route path='/Crew/Mission_Specialist' element={<Mission_Specialist /> }></Route>
        <Route path='/Crew/Pilot' element={<Pilot /> }></Route>
        <Route path='/Crew/Flight_Engineer' element={<Flight_Engineer /> }></Route>
        <Route path='/Technology' element={<Technology />}></Route>
        <Route path='/Technology/Space_Capsule' element={<Space_Capsule />}></Route>
        <Route path='/Technology/Space_Port' element={<Space_Port />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
