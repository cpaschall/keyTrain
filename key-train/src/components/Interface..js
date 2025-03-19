import './Interface.css';
import { useState } from 'react';

export default function Interface() {
    // const [activeLtr, setActiveLtr] = useState('inactive');

    // set active letters which will later be used to determine which words to be disply that contain only active letters
    const activeLtrs = (e) => {
        e.preventDefault();
        let currentStatus = e.target.attributes.datachoice;
        if (currentStatus.textContent === 'inactive') {
            currentStatus.textContent = 'active'
        } else if (currentStatus.textContent === 'active') {    
            currentStatus.textContent = 'inactive'
        }
    }

    return (
        <div className='interfaceCont'>
            <div className='interfaceSubCont'>
                <p>WPM</p>
            </div>
            <div className='interfaceSubCont'>
                <p>Accuracy</p>
            </div>
            <div id='ltrCont'>
                <p>Letters</p>
                <div className='interfaceSubCont' onClick={activeLtrs}>
                    <span className='ltrChoice' datachoice='inactive'>Q</span>
                    <span className='ltrChoice' datachoice='inactive'>W</span>
                    <span className='ltrChoice' datachoice='inactive'>E</span>
                    <span className='ltrChoice' datachoice='inactive'>R</span>
                    <span className='ltrChoice' datachoice='inactive'>T</span>
                    <span className='ltrChoice' datachoice='inactive'>Y</span>
                    <span className='ltrChoice' datachoice='inactive'>U</span>
                    <span className='ltrChoice' datachoice='inactive'>I</span>
                    <span className='ltrChoice' datachoice='inactive'>O</span>
                    <span className='ltrChoice' datachoice='inactive'>P</span>
                {/* </div>
                <div className='interfaceSubCont'> */}
                    <span className='ltrChoice' datachoice='inactive'>A</span>
                    <span className='ltrChoice' datachoice='inactive'>S</span>
                    <span className='ltrChoice' datachoice='inactive'>D</span>
                    <span className='ltrChoice' datachoice='inactive'>F</span>
                    <span className='ltrChoice' datachoice='inactive'>G</span>
                    <span className='ltrChoice' datachoice='inactive'>H</span>
                    <span className='ltrChoice' datachoice='inactive'>J</span>
                    <span className='ltrChoice' datachoice='inactive'>K</span>
                    <span className='ltrChoice' datachoice='inactive'>L</span>
                {/* </div>
                <div className='interfaceSubCont'> */}
                    <span className='ltrChoice' datachoice='inactive'>Z</span>
                    <span className='ltrChoice' datachoice='inactive'>X</span>
                    <span className='ltrChoice' datachoice='inactive'>C</span>
                    <span className='ltrChoice' datachoice='inactive'>V</span>
                    <span className='ltrChoice' datachoice='inactive'>B</span>
                    <span className='ltrChoice' datachoice='inactive'>N</span>
                    <span className='ltrChoice' datachoice='inactive'>M</span>
                </div>
            </div>
        </div>
    )
}