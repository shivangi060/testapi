import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from './Page';
import Summ from './Summ';
import './App.css';

function App() {
  return (
    <>
     
     <BrowserRouter>
     
     
     <div className="container mt-2" style={{ marginTop: 40 }}>
       <Switch>
         <Route exact path="/page">
           <Page />
         </Route>
         <Route path="/summ">
           <Summ />
         </Route>
        
       </Switch>
       
     </div>
   
   </BrowserRouter>
    </>
  );
}

export default App;
