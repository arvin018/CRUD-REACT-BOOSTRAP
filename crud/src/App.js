import "./App.css";
import Sidebar from "./components/sidebar.js";
import Header from "./components/header.js";
import Content from "./components/content.js";
import Footer from "./components/footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div class="row">
          <div class="col-1">
            <Sidebar />
          </div>
          <div class="col-11">
            <Header />
            <Content />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
