import React from 'react';
import '../index.css';

const Container = () => {
    return (
        <div className='hero'>
            <div className="row">
                <h2 style={{color: 'white', textAlign: 'center', marginTop: '82px'}}>Full Stack Developer</h2>
                <div className='foto'>
                   <img src="./image/fotoKu.jpg" alt="Hario" className='gambar'/>
                </div>
                <h3 className='nama'>Hario Soedirman</h3>
                <button type='submit' className="button">Kunjungi</button>

            </div>
        </div>
    )
}

export default Container;