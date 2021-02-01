import React from 'react';
import gambar1 from '../img/kadallucu.jpg';

class About extends React.Component{
render(){
    const style1 ={
        margin: 'auto',
        width: "30%",
    };

    return(
    <div>
        <div id = "About-style">
            <h1 style= {{textAlign:'center'}}>The Reptiles </h1>
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
            <p className="container" style={{textAlign:'center',fontSize:"25px"}}> Reptil (binatang melata, atau dalam bahasa Latin "reptans" artinya 'melata' atau 'merayap') adalah kelompok hewan vertebrata berdarah dingin dan memiliki sisik yang menutupi tubuhnya. Reptilia adalah tetrapoda (hewan dengan empat tungkai) dan menelurkan telur yang embrionya diselubungi oleh membran amniotik. Sekarang ini mereka menghidupi setiap benua kecuali Antartika.
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