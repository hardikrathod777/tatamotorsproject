import './App.css'
import { Routes , Route} from 'react-router-dom'
import Homecont from'./container/Home/Homecont'
import Digital from './component/Digital/Digital';

function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Homecont/>}/>
        <Route path="/digital-showroom" element={<Digital />} />
      </Routes>
    </>
  )
}

export default App
