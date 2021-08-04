import Header from "./components/Header";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Products />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
