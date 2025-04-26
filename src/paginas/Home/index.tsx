import { Box, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '16px 0',
          minWidth: '500px',
        }}
      >
        <Typography variant="h4" align="center">
          Home
        </Typography>
        <Link to="/ir">
          <Typography variant="h6" align="center">
            Ir para Resumo de IR
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
