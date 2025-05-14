import type { JSX } from 'react';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Comments from './pages/Comments';
import Registration from './pages/Registration';
import MapLocation from './components/layout/MapLocation';
import Footer from './components/layout/Footer';


const App = (): JSX.Element => {
  console.log("Rendered")
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Courses/>
      <Comments/>
      <Registration/>
      <MapLocation/>
      <Footer/>
    </div>
  );
};

export default App;