import "./App.css";
import { ProjectRouter } from "./components/router/ProjectRouter";
import { Menu } from "./components/pages/header/Menu";
import { Banner } from "./components/pages/header/Banner";
import { Footer } from "./components/pages/footer/Footer";

function App() {
  return (
      <body>
        <Menu />
        <div className="row">
          <div className="col">
            <Banner />
            <ProjectRouter />
          </div>
        </div>
        <Footer />
      </body>
  );
}

export default App;
