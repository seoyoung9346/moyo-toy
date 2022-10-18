import {Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SecondPage from './pages/SecondPage';


function App() {

  return(
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/second'} element={<SecondPage/>}/>
      </Routes>
  )
}

export default App;
