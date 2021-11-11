import './App.css';
import Users from './Users';
import Navbar from './Navbar';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
    console.log('Use effect is being used')
    fetch("http://localhost:3000/users").then((response) => {
      if(!response.ok){
        throw new Error('An error occurred while fetching  users. Please contact side admin.')
      }
      return response.json();
     }).then((response) => {
      setUsers(response);
      setIsLoading(false);
      setErrorMessage(null)
     }).catch((error) => {
     setErrorMessage(error.message);
     setIsLoading(false);
   });
  }, []);
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact  path="/">
              <div>
              Home page
              </div>
            </Route>
            <Route path="/users">
              {errMessage && <div>{errMessage}</div>}
              {isLoading && <div>Loading...</div>}
              {users && <Users users={users}/>}
            </Route>
            <Route exact path="/contact">
              <div>Contact Us page</div>
            </Route>
            <Route exact path="/about">
              <div>About Us page</div>
            </Route>
            <Route path="*">
              <div>Page not found. Go back to <Link to="/">Home page</Link></div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;