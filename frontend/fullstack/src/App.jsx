
import { Outlet } from 'react-router'
import './App.css'

function App() {


  return (
   <div>

    <main className='min-h-screen max-w-screen-2xl mx-auto'>
  <Outlet/>
    </main>

    </div>
      
       
  )
}

export default App
