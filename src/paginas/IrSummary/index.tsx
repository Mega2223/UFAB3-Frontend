import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

type Asset = {
  ticker: string;
  name: string;
};

const stocks: Asset[] = [
  {
    ticker: 'PETR4',
    name: 'Petrobras',
  },
  {
    ticker: 'VALE3',
    name: 'Vale S.A.',
  },
  {
    ticker: 'ITUB4',
    name: 'Itaú Unibanco',
  },
  {
    ticker: 'B3SA3',
    name: 'B3 S.A.',
  },
  {
    ticker: 'ABEV3',
    name: 'Ambev S.A.',
  },
];

const IrSummary: React.FC = () => {
  const navigate = useNavigate();

  const TableHeader = ({ title }: { title: string }) => (
    <Box sx={{ backgroundColor: '#d9d9d9', padding: '8px' }}>
      <Typography variant="h6" align="left" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );

  const TableRow = ({
    asset,
    rowIndex,
  }: {
    asset: Asset;
    rowIndex: number;
  }) => {
    const backgroundColor = rowIndex % 2 === 0 ? '#ffffff' : '#dedede';

    return (
      <Box
        sx={{
          backgroundColor,
          padding: '8px',
          ':hover': { cursor: 'pointer' },
        }}
      >
        <Typography variant="body1" align="left" fontWeight={400}>
          {asset.ticker} - {asset.name}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '32px',
        maxWidth: '1296px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h4" align="center">
        IRPF - Bens e Direitos & Rendimentos
      </Typography>
      <Typography variant="body1">
        A lista abaixo inclui ativos que devem ser declarados na seção de Bens e
        Direitos. Clique no ativo para ver todas as informações para as seções
        de Bens e Direitos, Rendimentos Isentos e Não Tributáveis, e Rendimentos
        Sujeitos à Tributação Exclusiva/Definitiva.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <TableHeader title="Ações" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {stocks.map((stock, index) => (
            <TableRow key={stock.ticker} asset={stock} rowIndex={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default IrSummary;
