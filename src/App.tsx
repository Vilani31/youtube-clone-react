import { useState, useContext, useEffect } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Inscricao from "./pages/inscricao";
import { UserStorage, UserContext } from "./context/userContext";
import Login from "./pages/login";
import Register from "./pages/register";
import MeusVideos from "./pages/meus-videos";
import Search from "./pages/search";
import Watch from "./pages/watch";


function AppContent() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
  if (login && location.pathname === '/login') {
    navigate('/');
  }
}, [login]);

  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/register';

  return (
    <div className="App">

      {!isAuthPage && (
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}

      <div style={{ display: 'flex' }}>
        
        {!isAuthPage && <Menu openMenu={openMenu} />}

        <div style={{
          flex: 1,
          padding: isAuthPage ? '0' : '0 70px',
          overflow: 'hidden'
        }}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home openMenu={openMenu} />} />
            <Route path='/library' element={<Library />} />
            <Route path='/history' element={<History />} />
            <Route path='/inscricao' element={<Inscricao />} />
            <Route path='/login' element={<Login />} />
            <Route path="/meus-videos" element={<MeusVideos />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watch/:id" element={<Watch />} />
            
            
          </Routes>
        </div>

      </div>
    </div>
  );
}


function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </UserStorage>
  );
  
}

export default App;