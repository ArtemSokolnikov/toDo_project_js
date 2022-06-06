import './App.css';
import Home from './components/Home';

function App() {
  if ( !localStorage.getItem('tasksArr')) {
    localStorage.setItem('tasksArr', []); 
  }
  if (!localStorage.getItem('index')){
    localStorage.setItem('index', '0');
  }
  return (
    <Home />
  );
}

export default App;
