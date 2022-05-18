import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AppProvider from './contexts/providers/AppProvider';
import Favorites from './pages/favorites';
import Home from './pages/home';
import Settings from './pages/settings';

function App() {
  return (
    <AppProvider>
      <div className="h-screen w-screen overflow-y-auto bg-slate-800 text-gray-200 px-4">
        <Header />
        <div
          className="flex flex-col
          sm:flex-row sm:justify-center"
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
