import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Blog from "./Components/Pages/Blog/blog"
import Resume from './Components/Pages/Resume/resume'
import Topbar from './Components/Navbar/topbar'
import About from './Components/Pages/About/about'
import Contact from './Components/Pages/Contact/contact'

import {MyProvider} from './Components/Context/index'
// import 'bootstrap/dist/css/bootstrap.min.css'




const App = () => {
  return (
    <>          
  <MyProvider>
      <BrowserRouter>
        
        <Topbar />
        
<div style={{marginTop: '80px'}}>
        <Switch>
          <Route path="/blogs/:id" component={Blog}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" exact  component={About} ></Route>
          <Route render={() =>(
            <h3>Coming soon... thank you for visiting</h3>
          )}></Route>
        </Switch>
        </div>
    </BrowserRouter>
   </MyProvider>
    
    </>
  );
}


export default App;
