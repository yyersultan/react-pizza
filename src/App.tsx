import { Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path={'/'} component ={Home} />
      <Route path={'/cart'} component={Cart}/>
      
    </div>
  );
}

export default App;
