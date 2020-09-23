import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';



class App extends Component {
  render() {
    return (
      <Router>
        <AppWithRouterAccess />
      </Router>
    );
  }
}

  
export default App;
















//last used
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
// import Navbar from './components/Nav';
// import Home from './pages/Home';
// import Recipes from './pages/Recipes';
// import Login from './pages/Login';

// import './App.css';

// function onAuthRequired({ history }) {
//   history.push('./pages/login');
// }

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Security
//           issuer="https://dev-409495.oktapreview.com/oauth2/default"
//           client_id="0oafhkg1yupTnPW9z0h7"
//           redirect_uri={window.location.origin + '/implicit/callback'}
//           onAuthRequired={onAuthRequired}
//         >
//           <div className="App">
//             <Navbar />
//             <div className="container">
//               <Route path="/" exact={true} component={Home} />
//               <SecureRoute path="/Recipes" exact={true} component={Recipes} />
//               <Route
//                 path="/login"
//                 render={() => (
//                   <Login baseUrl="https://dev-409495.oktapreview.com" />
//                 )}
//               />
//               <Route path="/implicit/callback" component={ImplicitCallback} />
//             </div>
//           </div>
//         </Security>
//       </Router>
//     );
//   }
// }

// export default withRouter(App);


















// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import stylesheets from './components/styles';
// import Axios from 'axios'
// function App() {
//   const url =  'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';
//   const APP_ID = "1b660772";
//   const YOUR_APP_KEY =
//   "8b4a7a21e724774796e8f3be6a73493d";
//   const getData =  async ()=> {
//     const result = await Axios.get(url);
//     console.log(result)
//   }


// import stylesheets from './components/styles';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         {/* <Security issuer='https://dev-590220.okta.com/oauth2/default'
//           clientId='0oa10lk5s61UBUzGH4x7'
//           redirectUri={window.location.origin + '/implicit/callback'}
//           onAuthRequired={onAuthRequired} > */}
//         {/* <Route path='/' exact={true} component={Home} />
//           <Route path='/Recipes' component={Recipes} />
//           <Route path='/login' render={() => <Login baseUrl='https://dev-590220.okta.com' />} />
//           <Route path='/implicit/callback' component={LoginCallback} />
//           <div>
//             <Nav />
//             <Header />
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/login" component={Login} />
//               <Route path="/signup" component={SignUp} />
//               <Route path="/recipes" component={Recipes} />
//             </Switch>
//             <Contacts />
//           </div> */}
//         <div className="App">
//           <Nav />
//           <div className="container">
//             <Route path="/" exact={true} component={Home} />
//             <SecureRoute path="/Recipes" exact={true} component={Recipes} />
//             <Route
//               path="/login"
//               render={() => (
//                 <Login baseUrl="https://dev-590220.okta.com" />
//               )}
//             />
//             <Route path="/implicit/callback" component={LoginCallback} />
//           </div>
//         </div>
//         </Security>
//       </Router >
//     );
//   }
// }


///sdlkjhgjh
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Security
//           issuer="https://dev-409495.oktapreview.com/oauth2/default"
//           client_id="0oafhkg1yupTnPW9z0h7"
//           redirect_uri={window.location.origin + '/implicit/callback'}
//           onAuthRequired={onAuthRequired}
//         >
//           <div className="App">
//             <Nav />
//             <div className="container">
//               <Route path="/" exact={true} component={Home} />
//               <SecureRoute path="/Recipesf" exact={true} component={Recipes} />
//               <Route
//                 path="/login"
//                 render={() => (
//                   <Login baseUrl="https://dev-409495.oktapreview.com" />
//                 )}
//               />
//               <Route path="/implicit/callback" component={ImplicitCallback} />
//             </div>
//           </div>
//         </Security>
//       </Router>
//     );
//   }
// }

// export default App;


