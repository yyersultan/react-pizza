
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminRoutes } from "./components/Routes/AdminRoutes";
import { ClientRoutes } from "./components/Routes/ClientRoutes";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { setAuthAc, setUserDataAc } from "./store/actions/auth";
import { IUserData } from "./store/actions/types";


function App() {
  const{isAuth} = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if(isAuth){
      dispatch(setAuthAc(true));
      const userData = JSON.parse(localStorage.getItem('user') || '{}') as IUserData;
      dispatch(setUserDataAc(userData));
    }
  },[]);
  return (
    <div className="App">
      {!isAuth 
      ? <ClientRoutes /> 
      : <AdminRoutes />
      }
    </div>
  );
}

export default App;
