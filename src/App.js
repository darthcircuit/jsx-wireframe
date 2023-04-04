import Sidebar from "./Components/Sidebar"
import Footer from "./Components/Footer"
import Page from "./Components/Page"
import Header from "./Components/Header"
function App() {
  return (
    <div className="App">
      {/* <Greeting />
      <Counter /> */}

      <Sidebar />
      <div className="page">

      <Header />

      <Page />

      <Footer />
      
      </div>

    </div>
  );
}

export default App;
