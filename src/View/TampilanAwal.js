import React from 'react';
import About from '../Component/About';
import Banner from '../Component/Banner';
import NavbarAwal from '../Component/NavbarAwal';
import HewanDilindungi from '../View/HewanDilindungi';
import TentangKami from '../Component/TentangKami';

export default function TampilanAwal(){
    return(
        <div>
            <NavbarAwal/>
            <Banner/>
            <TentangKami/>
            <About/>
            <HewanDilindungi/>
        </div>
    );
}

