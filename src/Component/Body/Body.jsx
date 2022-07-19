import React from 'react';
import '../index.css';

const Body = () => {
    return (
        <div>
            <h2 className="font">My Portfolio</h2>
            <hr />
            <h3 className="font">Biografi</h3>
            <div className="biografi">
                <p>
                    Halo perkenalkan nama saya Hario Soedirman, saat ini saya belajar di Eduwork melalui program ISA. keseharian saya belajar ngoding
                    dan membaca buku terkait dengan ilmu-ilmu yang baru guna menambah pemahaman saya terkait dalam dunia era globalisasi saat sekarang ini.
                    Saya menyukai suatu hal yang baru, dimana sesuatu itu memang benar-benar bermanfaat untuk diri sendiri maupun untuk orang lain.
                    saya memiliki impian menciptakan suatu karya yang dimana dari karya tersebut dapat membantu orang banyak, terkhusus untuk
                    dunia pendidikan untuk era corona saat ini.
                </p>
            </div>
            <div className='column'>
                <div style={{textAlign: 'center'}} className='skill'>
                    <h3 >Skill</h3>
                    <p>Microsot Office Word</p>
                    <p>Microsoft Office Excell</p>
                    <p>Microsoft Office Powerpoint</p>
                    <p>Adeobe Potoshop</p>
                    <p>Adobe Illustrator</p>
                    <p>CorelDraw</p>
                </div>
                <div style={{textAlign: 'center'}} className='friend'>
                    <h3 >My Close Friends</h3>
                    <p >
                        Saya memiliki beberapa teman dekat, yang mana <br />diantaranya adalah M. Arief, Adel, Fahmi, Tiwi, Iqbal, <br /> dan masih ada yang lainnya, yang tidak bisa disebutkan <br /> satu persatu`
                    </p>
                </div>
                <div style={{textAlign: 'center'}} className='other'>
                    <h3 >Other Skill</h3>
                    <p >Hukum</p>
                    <p >Managemen</p>
                </div>
            </div>

            <div className='form'>
                <h3>Contact Me</h3>
                <form className="data">
                    <label for="nama" className='label'>E-mail :</label><br/>
                    <input type="email" name="nama" id='name' placeholder='E-mail'/><br/>
                    <label for="message" className='label'>Message :</label><br/>
                    <textarea name="message" id="message" placeholder='Text' className='textArea'></textarea><br />
                    <input type="submit" className="submit"/>
                </form>
            </div>
            <div className="footer">
                Copyright &copy; 2022 - Hario Soedirman, S.H
            </div>
        </div>
    )
}

export default Body;