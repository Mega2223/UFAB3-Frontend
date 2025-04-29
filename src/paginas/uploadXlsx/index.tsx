import UploadButton from './components/uploadButton';
import { useNavigate } from 'react-router';
import { Box, Toolbar, Typography } from '@mui/material';
import { Bottom, Header } from '../../App';
import './Upload.css';

const UploadXlsx: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="upload">
        <Toolbar />
        <Box
          display="flex"
          flexDirection="column"
          gap={10}
          alignItems="center"
          justifyContent="center"
          marginTop="50px"
          minHeight="100vh"
          sx={{
            backgroundColor: 'white',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#dedede',
              padding: '20px',
              borderRadius: '8px',
              ':hover': {
                backgroundColor: '#c0c0c0',
                cursor: 'pointer',
              },
            }}
            onClick={() => {
              navigate('/dashboard');
            }}
          >
            <Typography variant="h4" sx={{ color: 'black' }}>
              Acessar o Dashboard
            </Typography>
          </Box>
          <Box alignContent="center">
            <Typography variant="h2" sx={{ color: 'black' }}>
              Realize o upload das transações
            </Typography>
            <Typography variant="h5" marginTop="10px" sx={{ color: 'black' }}>
              Extraia as transações do portal de investidor da B3
            </Typography>

            <UploadButton />
          </Box>

          <Box alignContent="center">
            <Typography variant="h3" sx={{ color: 'black' }}>
              Não sabe como extrair? Veja o Tutorial:
            </Typography>
          </Box>

          <Box
            sx={{
              width: '50%',
              height: '300px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px dashed #888',
              borderRadius: '8px',
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Vídeo em breve
            </Typography>
          </Box>
        </Box>
      </div>
      <div className="upload-bottom">
        <Bottom />
      </div>
    </>
  );
};

export default UploadXlsx;
