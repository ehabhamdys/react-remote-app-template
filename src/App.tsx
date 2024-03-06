import { BrowserRouter } from 'react-router-dom';
import GlobalApp from './GlobalApp';

function App() {
  return (
    // TODO BrowserRouter provider must be added to this component
    // Providers and contexts must be site in the GlobalApp component
    <BrowserRouter>
      <GlobalApp appPath='' />
    </BrowserRouter>
  );
}

export default App;
