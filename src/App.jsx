
import './App.css';
import Navbar from './components/Navbar';
import polysvg from './assets/svg/polygon.svg'
import Part1 from './components/Part1'
import Part2 from './components/Part2'
import Part3 from './components/Part3'
import Part4 from './components/Part4'

function App() {
  return (
    <div id="main-area">
    <Navbar />
    <div className="content-sections">
      <Part1 />
    </div>
    <div className="content-sections">
      <Part2 />
    </div>
    <img src={polysvg} id="poly-svg"/>
    <div className="content-sections">
      <Part3 />
    </div>
    <div className="content-sections">
      <Part4 />
    </div>
    </div>
  );
}

export default App;
