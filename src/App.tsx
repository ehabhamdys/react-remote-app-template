import './App.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalApp from './GlobalApp';

function App() {
  return (
    // TODO BrowserRouter provider must be added to this component
    <BrowserRouter>
      <GlobalApp />
    </BrowserRouter>
  );
}

export default App;
