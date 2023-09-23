import './App.css';
import BannerSection from './Components/BannerSection';
import { Footersection } from './Components/Footersection';
import Logosection from './Components/Logosection';
import NavigationBar from './Components/NavigationBar';
import SaleBandSection  from './Components/SaleBandSection';
import Tabsection from './Components/Tabsection';
import Secondsection from './Components/Secondsection';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Logosection/>
      <Tabsection/>
      <SaleBandSection/>
      <BannerSection/>
      <Secondsection/>
      <Footersection/>
    </div>
  );
}

export default App;
