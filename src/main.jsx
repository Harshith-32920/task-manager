import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendBaseTheme, extendTheme} from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'


export const theme=extendTheme({
  fonts:{
    body:"'Josefin Sans', sans-serif'",
  }
})

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
