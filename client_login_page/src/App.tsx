import Main from './components/Main.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BgPng from './assets/images/bg-design 2.png';
import Footer from './components/Footer.tsx';


function App() {

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#00237D',
            backgroundImage: `url(${BgPng})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '300px',
            width: '100vw',
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Main/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
