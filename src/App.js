import "./App.css";
import Footer from "./companents/footer/footer";
import Header from "./companents/header/header";
import Main from "./companents/main/main";
function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
