
import { Box } from '@material-ui/core';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import About from './components/about/About'; 
import Contact from './components/contact/Contact';

function App() {
  return (<>
  <BrowserRouter>
    <Header/>
    <Box style={{marginTop:64}}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/details/:id" component={Details}/>
      <Route exact path="/create" component={CreateView}/>
      <Route exact path="/update/:id" component={UpdateView}/>
      </Switch>
    </Box>
  </BrowserRouter>  
    </>
  );
}

export default App;
