import Header from './components/Header';
import AppProvider from './contexts/providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="h-screen w-screen bg-slate-800 text-gray-200">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
