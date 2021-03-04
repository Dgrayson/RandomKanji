import logo from './logo.svg';
import './App.css';
import Kanji from './Components/Kanji.js'; 
import Navigation from './Components/Navigation.js';

function App() {
  return (
    <div className="App">
      <Kanji />
      <Navigation />
    </div>
  );
}

export default App;
