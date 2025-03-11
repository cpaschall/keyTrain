import { useState, createElement } from "react"
const lvl1Words = ['test1', 'test2', 'test3'];
const wordBoxEl = document.getElementById('wordBox2')

export default function Wordlist() {
    let [currentWords, setCurrentWords] = useState('');

    const renderWords = () => {
        let wordArr = []
        for(let i = 0; i < lvl1Words.length; i++){
            wordArr.push(createElement(
                'span',
                { className: 'tester' },
                lvl1Words[i], ' '
            ))
        }   
        setCurrentWords(wordArr)
        return currentWords
    }

    const clearWords = () => {
        setCurrentWords('')
    }

    return (
        <section className="practiceWords">
                <div id="wordBox2">            
                    {currentWords}
                </div>
                <div>
                    <button 
                    id="genWords2"
                    onClick={renderWords}
                    >Click Me</button>
                    <button onClick={(clearWords)}>Clear</button>
                </div>
        </section> 
    )
//    ternary expression
    // return words !== '' ? (
    //     <section className="practiceWords">
    //             <div id="wordBox2">            
    //                 {words.forEach(word => {
    //                 return (
    //                     <p>word</p>
    //                 )
    //                })}
    //             </div>
    //             <div>
    //                 <button 
    //                 id="genWords2"
    //                 onClick={renderWords}
    //                 >Click Me</button>
    //                 <button onClick={(clearWords)}>Clear</button>
    //             </div>
    //     </section> 
    // ) :
    // (
    //     <section className="practiceWords">
    //             <div id="wordBox2">            
                    
    //             </div>
    //             <div>
    //                 <button 
    //                 id="genWords2"
    //                 onClick={renderWords}
    //                 >Click Me</button>
    //                 <button onClick={(clearWords)}>Clear</button>
    //             </div>
    //     </section> 
    // )
}