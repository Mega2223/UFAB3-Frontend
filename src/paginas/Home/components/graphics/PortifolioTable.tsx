import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

interface Asset {
  ticker: string;
  name: string;
}

interface AssetData extends Asset {
  avgPrice: number; // Preço médio
  currentPrice: number; // Preço atual
  quantity: number; // Quantidade de ações ou FIIs
  patrimony: number; // Patrimônio
  variation: number; // Variação
  percentageInStocks: number; // % em ações
  percentageInPortfolio: number; // % na carteira
}

const assets: AssetData[] = [
  {
    ticker: 'PETR4',
    name: 'Petrobras',
    avgPrice: 28.5,
    currentPrice: 35.8,
    quantity: 200,
    patrimony: 7160,
    variation: 25.4,
    percentageInStocks: 40,
    percentageInPortfolio: 15,
  },
  {
    ticker: 'VALE3',
    name: 'Vale S.A.',
    avgPrice: 85.2,
    currentPrice: 95.3,
    quantity: 150,
    patrimony: 14295,
    variation: 11.9,
    percentageInStocks: 35,
    percentageInPortfolio: 25,
  },
  {
    ticker: 'ITUB4',
    name: 'Itaú Unibanco',
    avgPrice: 45.0,
    currentPrice: 50.3,
    quantity: 180,
    patrimony: 9054,
    variation: -12.2, // Variação negativa
    percentageInStocks: 30,
    percentageInPortfolio: 10,
  },
  {
    ticker: 'B3SA3',
    name: 'B3 S.A.',
    avgPrice: 13.5,
    currentPrice: 15.0,
    quantity: 220,
    patrimony: 3300,
    variation: 11.1,
    percentageInStocks: 50,
    percentageInPortfolio: 5,
  },
  {
    ticker: 'ABEV3',
    name: 'Ambev S.A.',
    avgPrice: 17.8,
    currentPrice: 19.5,
    quantity: 210,
    patrimony: 4095,
    variation: -9.5, // Variação negativa
    percentageInStocks: 40,
    percentageInPortfolio: 10,
  },
  {
    ticker: 'HGLG11',
    name: 'Ceará Logística',
    avgPrice: 150.0,
    currentPrice: 160.5,
    quantity: 50,
    patrimony: 8025,
    variation: 7.0,
    percentageInStocks: 20,
    percentageInPortfolio: 8,
  },
  {
    ticker: 'KNRI11',
    name: 'Kinea Renda Imobiliária',
    avgPrice: 110.0,
    currentPrice: 115.8,
    quantity: 60,
    patrimony: 6948,
    variation: -5.3, // Variação negativa
    percentageInStocks: 30,
    percentageInPortfolio: 7,
  },
  {
    ticker: 'MXRF11',
    name: 'Maxi Renda',
    avgPrice: 90.0,
    currentPrice: 95.0,
    quantity: 70,
    patrimony: 6650,
    variation: 5.6,
    percentageInStocks: 25,
    percentageInPortfolio: 5,
  },
  {
    ticker: 'VISC11',
    name: 'Vinci Shopping Centers',
    avgPrice: 120.0,
    currentPrice: 130.0,
    quantity: 40,
    patrimony: 5200,
    variation: 8.3,
    percentageInStocks: 15,
    percentageInPortfolio: 4,
  },
];

const PortfolioTable: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ativo</TableCell>
            <TableCell align="right">Preço Médio</TableCell>
            <TableCell align="right">Preço Atual</TableCell>
            <TableCell align="right">Diferença</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Patrimônio</TableCell>
            <TableCell align="right">Variação</TableCell>
            <TableCell align="right">% em Ações</TableCell>
            <TableCell align="right">% na Carteira</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.ticker}>
              <TableCell>
                {asset.name} ({asset.ticker})
              </TableCell>
              <TableCell align="right">{asset.avgPrice.toFixed(2)}</TableCell>
              <TableCell align="right">
                {asset.currentPrice.toFixed(2)}
              </TableCell>
              <TableCell align="right">
                <Typography
                  sx={{
                    color:
                      asset.currentPrice - asset.avgPrice < 0 ? 'red' : 'green',
                  }}
                >
                  {(asset.currentPrice - asset.avgPrice).toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell align="right">{asset.quantity}</TableCell>
              <TableCell align="right">{asset.patrimony.toFixed(2)}</TableCell>
              <TableCell align="right">
                <Typography
                  sx={{ color: asset.variation < 0 ? 'red' : 'green' }}
                >
                  {asset.variation.toFixed(2)}%
                </Typography>
              </TableCell>
              <TableCell align="right">{asset.percentageInStocks}%</TableCell>
              <TableCell align="right">
                {asset.percentageInPortfolio}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PortfolioTable;
