import React from 'react';
import About from '../../Component/About';
import Banner from '../../Component/Banner';
import TentangKami from '../../Component/TentangKami';
import Navbar from '../../Component/NavbarUser';
import Hewan from '../Pembeli/Reptil';

export default function TampilanAwal(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <TentangKami/>
            <About/>
            <Hewan/>
        </div>
    );
}

