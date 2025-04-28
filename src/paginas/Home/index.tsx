import { Box, Typography, Toolbar } from '@mui/material';
import { useNavigate, Link } from 'react-router';
import { Header } from '../../App';
import GraphicPizzaExemple from './components/graphics/GraphicPizzaExemple';
import PortfolioTable from './components/graphics/PortifolioTable';
import { Bottom } from '../../App';


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
            <Header/>
                <Toolbar/>
                <Box
                   display="flex"
                   flexDirection="column"
                   gap={10}
                   alignItems="center"
                   justifyContent="flex-start"
                   marginTop="60px"
                   minHeight="100vh"
                   sx={{
                      backgroundColor: 'white',
                      paddingBottom: '20px',
                      paddingTop: '100px', 
                    }}
                >
                    <Box
                        alignContent='center'
                    >
                        <Typography variant="h2" sx={{color: 'black'}}>
                            Calcule seu imposto de renda
                        </Typography>
                        <Typography variant="h5" marginTop='10px' sx={{color: 'black'}}>
                        Através de nosso sistema conseguimos fazer uma análise de seus ativos, comparando com meses anteriores e ajudando a fazer a declaração de seu imposto de renda.
                        </Typography>

                    </Box>

                    <Box
                        alignContent='center'
                    >
                        <Typography variant="h3" sx={{color: 'black'}} alignContent='center' textAlign='center'>
                            Visualize sua carteira
                        </Typography>
                        <GraphicPizzaExemple/>

                    </Box>

                    <Box
                        alignContent='center'
                    >
                        <Typography variant="h3" sx={{color: 'black'}} alignContent='center' textAlign='center'>
                            Analise seu portifólio 
                        </Typography>
                        <PortfolioTable/>

                    </Box>
            
                </Box>
        </>
    
  );
};

export default Home;
