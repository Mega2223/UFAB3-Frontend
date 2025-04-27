import {Header} from "../../App.tsx";
import {Bottom} from "../../App.tsx";
import "../../App.css"
import {VictoryPie, VictoryTheme} from "victory";
import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

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

function genGridComponents(){
    const col: GridColDef[] = []
    for (let i = 0; i < fields.length; i++) {
        col[i] = {field: fields[i], headername: fields[i], width: 70}
    }
    return col;
}

const columns: GridColDef[] = genGridComponents();

const fields = [
    'Ticker','Name','Pmed','Pat','Diff','var_hj','var_tot','pct_ac','na_cart'
]

export function GenTable(){
    return (
        <>
        {/*<TableContainer>*/}
        {/*    <Table sx={{  }} aria-label="simple table">*/}
        {/*        <TableHead>*/}
        {/*            <TableRow>*/}
        {/*                <TableCell align="right">ticker</TableCell>*/}
        {/*                <TableCell align="right">name</TableCell>*/}
        {/*                <TableCell align="right">pmed</TableCell>*/}
        {/*                <TableCell align="right">pat</TableCell>*/}
        {/*                <TableCell align="right">diff</TableCell>*/}
        {/*                <TableCell align="right">var_hj</TableCell>*/}
        {/*                <TableCell align="right">var_tot</TableCell>*/}
        {/*                <TableCell align="right">pct_ac</TableCell>*/}
        {/*                <TableCell align="right">na_cart</TableCell>*/}
        {/*            </TableRow>*/}
        {/*        </TableHead>*/}
        {/*        <TableBody>*/}
        {/*            {stocks.map((row) => (*/}
        {/*                <TableRow*/}
        {/*                    key={row.name}*/}
        {/*                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
        {/*                >*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.ticker}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.name}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.pmed}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.pat}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.diff}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.var_hj}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.var_tot}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.pct_ac}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.na_cart}*/}
        {/*                    </TableCell>*/}

        {/*                </TableRow>*/}
        {/*            ))}*/}
        {/*        </TableBody>*/}
        {/*    </Table>*/}
        {/*</TableContainer>*/}
        </>
    )
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
                                    innerRadius={70}
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
                            <div className="chart">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*{Bottom()}*/}
        </>
    );
};

export default Dashboard;
