import { Button } from "@mui/material";
import { ChangeEvent, useRef } from "react";

export default function UploadButton() {
    const inputRef = useRef<HTMLInputElement>(null);
  
    const handleButtonClick = () => {
      inputRef.current?.click();
    };
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
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
        <Button variant="contained" onClick={handleButtonClick}>
          Upload de Arquivo
        </Button>
      </>
    );
  }