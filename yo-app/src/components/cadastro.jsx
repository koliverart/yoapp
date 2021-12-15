import React from 'react';
import './styles/cadastro.css';
import PropTypes from 'prop-types';
//Jarvascript
let btn1 = document.getElementById("btn1");

const cadastro = ({ extend1, extend2 }) => {
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
                    </div>
                </div>


                <div id='bolas'>
                    <div id='btn1' onClick={extend1}>▲</div>
                    <div id='btn2' onClick={extend2}>▼</div>
                </div>

                <div id='singup'>
                    <div id='inputs'>
                        <input class="input2" type="text" placeholder='sexo2@transa.com'/>
                        <input class="input2" type="text" placeholder='Password'/>
                        <button>SING UP</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

cadastro.defaultProps = {
    extend1: ()=> {
        btn1.style.display = 'none';
    },
    extend2: ()=> {
        alert("hello");
    },
}

cadastro.propTypes = {
    extend1: PropTypes.func, 
    extend2: PropTypes.func,
}

export default cadastro;