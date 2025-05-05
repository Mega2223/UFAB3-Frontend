import { Bottom, Header } from '../../App.tsx';
import '../../App.css';
import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import GraphicPizzaExemple from '../Home/components/graphics/GraphicPizzaExemple';
import PortfolioTable from '../Home/components/graphics/PortifolioTable';
import { api } from '../../api/index.ts';

import { useAtomValue } from 'jotai';
import { userTokenAtom } from '../../atoms';

import('./Dashboard.css');

type Asset = {
  id: number;
  ticker: string;
  name: string;
  pmed: string;
  pat: string;
  diff: string;
  var_hj: string;
  var_tot: string;
  pct_ac: string;
  na_cart: string;
};

function makeUpAssets(n: number) {
  const ret: Asset[] = [];
  for (let i = 0; i < n; i++) {
    const asset: Asset = {
      id: i,
      ticker: 'petr4',
      name: 'Petrobras',
      pmed: '---',
      pat: 't',
      diff: 'e',
      var_hj: 's',
      var_tot: 't',
      pct_ac: 'e',
      na_cart: 'ee',
    };
    ret[i] = asset;
  }
  return ret;
}

const stocks: Asset[] = makeUpAssets(5);

const fields = [
  'ticker',
  'name',
  'pmed',
  'pat',
  'diff',
  'var_hj',
  'var_tot',
  'pct_ac',
  'na_cart',
];
const fnames = [
  'Ticker',
  'Ativo',
  'Preço Médio',
  'Preço Atual',
  'Diferença',
  'Variação Hoje',
  'Variação Total',
  '% Em Ações',
  '% Na Carteira',
];

function genGridComponents() {
  const col: GridColDef[] = [];
  for (let i = 0; i < fields.length; i++) {
    col[i] = { field: fields[i], headerName: fnames[i], width: 120 };
  }
  return col;
}

const columns = genGridComponents();
const rows = stocks;
const paginationModel = { page: 0, pageSize: 5 };

export function GenTable() {
  return (
    <Paper sx={{ height: '60vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

interface DashboardResponse {
  earnings: {
    _sum: {
      totalValue: string;
    };
    assetId: number;
    asset: {
      category: string;
      id: number;
      name: string;
      ticker: string;
    };
  }[];
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const userToken = useAtomValue(userTokenAtom);

  const [earnings, setEarnings] = useState<
    DashboardResponse['earnings'] | null
  >(null);

  useEffect(() => {
    const exec = async () => {
      const response = await api.get<DashboardResponse>('/dashboard', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      const { earnings } = response.data;
      setEarnings(earnings);
    };

    exec();
  }, [userToken]);

  const handleClickIr = () => {
    navigate('/ir');
  };
  return (
    <>
      {' '}
      {Header()}
      <div className="tela-dashboard">
        <div className="dashboard-inside">
          <h1>DASHBOARD</h1>
          <div>
            <h2 className="title">POSIÇÃO NA CARTEIRA</h2>
            <div className="part">
              {/*<div className="chart">*/}
              {/*    <VictoryPie*/}
              {/*        innerRadius={50}*/}
              {/*        data={[*/}
              {/*            //TODO já sabe né*/}
              {/*            {x: "A", y: 35},*/}
              {/*            {x: "B", y: 40},*/}
              {/*            {x: "C", y: 55},*/}
              {/*            {x: "D", y: 61},*/}
              {/*            {x: "E", y: 23},*/}
              {/*            {x: "F", y: 90},*/}
              {/*        ]}*/}
              {/*        theme={VictoryTheme.clean}*/}
              {/*    />*/}
              {/*</div>*/}
              <Box alignContent="center">
                <Typography
                  variant="h3"
                  sx={{ color: 'black' }}
                  alignContent="center"
                  textAlign="center"
                >
                  Visualize sua carteira
                </Typography>
                <GraphicPizzaExemple />
              </Box>
            </div>
          </div>
          <div>
            <h2 className="title">POSIÇÃO POR ATIVO</h2>
            <div className="part">{GenTable()}</div>
          </div>
          <div>
            <h2 className="title">POSIÇÃO DETALHADA</h2>
            <div className="part">{GenTable()}</div>
            {earnings && (
              <Box
                sx={{
                  padding: '8px',
                  marginBottom: '16px',
                }}
              >
                <h2 className="title">PROVENTOS POR ATIVO</h2>
                <p>Valor total recebido de cada ativo</p>
                <div className="table">
                  {earnings.map((earning) => (
                    <div
                      key={earning.assetId}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        padding: '8px',
                      }}
                    >
                      <p style={{ flex: 1 }}>{earning.asset.ticker}</p>
                      <p>
                        R${' '}
                        {Number(earning._sum.totalValue)
                          .toFixed(2)
                          .replace('.', ',')}
                      </p>
                    </div>
                  ))}
                </div>
              </Box>
            )}
          </div>
          <div>
            <button onClick={handleClickIr}>Calcule seu IR</button>
          </div>
        </div>
      </div>
      {<div className="bottom-alt">{Bottom()}</div>}
    </>
  );
};

export default Dashboard;
