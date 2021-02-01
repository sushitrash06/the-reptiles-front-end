import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/style';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import PropsTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffe775",
    color: "#52575d",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const styles = theme=>({
  table: {
    minWidth: 700,
  },
});

class OrderTerkirim extends React.Component{
    constructor(){
        super()
        this.state={
            row:[],
        }
    }
     componentDidMount(){
        const token = localStorage.getItem('usertoken')
        const decoded = jwt_decode(token)
        this.setState({
            Username: decoded.Username,
        })
        var header = new Headers();
        header.append("Content-Type","application/json");
            console.log(decoded.id_user)
        fetch(`http://23.97.55.83/be1/pesanan/penjual/${decoded.id_user}/status/diterima`,{
            method:"GET",
            header:header,
        })
        .then(res=> res.json())
        .then(
            (result)=>{
            this.setState({
                id_produk: this.state.id_produk,
                row: result,
                isLoaded: true
            });
        console.log(result)
        },
        (error) =>{
            this.setState((error));
            console.log(error)
        })
     }
render(){
  const {classes} = this.props
  const {row} = this.state;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">id_pesanan</StyledTableCell>
            <StyledTableCell align="right">Tanggal Order</StyledTableCell>
            <StyledTableCell align="right">Nama Pembeli</StyledTableCell>
            <StyledTableCell align="right">Pesanan</StyledTableCell>
            <StyledTableCell align="right">Total bayar</StyledTableCell>
            <StyledTableCell align="right">Jumlah Pesanan</StyledTableCell>
            <StyledTableCell align="right">Alamat Kirim</StyledTableCell>
            <StyledTableCell align="right">No Hp</StyledTableCell>
            <StyledTableCell align="right">Catatan</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map(rows => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{rows.id_pesanan}</StyledTableCell>
              <StyledTableCell align="right">{rows.Tgl_order}</StyledTableCell>
              <StyledTableCell align="right">{rows.Nama_pembeli}</StyledTableCell>
              <StyledTableCell align="right">{rows.pesanan}</StyledTableCell>
              <StyledTableCell align="right">{rows.Total_bayar}</StyledTableCell>
              <StyledTableCell align="right">{rows.jumlah_pesanan}</StyledTableCell>
              <StyledTableCell align="right">{rows.Alamat_kirim}</StyledTableCell>
              <StyledTableCell align="right">{rows.Nomer_hp}</StyledTableCell>
              <StyledTableCell align="right">{rows.Catatan}</StyledTableCell>
              <StyledTableCell align="right">{rows.Status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}
OrderTerkirim.PropsTypes={
    classes: PropsTypes.object.isRequired,
};
export default withStyles(styles)(OrderTerkirim);