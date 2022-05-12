import Header from './components/Header';
import NavBar from './components/NavBar';
import AppProvider from './contexts/providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="h-screen w-screen bg-slate-800 text-gray-200">
        <Header />
        <NavBar />
      </div>
    </AppProvider>
  );
}

export default App;
