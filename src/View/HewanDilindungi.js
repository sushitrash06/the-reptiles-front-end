import React from 'react';
import gambar1 from '../img/komodo.jpg';
import history from '../history';
import Link from 'react-bootstrap/NavLink';
import { Typography } from '@material-ui/core';

class About extends React.Component{
render(){
    const style1 ={
        margin: 'auto',
        width: "30%",
    };

    return(
    <div>
        <div id = "About-style">
            <br/>
            <h1 style= {{textAlign:'center'}}>Daftar Spesies Reptil Yang Dilindungi Indonesia</h1>
            <br/>
                <br/>
            <div>
            <img
            className = "Gambar1"
            style={{ width:"50%",marginLeft:"auto", marginRight:"auto" ,display:"block"}}
            src ={gambar1}
            alt ="gambar"
            align="center"
            >
            </img>
            <br/>
            </div>
            <p className="container" style={{textAlign:'center',fontSize:"25px"}}>Dalam lampiran Peraturan Pemerintah Nomor 7 tahun 1999 tentang Pengawetan Jenis Tumbuhan dan Satwa terdapat 31 jenis rReptilia dilindungi undang-undang antara Lain:
                <br/>
                <Typography><Link style={{color:"#523906"}} onClick={() => history.push('/DaftarDilindungiIndex')}><h2>Baca Selengkapnya</h2></Link></Typography>
            </p>
            
        </div>
        <br/>
        <br/> 
        <br/>
    </div>

    );
}

}
export default About;