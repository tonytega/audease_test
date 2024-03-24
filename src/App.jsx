import {SignUpPage} from './SignUp/SignUpPage'
import {createTheme} from '@mui/material'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import { HomePage } from './Home/HomePage'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  const theme = createTheme({
    typography:{
      fontFamily:['Switzer']
    }
  })

  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
