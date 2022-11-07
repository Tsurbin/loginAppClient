
//  import React from 'react';
//  import {PropTypes} from 'prop-types';
// //  import {Router, Route} from 'react-router';
// //  import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
//  import App from './App';
//  import SignUp from './components/signup/SignUp';
//  import Login from './components/login/Login';

 
//  class Routes extends React.Component {
 
//    constructor(props, context) {
//      super(props, context);
//      this.routes = this.routes.bind(this);
//      this.getRoute = this.getRoute.bind(this);
//    }
 
//    routes() {
//        return this.getRoute();
//    }
 
//    regularResolution() {
//      const regularResolution =
//        (
//          <Route>
//             <Route path="/" component={App}>
//                 <Route path="/SignUp" component={SignUp}/>
//             </Route>
//          </Route>
//        );
//      return regularResolution;
//    }
 
//    render() {
//      return (
//         <Router routes={this.getRoute()}/>  
//      );
//    }

//    getRoute() {
//       const allRoutes = (
//         <Switch>
//             <Route>
//               <Route path='/' component={App}>
//                   <Route path="/SignUp"><SignUp/></Route>
//                   <Route path="/"/><Login/><Route/>
//               </Route>
//             </Route>
//         </Switch>
        
            
//       );
//       return allRoutes;
//    }
//  }
 
// // history={this.props.history}

//  Routes.propTypes = {
//    history: PropTypes.object
//  };
 
//  export default Routes;

 