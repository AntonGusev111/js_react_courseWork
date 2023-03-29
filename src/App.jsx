import './App.css'
import ProjectRouters from './routers/ProjectRouters'
import Menu from './components/header/Menu'
import Banner from './components/header/Banner'
import Footer from './components/footer/Footer'


function App() {

  return (
  <>
  <body>
    <Menu />
    <div className='row'>
      <div className='col'>
        <Banner />
        <ProjectRouters />
      </div>
    </div>
    
    <Footer />
    </body>
  </>
    
  )
}

export default App


