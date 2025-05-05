import { Button, Typography, Box } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import axios from 'axios';
import { useNavigate } from 'react-router';

import { useAtomValue } from 'jotai';
import { userTokenAtom } from '../../../atoms';

export default function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userToken = useAtomValue(userTokenAtom);

  const handleUpload = async (file: File) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    setTimeout(() => {
      alert('Arquivo processado com sucesso!');
      navigate('/dashboard');
      setLoading(false);
    }, 3000);
    console.log(response);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      alert('Nenhum arquivo selecionado');
      return;
    }

    handleUpload(file);
    if (file) {
      console.log('Arquivo selecionado:', file.name);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Box marginTop="10px" display="flex" alignItems="center" gap={2}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          Anexe aqui suas transações
        </Typography>
        <Button onClick={handleButtonClick} disabled={loading}>
          <AssignmentAddIcon />
        </Button>
      </Box>
    </>
  );
}
