import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AppProvider from './contexts/providers/AppProvider';
import Home from './pages/home';

function App() {
  return (
    <AppProvider>
      <div className="h-screen w-screen overflow-y-auto bg-slate-800 text-gray-200 px-4">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
