import React from 'react';
import gambar1 from '../img/orang_sama_kadal.jpg';
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
            <h1 style= {{textAlign:'center'}}>Apa itu The Reptiles? </h1>
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
            <p className="container" style={{textAlign:'center',fontSize:"25px"}}> Beberapa orang yang mempunyai hobi mengoleksi suatu benda atau memelihara binatang seperti binatang berjenis reptile, juga tak luput dari aktifitas jual beli, akan tetapi tidak efektifnya dan sulitnya mencari wadah khusus untuk berjualan dan menemukan informasi-informasi mengenai hobi tersebut membuat sebagian orang harus bersusah payah untuk mencari kenalan atau forum khusus untuk menuangkan hobinya, tidak hanya untuk membeli atau menjual reptil, tetapi dapat mencari peralatan berserta informasi mengenai reptile tersebut.
            maka dari itu "The Reptiles" hadir untuk sarana penjualan reptil secara online yang akan memudahkan masyarakat yang memiliki hobi memelihara reptile untuk mencari informasi mengenai reptile serta menjual atau membeli reptile beserta keperluan peliharaannya seperti kandang dan lain sebagainya. Dengan begitu masyarakat yang memiliki hobi tersebut dapat dengan mudah mencari informasi tentang reptile dan toko-toko penjual reptile dan perlengkapannya
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