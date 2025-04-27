import UploadButton from "./components/uploadButton"
import { useNavigate } from "react-router";
import { Box, Typography, Toolbar } from "@mui/material";
import { Header } from "../../App";


const UploadXlsx: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header/>
                <Toolbar/>

                <Box
                    display='flex'
                    flexDirection='column'
                    gap={10}
                    alignItems="center"
                    justifyContent="center"
                    marginTop='50px'
                    minHeight='100vh'
                    sx={{
                        backgroundColor: 'white'
                    }}
                >
                    <Box
                        alignContent='center'
                    >
                        <Typography variant="h2" sx={{color: 'black'}}>
                            Realize o upload das transações
                        </Typography>
                        <Typography variant="h5" marginTop='10px' sx={{color: 'black'}}>
                            Extraia as transações do portal de investidor da B3
                        </Typography>

                        <UploadButton/>

                    </Box>

                    <Box
                        alignContent='center'
                    >
                        <Typography variant="h3" sx={{color: 'black'}}>
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
        </>

    )
            
            
}

export default UploadXlsx;