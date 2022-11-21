import React from 'react';
import './CalculatorMain.css';

export default function CalculatorPage() {
    return (
        <div className='main'>
            <div className='outerContainer'>
                <div className='display'>
                    <h2></h2>
                </div>
                <div className='resultContainer'>
                    <input className='result'  type="text" />
                </div>
                <div className='buttonContainer' >
                    <div className='button' >
                        <p>C</p>
                        <p>7</p>
                        <p>4</p>
                        <p>1</p>
                        <p>%</p>
                    </div>
                    <div>
                        <p>/</p>
                        <p>8</p>
                        <p>5</p>
                        <p>2</p>
                        <p>0</p>
                    </div>
                    <div>
                        <p>*</p>
                        <p>9</p>
                        <p>6</p>
                        <p>3</p>
                        <p>4</p>
                    </div>
                    <div>
                        <p>Del</p>
                        <p>-</p>
                        <p>+</p>
                        <p className='equalTo' >=</p>
                    </div>
                </div>
            </div>
        </div>

    )
}