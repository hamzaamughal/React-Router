import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';

// *************** Props to BrowserRouter *********************
// 1.basename="/tutorial"
// 2.forceRefresh
// 3.getUserConfirmation
// 4.useEffect(()=>{
//   window.scroll(0,0)
// },[])
// 5. Two ways to get id: match and useParams Hook

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App

