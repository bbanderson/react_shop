import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Products />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
