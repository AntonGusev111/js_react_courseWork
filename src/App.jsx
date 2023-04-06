import "./App.css";
import { ProjectRouter } from "./components/router/ProjectRouter";
import {Menu} from './components/componentselements/header/Menu'
import { Banner } from "./components/componentselements/header/Banner";
import { Footer } from "./components/componentselements/footer/Footer";

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
