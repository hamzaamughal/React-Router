import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Route path="/" />
    </BrowserRouter>
  );
}

export default App