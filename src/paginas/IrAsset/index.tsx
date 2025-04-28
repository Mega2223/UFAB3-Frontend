import {Box, Typography} from '@mui/material';
import {useNavigate} from 'react-router';
import {Bottom, Header} from '../../App';
import {FaRegCopy} from 'react-icons/fa6';
import './IrAsset.css'

const irAsset = {
  ticker: 'MXRF11',
  type: 'FII',
  avgPrice: 10.05,
  group: '07  - Fundos',
  code: '03 - Fundos de Investimento Imobiliário',
  location: '105 - Brasil',
  cnpj: '00.000.000/0001-00',
  description: '20 cotas do FII de código MXRF11',
  positions: [
    {
      year: 2024,
      value: 2000.47,
    },
    {
      year: 2025,
      value: 3000.32,
    },
  ],
  origin: 'Maxi Renda Fundo de Investimento Imobiliário',
  earnings: 200.54,
};

const IrAsset: React.FC = () => {
  const navigate = useNavigate();

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

  return <>
    {Header()}
    <Box className = "ir-asset"
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
          {irAsset.avgPrice.toString().padEnd(2, '0').replace('.', ',')}
        </Typography>
        <Typography variant="h5" align="left" fontWeight="bold">
          Bens e Direitos
        </Typography>

        <Info title="Grupo" description={irAsset.group}/>
        <Info title="Código" description={irAsset.code}/>
        <Info title="Localização (País)" description={irAsset.location}/>
        <Info title="CNPJ do Fundo" description={irAsset.cnpj} showCopyButton/>
        <Info
            title="Discriminação"
            description={irAsset.description}
            showCopyButton
        />

        <Box sx={{display: 'flex', flexDirection: 'row', gap: '32px'}}>
          <Info title="Negociados em Bolsa?" description="Sim"/>
          <Info
              title="Código de Negociação"
              description={irAsset.ticker}
              showCopyButton
          />
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'row', gap: '32px'}}>
          <Info
              title={`Situação em 31/12/${irAsset.positions[0].year} (R$)`}
              description={`R$ ${irAsset.positions[0].value
                  .toString()
                  .padEnd(2, '0')
                  .replace('.', ',')}`}
              showCopyButton
          />
          <Info
              title={`Situação em 31/12/${irAsset.positions[1].year} (R$)`}
              description={`R$ ${irAsset.positions[1].value
                  .toString()
                  .padEnd(2, '0')
                  .replace('.', ',')}`}
              showCopyButton
          />
        </Box>

        <Typography variant="h5" align="left" fontWeight="bold">
          Rendimentos Isentos e Não Tributáveis
        </Typography>

        <Info title="Tipo de Rendimento" description="99 - Outros"/>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '32px'}}>
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

        {/* TODO: Fix description */}
        <Info
            title="Descrição"
            description={irAsset.description}
            showCopyButton
        />

        <Info
            title={`Valor`}
            description={`R$ ${irAsset.earnings
                .toString()
                .padEnd(2, '0')
                .replace('.', ',')}`}
            showCopyButton
        />
      </Box>
    </Box>
    <div className="ir-asset-bottom">
      {Bottom()}
    </div>
  </>;
};

export default IrAsset;
