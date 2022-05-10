import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CountContainer from './components/CountContainer/CountContainer';
import NameInput from './components/NameInput/NameInput';
function App() {
  return (
    <div className="App">
      <AppHeader />
      <NameInput />
      <CountContainer />
    </div>
  );
}

export default App;
