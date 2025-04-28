import {Header} from "../../App.tsx";
import "../../App.css"
import {VictoryPie, VictoryTheme} from "victory";
import React from "react";
import {Paper} from "@mui/material";
import { DataGrid , GridColDef} from '@mui/x-data-grid';


import('./Dashboard.css');

type Asset = {
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

function makeUpAssets(n: number){
    const ret: Asset[] = []
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
            na_cart: 'ee'
        }
        ret[i] = asset;
    }
    return ret;
}

const stocks: Asset[] = makeUpAssets(5);

const fields = [
    'ticker','name','pmed','pat','diff','var_hj','var_tot','pct_ac','na_cart'
]
const fnames = [
    'Ticker','Ativo','Preço Médio','Preço Atual','Diferença','Variação Hoje','Variação Total','% Em Ações','% Na Carteira'
]

function genGridComponents(){
    const col: GridColDef[] = []
    for (let i = 0; i < fields.length; i++) {
        col[i] = {field: fields[i], headerName: fnames[i], width: 120}
    }
    return col;
}

const columns = genGridComponents();
const rows = stocks;
const paginationModel = { page: 0, pageSize: 5 };

export function GenTable(){
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

const Dashboard: React.FC = () => {
    // const navigate = useNavigate();

    return (
        <>  {Header()}
            <div className="tela-dashboard">
                <div className="dashboard-inside">
                    <h1>DASHBOARD</h1>
                    <div>
                        <h2 className="title">POSIÇÃO NA CARTEIRA</h2>
                        <div className="part">
                            <div className="chart">
                                <VictoryPie
                                    innerRadius={50}
                                    data={[
                                        //TODO já sabe né
                                        {x: "A", y: 35},
                                        {x: "B", y: 40},
                                        {x: "C", y: 55},
                                        {x: "D", y: 61},
                                        {x: "E", y: 23},
                                        {x: "F", y: 90},
                                    ]}
                                    theme={VictoryTheme.clean}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="title">POSIÇÃO POR ATIVO</h2>
                        <div className="part">
                            {GenTable()}
                        </div>
                    </div>
                    <div>
                        <h2 className="title">POSIÇÃO DETALHADA</h2>
                        <div className="part">
                            {/*{GenTable()}*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*{Bottom()}*/}
        </>
    );
};

export default Dashboard;
