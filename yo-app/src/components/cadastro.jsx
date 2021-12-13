import React from 'react';
import './styles/cadastro.css';

const cadastro = () => {
    return (
        <div>
            <div id='cadastro'> 
            <h1>YOAPP!</h1>
                <div id='login'>
                    <div id='inputs'>
                        <input class="input1" type="text" placeholder='sexo2@transa.com'/>
                        <input class="input1" type="text" placeholder='Password'/>
                        <button>LOGIN</button>
                        <p href="">Forgot your Password?</p>
                        <div id='btn1'>X</div>
                    </div>
                
                </div>

                <div id='singup'>
                    <div id='inputs'>
                        <input class="input2" type="text" placeholder='sexo2@transa.com'/>
                        <input class="input2" type="text" placeholder='Password'/>
                        <button>SING UP</button>
                        <div id='btn2'>X</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default cadastro;