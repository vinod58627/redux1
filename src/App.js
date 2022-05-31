import React ,{ Fragment } from 'react'
import { BrowserRouter , Route ,  Switch } from 'react-router-dom'

//Redux Components
import Redux from './components/Redux'
import Red1 from './components/Red1'
import Red2 from './components/Red2'
import Rview from './redux/forms/rview'
import Rupdate from './redux/forms/rupdate'
import RsignUp from './redux/forms/rsignup'


import './../node_modules/bootstrap/dist/css/bootstrap.css'


import Header from './components/layout/header'
import Footer from './components/layout/Footer'
// Components main

import Home from './components/Home'
import About from './components/About'
import Life from  './components/life'
import TarCls from './components/target'
import TarFun from './components/taget1'
//import PG from './components/pg'

//Forms
import Login from './components/Login'

//hooks
import FormHooks from './components/FormHooks1'
import HView from './components/hooksforms/view'
import HUpdate from './components/hooksforms/upadtae'


//pagenation
import Pagination from './components/Pagination'
import Pager from './components/Pager/Pager'

//filter

import Filter from './components/filterid'

//form Handlings

import F1 from './components/f1'

//dropdown

import Dp from './components/Dp'


export default function App() {
  return (<Fragment>
  <BrowserRouter>
  <Header />


    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/about" component={About} />  
        <Route exact path="/life" component={Life} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/page" component={Pagination} /> 
        <Route exact path="/pager" component={Pager} />
        <Route exact path="/filterid" component={Filter} /> 
        <Route exact path="/tarcls" component={TarCls} />
        <Route exact path="/tarfun" component={TarFun} />

        {/* Form Hooks */}
        <Route exact path="/fhooks" component={FormHooks} />
        <Route exact path="/fhooks/view/:idno" component={HView} />
        <Route exact path="/fhooks/update/:idno" component={HUpdate} />

        {/* Form handlings */}
        <Route exact path="/f1" component={F1} />
        <Route exact path="/dp" component={Dp} />

          
        <Route exact path="/redux" component={Redux} />
        <Route exact path="/red1" component={Red1} />
        <Route exact path="/red2" component={Red2} />
        <Route exact path="/red2/rview/:idno" component={Rview} />
        <Route exact path="/red2/rupdate/:idno" component={Rupdate} />
        <Route exact path="/rsignup" component={RsignUp} />
          
      </Switch>
   
    
    
    <Footer />
    </BrowserRouter>
    </Fragment>)
}
