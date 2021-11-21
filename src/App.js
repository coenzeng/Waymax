import Search from './components/search/search'
import Eyes from './components/eyes/eyes'
import SpeechBubble from './components/speechBubble/speechBubble'
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
      
        <Eyes/>
        <SpeechBubble/>
        <Search/>
       
      </header>
    
    </div>
  );
}

export default App;
