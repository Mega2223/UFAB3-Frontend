import { Box, Typography } from '@mui/material';
import { Header, Bottom } from '../../App';
import { FaRegCopy } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import './IrAsset.css';

import { useAtomValue } from 'jotai';
import { userTokenAtom } from '../../atoms';

type IrAsset = {
  avgPrice: number;
  cnpj: string;
  code: string;
  description: string;
  earnings: number;
  group: string;
  location: string;
  origin: string;
  positions: {
    value: number;
    year: number;
  }[];
  ticker: string;
  type: string;
};

const IrAsset: React.FC = () => {
  const { ticker } = useParams<{ ticker: string }>();

  const [irAsset, setIrAsset] = useState<IrAsset | null>(null);

  const userToken = useAtomValue(userTokenAtom);

  useEffect(() => {
    const exec = async () => {
      if (!ticker) return;

      const response = await api.get<IrAsset>(`/ir/${ticker}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      setIrAsset(response.data);
    };

    exec();
  }, [ticker, userToken]);

  const renderHeader = () => {
    return Header();
  };

  const Info = ({
    title,
    description,
    showCopyButton = false,
  }: {
    title: string;
    description: string;
    showCopyButton?: boolean;
  }) => {
    return (
      <Box>
        <Typography variant="h6" align="left" fontWeight={500}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Typography variant="body1" align="left">
            {description}
          </Typography>
          {showCopyButton && (
            <FaRegCopy
              style={{
                cursor: 'pointer',
                color: '#555',
                fontSize: '20px',
              }}
              onClick={() => {
                navigator.clipboard.writeText(description);
              }}
            />
          )}
        </Box>
      </Box>
    );
  };

  if (!irAsset) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          padding: '32px',
        }}
      >
        {renderHeader()}
        <Typography variant="h4" align="left" fontWeight="bold">
          Carregando...
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {renderHeader()}
      <Box
        className="ir-asset"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '32px',
            maxWidth: '1296px',
          }}
        >
          <Typography variant="h4" align="left" fontWeight="bold">
            {irAsset.ticker}
          </Typography>
          <Typography variant="body1" align="left">
            {irAsset.type} - PM em 31/12/2025: R$
            {irAsset.avgPrice.toFixed(2).replace('.', ',')}
          </Typography>
          <Typography variant="h5" align="left" fontWeight="bold">
            Bens e Direitos
          </Typography>

          <Info title="Grupo" description={irAsset.group} />
          <Info title="Código" description={irAsset.code} />
          <Info title="Localização (País)" description={irAsset.location} />
          <Info
            title="CNPJ do Fundo"
            description={irAsset.cnpj}
            showCopyButton
          />
          <Info
            title="Discriminação"
            description={irAsset.description}
            showCopyButton
          />

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
            <Info title="Negociados em Bolsa?" description="Sim" />
            <Info
              title="Código de Negociação"
              description={irAsset.ticker}
              showCopyButton
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
            <Info
              title={`Situação em 31/12/${irAsset.positions[0].year} (R$)`}
              description={`R$ ${irAsset.positions[0].value
                .toFixed(2)
                .replace('.', ',')}`}
              showCopyButton
            />
            <Info
              title={`Situação em 31/12/${irAsset.positions[1].year} (R$)`}
              description={`R$ ${irAsset.positions[1].value
                .toFixed(2)
                .replace('.', ',')}`}
              showCopyButton
            />
          </Box>

          <Typography variant="h5" align="left" fontWeight="bold">
            Rendimentos Isentos e Não Tributáveis
          </Typography>

          <Info title="Tipo de Rendimento" description="99 - Outros" />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
            <Info
              title="CPF/CNPJ da Fonte Pagadora"
              description={irAsset.cnpj}
              showCopyButton
            />
            <Info
              title="Nome da Fonte Pagadora"
              description={irAsset.origin}
              showCopyButton
            />
          </Box>

          <Info
            title="Descrição"
            description={irAsset.description}
            showCopyButton
          />

          <Info
            title={`Valor`}
            description={`R$ ${irAsset.earnings.toFixed(2).replace('.', ',')}`}
            showCopyButton
          />
        </Box>
      </Box>
      <div className="ir-asset-bottom">{Bottom()}</div>
    </>
  );
};

export default IrAsset;
