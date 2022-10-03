import { Dashboard } from "./pages";
import { Sidebar } from "./components";

function App() {
  return (
    <main className="bg-white flex max-w-[1440px] min-h-screen">
      <Sidebar />
      <Dashboard />
    </main>
  );
}

export default App;
