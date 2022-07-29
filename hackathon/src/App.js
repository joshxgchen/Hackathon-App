
import './App.css';
import Wheel from './components/spinner';
import logo from './components/dashboard.png'

function App() {
  return (
    <div className="App">
      <img src={logo}alt="Dashboard"/>
      <header className="App-header">
        <Wheel items={['2000 Bonus Points', '$2 Off a Hotdog', '$1 off Haagen-Daaz', '$1 Pizza Slice', '$1 Medium Slurpee', 'Free Car Wash']} />

      </header>
    </div>
  );
}

export default App;
