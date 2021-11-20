import logo from './logo.svg';
import Search from './components/search/search'
import Eyes from './components/eyes/eyes'
import SpeechBubble from './components/speechBubble/speechBubble'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <Eyes/>
        <SpeechBubble/>
        <Search/>
      </header>
    
    </div>
  );
}

export default App;
