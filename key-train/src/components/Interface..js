import './Interface.css';
import { useState } from 'react';

export default function Interface() {
    const [ltrChoices, setLtrChoices] = useState([]);

    // set active letters which will later be used to determine which words to be disply that contain only active letters
    let allLtrs = [];
    // setLtrChoices(allLtrs)
    const activeLtrs = (e) => {
        e.preventDefault();
        let tempAllLtrs = [...allLtrs];
        let currentLtr = e.target.textContent
        let currentStatus = e.target.attributes.datachoice;
        if (currentStatus.textContent === 'inactive') {
            currentStatus.textContent = 'active';
            allLtrs.push(currentLtr)
            // setLtrChoices(allLtrs)
            // console.log(allLtrs);
        } else if (currentStatus.textContent === 'active') {    
            currentStatus.textContent = 'inactive';
            for (let i = 0; i<allLtrs.length; i++){
                if(allLtrs[i] === currentLtr) {
                    allLtrs.splice(i, 1);
                }
            }
        }
        console.log(`allLtrs array: ${allLtrs}`)
        console.log(`tempAllLtrs array: ${tempAllLtrs}`)
        console.log(`useState: ${ltrChoices}`)
        // setLtrChoices(tempAllLtrs)
    }

    // const submitLtrs = () => {
    //     setLtrChoices(allLtrs)
    // }

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
                <div>
                    {ltrChoices}
                    {/* <button id='ltrBtn' onClick={submitLtrs}>Confirm</button> */}
                </div>
            </div>
        </div>
    )
}