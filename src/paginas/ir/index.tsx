import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const IrSummary: React.FC = () => {
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
          Imposto de Renda
        </Typography>
      </Box>
    </Box>
  );
};

export default IrSummary;
