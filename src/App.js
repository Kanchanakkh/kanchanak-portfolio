import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Blog from "./Components/Pages/blog/blog"
import Resume from './Components/Pages/Resume/resume'
import Topbar from './Components/Navbar/topbar'
import Footer from './Components/Footer/footer'
import About from './Components/Pages/About/about'
import Contact from './Components/Pages/Contact/contact'
import Letuscode from './Components/Pages/Letuscode/letuscode'
import Singlepost from './Components/Pages/Blog/singlePost'
import {MyProvider} from './Components/Context/index'
// import ParticleBackground from './Components/Background/particlebackground'



const App = () => {
  return (
    <>       

      <MyProvider>  
          {/* <ParticleBackground />  */}

        <BrowserRouter>
          <Topbar />
        
          <div style={{marginTop: '80px'}}>
            <Switch>
              <Route path="/blog/:slug" component={Singlepost}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route path="/resume" component={Resume}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/letuscode" component={Letuscode}></Route>
              <Route path="/kanchanak-portfolio" exact  component={About} ></Route>

              <Route render={() =>(
                <h3>Oops page not found!</h3>
              )}></Route>
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </MyProvider>
   
    </>
  );
}


export default App;
