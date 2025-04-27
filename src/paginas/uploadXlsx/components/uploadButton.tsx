import { Button, Typography, Box } from "@mui/material";
import { ChangeEvent, useRef } from "react";
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import axios from "axios";

export default function UploadButton() {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleUpload = async (file: File) => {
            const formData = new FormData();
            formData.append("file", file);
          
            const response = await axios.post("http://localhost:9001/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            console.log(response)
          };
  
    const handleButtonClick = () => {
      inputRef.current?.click();
    };
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      handleUpload(file)
      if (file) {
        console.log("Arquivo selecionado:", file.name);
      }
    };
  
    return (
      <>
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Box marginTop='10px' display='flex' alignItems='center' gap={2}>
            <Typography variant="h6" sx={{color: 'black'}}>Anexe aqui suas transações</Typography>
            <Button onClick={handleButtonClick}>
              <AssignmentAddIcon/>
            </Button>


        </Box>
           
        
      </>
    );
  }