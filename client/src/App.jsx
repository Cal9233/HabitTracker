import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import Account from './Pages/Account';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppContextProvider } from './Context/AppContext';
import WithNav from './Components/WithNav';
import WithOutNav from './Components/WithOutNav';
import './App.css';
import SignUp from './Pages/SignUp';

function App() {
  
  return (
    <AppContextProvider>
      <BrowserRouter>
          <Routes>
            <Route element={<WithOutNav />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/SignUp" element={<SignUp />}/>
            </Route >
            <Route element={<WithNav />}>
              <Route path="/Home" element={<HomePage />} />
              <Route path="/Account" element={<Account />} />
            </Route>  
          </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
