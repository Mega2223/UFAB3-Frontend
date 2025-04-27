import UploadButton from "./components/uploadButton"
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";

const UploadXlsx: React.FC = () => {
    const navigate = useNavigate();
    return <Box>
            <Typography>
                Realize o import da sua carteira
            </Typography>
            <UploadButton/>
        </Box>
            
}

export default UploadXlsx;