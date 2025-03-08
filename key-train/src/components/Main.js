import './Main.css'
import { useState, useEffect } from 'react'

export default function Main() {
    // let [key, setKey] = useState('');
    // useEffect used for 'keydown events.  https://stackoverflow.com/questions/61740073/how-to-detect-keydown-anywhere-on-page-in-a-react-app
    useEffect(() => {
        const keyDown = (e) => {
            let highlightKeyId = document.getElementById(e.code)
            e.preventDefault()
            // console.log(e)
            // console.log(`Key: ${e.key}`)
            // console.log(`Keycode: ${e.code}`)
            // console.log(`Which: ${e.which}`)
            if (highlightKeyId) {
            // console.log(highlightKeyId)
            highlightKeyId.style.backgroundColor='yellow';
            highlightKeyId.setAttribute('fill', 'yellow');
            } else {
                return
            }
        }

        const keyUp = (e) => {
            e.preventDefault();
            let highlightKeyId = document.getElementById(e.code);
            if (highlightKeyId) {
                highlightKeyId.style.backgroundColor='white';
                highlightKeyId.setAttribute('fill', 'white');
            } else {
                return
            }  
        }

        document.addEventListener('keydown', keyDown);
        document.addEventListener('keyup', keyUp);

        return function cleanUp() {
            document.removeEventListener('keydown', keyDown);
            document.removeEventListener('keyup', keyUp);
        }
    }, []);

    return (
        <div>
            <section className="practiceWords">
                <div id="wordBox2">
                    <span className="wordList2"> 
                        
                    </span>
                </div>
                <div>
                    <button 
                    id="genWords2"
                    >Click Me</button>
                </div>
            </section>  
            <section className="keyboardSec">
            {/* style={{marginRight: spacing + 'em'}} */}
                <svg className="testKeyboard" viewBox="0 0 540 200" height="25rem" style={{aspectRatio: "540 / 200"}}>
                    <rect x="0" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Backquote"></rect>
                    <text x="8" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">~</text>
                    <text x="18" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">`</text>
                    <rect x="36" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit1"></rect>
                    <text x="44" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">!</text>
                    <text x="54" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">1</text>
                    <rect x="72" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit2"></rect>
                    <text x="80" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">@</text>
                    <text x="90" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">2</text>
                    <rect x="108" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit3"></rect>
                    <text x="116" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">#</text>
                    <text x="126" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">3</text>
                    <rect x="144" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit4"></rect>
                    <text x="152" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">$</text>
                    <text x="162" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">4</text>
                    <rect x="180" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit5"></rect>
                    <text x="188" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">%</text>
                    <text x="198" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">5</text>
                    <rect x="216" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit6"></rect>
                    <text x="224" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">^</text>
                    <text x="234" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">6</text>
                    <rect x="252" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit7"></rect>
                    <text x="260" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">&</text>
                    <text x="270" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">7</text>
                    <rect x="288" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit8"></rect>
                    <text x="296" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">*</text>
                    <text x="306" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">8</text>
                    <rect x="324" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit9"></rect>
                    <text x="332" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">&#40;</text>
                    <text x="342" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">9</text>
                    <rect x="360" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Digit0"></rect>
                    <text x="368" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">&#41;</text>
                    <text x="378" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">0</text>
                    <rect x="396" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Minus"></rect>
                    <text x="404" y="3" textAnchor="middle" dominantBaseline="middle" direction="ltr">_</text>
                    <text x="414" y="20" textAnchor="middle" dominantBaseline="middle" direction="ltr">-</text>
                    <rect x="432" y="0" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Equal"></rect>
                    <text x="440" y="10" textAnchor="middle" dominantBaseline="middle" direction="ltr">+</text>
                    <text x="450" y="25" textAnchor="middle" dominantBaseline="middle" direction="ltr">=</text>
                    <rect x="468" y="0" width="70" height="35" rx="2" ry="2" fill="none" stroke="black" id="Backspace"></rect>
                    <text x="502" y="20" textAnchor="middle" dominantBaseline="middle" direction="ltr" fontSize="1.5em">&#10229;</text>
                    <rect x="0" y="36" width="52" height="35" rx="2" ry="2" fill="none" stroke="black" id="Tab"></rect>
                    <text x="22" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">TAB</text>
                    <rect x="53" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyQ"></rect>
                    <text x="70" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">Q</text>
                    <rect x="89" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyW"></rect>
                    <text x="106" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">W</text>
                    <rect x="125" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyE"></rect>
                    <text x="142" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">E</text>
                    <rect x="161" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyR"></rect>
                    <text x="178" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">R</text>
                    <rect x="197" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyT"></rect>
                    <text x="214" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">T</text>
                    <rect x="233" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyY"></rect>
                    <text x="250" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">Y</text>
                    <rect x="269" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyU"></rect>
                    <text x="286" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">U</text>
                    <rect x="305" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyI"></rect>
                    <text x="322" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">I</text>
                    <rect x="341" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyO"></rect>
                    <text x="358" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">O</text>
                    <rect x="377" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyP"></rect>
                    <text x="394" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">P</text>
                    <rect x="413" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="BracketLeft"></rect>
                    <text x="420" y="46" textAnchor="middle" dominantBaseline="middle" direction="ltr">&#123;</text>
                    <text x="430" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">[</text>
                    <rect x="449" y="36" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="BracketRight"></rect>
                    <text x="456" y="46" textAnchor="middle" dominantBaseline="middle" direction="ltr">&#125;</text>
                    <text x="466" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">]</text>
                    <rect x="485" y="36" width="53" height="35" rx="2" ry="2" fill="none" stroke="black" id="Backslash"></rect>
                    <text x="494" y="48" textAnchor="middle" dominantBaseline="middle" direction="ltr">|</text>
                    <text x="512" y="54" textAnchor="middle" dominantBaseline="middle" direction="ltr">\</text>
                    <rect x="0" y="72" width="60" height="35" rx="2" ry="2" fill="none" stroke="black" id="CapsLock"></rect>
                    <text x="23" y="85" textAnchor="middle" dominantBaseline="middle" direction="ltr">CAPS</text>
                    <text x="25" y="97" textAnchor="middle" dominantBaseline="middle" direction="ltr">LOCK</text>
                    <rect x="61" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyA"></rect>
                    <text x="78" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">A</text>
                    <rect x="97" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyS"></rect>
                    <text x="114" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">S</text>
                    <rect x="133" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyD"></rect>
                    <text x="150" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">D</text>
                    <rect x="169" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyF"></rect>
                    <text x="186" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">F</text>
                    <rect x="205" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyG"></rect>
                    <text x="222" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">G</text>
                    <rect x="241" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyH"></rect>
                    <text x="258" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">H</text>
                    <rect x="277" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyJ"></rect>
                    <text x="294" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">J</text>
                    <rect x="313" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyK"></rect>
                    <text x="330" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">K</text>
                    <rect x="349" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyL"></rect>
                    <text x="366" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">L</text>
                    <rect x="385" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Semicolon"></rect>
                    <text x="392" y="82" textAnchor="middle" dominantBaseline="middle" direction="ltr">:</text>
                    <text x="402" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">;</text>
                    <rect x="421" y="72" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Quote"></rect>
                    <text x="428" y="85" textAnchor="middle" dominantBaseline="middle" direction="ltr">"</text>
                    <text x="438" y="95" textAnchor="middle" dominantBaseline="middle" direction="ltr">'</text>
                    <rect x="457" y="72" width="81" height="35" rx="2" ry="2" fill="none" stroke="black" id="Enter"></rect>
                    <text x="500" y="90" textAnchor="middle" dominantBaseline="middle" direction="ltr">ENTER</text>
                    <rect x="0" y="108" width="84" height="35" rx="2" ry="2" fill="none" stroke="black" id="ShiftLeft"></rect>
                    <text x="40" y="127" textAnchor="middle" dominantBaseline="middle" direction="ltr">SHIFT</text>
                    <rect x="85" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyZ"></rect>
                    <text x="102" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">Z</text>
                    <rect x="121" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyX"></rect>
                    <text x="138" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">X</text>
                    <rect x="157" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyC"></rect>
                    <text x="174" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">C</text>
                    <rect x="193" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyV"></rect>
                    <text x="210" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">V</text>
                    <rect x="229" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyB"></rect>
                    <text x="246" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">B</text>
                    <rect x="265" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyN"></rect>
                    <text x="282" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">N</text>
                    <rect x="301" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="KeyM"></rect>
                    <text x="318" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">M</text>
                    <rect x="337" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Comma"></rect>
                    <text x="344" y="118" textAnchor="middle" dominantBaseline="middle" direction="ltr">&lt;</text>
                    <text x="354" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">,</text>
                    <rect x="373" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Period"></rect>
                    <text x="380" y="118" textAnchor="middle" dominantBaseline="middle" direction="ltr">&gt;</text>
                    <text x="390" y="126" textAnchor="middle" dominantBaseline="middle" direction="ltr">.</text>
                    <rect x="409" y="108" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="Slash"></rect>
                    <text x="416" y="118" textAnchor="middle" dominantBaseline="middle" direction="ltr">?</text>
                    <text x="426" y="130" textAnchor="middle" dominantBaseline="middle" direction="ltr">/</text>
                    <rect x="445" y="108" width="93" height="35" rx="2" ry="2" fill="none" stroke="black" id="ShiftRight"></rect>
                    <text x="491" y="127" textAnchor="middle" dominantBaseline="middle" direction="ltr">SHIFT</text>
                    <rect x="0" y="144" width="45" height="35" rx="2" ry="2" fill="none" stroke="black" id="ControlLeft"></rect>
                    <text x="22" y="162" textAnchor="middle" dominantBaseline="middle" direction="ltr">CTRL</text>
                    <rect x="46" y="144" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="AltLeft"></rect>
                    <text x="63" y="162" textAnchor="middle" dominantBaseline="middle" direction="ltr">ALT</text>
                    <rect x="82" y="144" width="374" height="35" rx="2" ry="2" fill="none" stroke="black" id="Space"></rect>
                    <text x="258" y="162" textAnchor="middle" dominantBaseline="middle" direction="ltr">SPACE</text>
                    <rect x="457" y="144" width="35" height="35" rx="2" ry="2" fill="none" stroke="black" id="AltRight"></rect>
                    <text x="474" y="162" textAnchor="middle" dominantBaseline="middle" direction="ltr">ALT</text>
                    <rect x="493" y="144" width="45" height="35" rx="2" ry="2" fill="none" stroke="black" id="ControlRight"></rect>
                    <text x="515" y="162" textAnchor="middle" dominantBaseline="middle" direction="ltr">CTRL</text>
                </svg>
            </section>
        </div>
    )
}