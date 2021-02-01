import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navbar from '../../Component/NavbarUser';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

function createData(ilmiah, indonesia) {
  return { ilmiah, indonesia};
}

const rows = [
  createData('Batagur baska', 'Tuntong'),
  createData('Caretta caretta', "Penyu tempayan"),
  createData('Carettochelys insculpta','Kura-kura Irian'),
  createData('Chelodina novaeguineae', 'Kura Irian leher panjang'),
  createData('Chitra indica','Labi-labi besar'),
  createData('Chlamydosaurus kingii','Soa payung'),
  createData('Chondropython viridis','Sanca hijau'),
  createData('Crocodylus novaeguineae','Buaya air tawar Irian'),
  createData('Crocodylus porosus','Buaya muara'),
  createData('Crocodylus siamensis','Buaya siam'),
  createData('Dermochelys coriacea','Penyu belimbing'),
  createData('Elseya novaeguineae','Kura Irian leher pendek'),
  createData('Eretmochelys imbricata','Penyu sisik'),
  createData('Gonychephalus dilophus','Bunglon sisir'),
  createData('Hydrasaurus amboinensis','Soa-soa, Biawak Ambon, Biawak pohon'),
  createData('Lepidochelys olivacea','Penyu ridel'),
  createData('Natator depressa','Penyu pipih'),
  createData('Orlitia borneensis','Kura-kura gading'),
  createData('Python molurus','Sanca bodo'),
  createData('Phyton timorensis','Sanca Timor'),
  createData('Tiliqua gigas','Kadal Panan'),
  createData('Tomistoma schlegelii Senyulong', 'Buaya sapit'),
  createData('Varanus borneensis','Biawak Kalimantan'),
  createData('Varanus gouldi','Biawak coklat'),
  createData('Varanus indicus','Biawak Maluku'),
  createData('Varanus komodoensis','Biawak komodo, Ora'),
  createData('Varanus nebulosus','Biawak abu-abu'),
  createData('Varanus prasinus','Biawak hijau'),
  createData('Varanus timorensis','Biawak Timor'),
  createData('Varanus togianus','Biawak Togian'),


];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div>
      <Navbar/>
    <div className="container">
    <br/>
    <br/>
    <h3>DAFTAR SATWA REPTILIA DILINDUNGI</h3>
    <br/>
    <br/>
      <div className="container">
      <p>
      Dalam lampiran Peraturan Pemerintah Nomor 7 tahun 1999 tentang Pengawetan Jenis Tumbuhan dan Satwa terdapat 31 jenis Reptilia dilindungi undang-undang antara Lain:
      </p>
      </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow> 
            <StyledTableCell>Nama Latin</StyledTableCell>
            <StyledTableCell>Nama Indonesia</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow> 
              <StyledTableCell>{row.ilmiah}</StyledTableCell>
              <StyledTableCell>{row.indonesia}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <br/>
    <div className="container">
    <div className="container">
    <h3>PERINGATAN</h3>
    <h4>dikutip dari Lampiran PP No. 7 tahun 1999</h4>
    </div>
    <br/>
    <ol>
      <li align="justify">Barangsiapa dengan Sengaja menangkap, melukai, membunuh, menyimpan, memiliki, memelihara, mengangkut, dan memperniagakan satwa yang dilindungi dalam keadaan hidup; (Pasal 21 ayat (2) huruf a), diancam dengan pidana penjara paling lama 5 (lima) tahun dan denda paling banyak Rp. 100.000.000,00 (seratus juta rupiah). (Pasal 40 ayat (2));</li>
      <li align="justify">Barang Siapa Dengan Sengaja menyimpan, memiliki, memelihara, mengangkut, dan memperniagakan satwa yang dilindungi dalam keadaan mati (Pasal 21 ayat (2) huruf b), diancam dengan pidana penjara paling lama 5 (lima) tahun dan denda paling banyak Rp. 100.000.000,00 (seratus juta rupiah). (Pasal 40 ayat (2));</li>
      <li align="justify">Dengan Sengaja memperniagakan, menyimpan atau memiliki kulit, tubuh, atau bagian-bagian lain satwa yang dilindungi atau barang-barang yang dibuat dari bagian-bagian tersebut atau mengeluarkannya dari suatu tempat di Indonesia ke tempat lain di dalam atau di luar Indonesia; (Pasal 21 ayat (2) huruf d), diancam dengan pidana penjara paling lama 5 (lima) tahun dan denda paling banyak Rp. 100.000.000,00 (seratus juta rupiah). (Pasal 40 ayat (2)); (Pasal 40 ayat (2)); (Undang-undang Nomor 5 Tahun 1990 tentang KSDAH dan Ekosistemnya)</li>
    </ol>  
    </div>
    </div>
    </div>
  );
}
