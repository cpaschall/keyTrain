import './Interface.css';
import { useState } from 'react';

export default function Interface() {

    const [letters, setLetters] = useState([
        {letter:'Q', active: false},
        {letter:'W', active: false},
        {letter:'E', active: false},
        {letter:'R', active: false},
        {letter:'T', active: false},
        {letter:'Y', active: false},
        {letter:'U', active: false},
        {letter:'I', active: false},
        {letter:'O', active: false},
        {letter:'P', active: false},
        {letter:'A', active: false},
        {letter:'S', active: false},
        {letter:'D', active: false},
        {letter:'F', active: false},
        {letter:'G', active: false},
        {letter:'H', active: false},
        {letter:'J', active: false},
        {letter:'K', active: false},
        {letter:'L', active: false},
        {letter:'Z', active: false},
        {letter:'X', active: false},
        {letter:'C', active: false},
        {letter:'V', active: false},
        {letter:'B', active: false},
        {letter:'N', active: false},
        {letter:'M', active: false}
    ]);

    // change active status when letter is clicked
    const toggleActive = (index) => {
        setLetters((prevLetters) => 
            prevLetters.map((item, i) =>
            i === index ? {...item, active: !item.active} : item)
            )
    };

    //filter active letters which will later be used to determine which words to be display that contain only active letters
    const activeLetters = letters.filter(letter => letter.active)

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
                <div className='interfaceSubCont'>
                    {letters.map((item, index) => (
                        <span className='ltrChoice' datachoice={item.active ? "active" : "inactive"} key={index} onClick={() => toggleActive(index)}>
                            {item.letter}
                        </span>
                    ))}
                </div>
                <div className='actvLtrs'>
                    {activeLetters.map((item, index) => (
                        <p key={index}>{item.letter}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}