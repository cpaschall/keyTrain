import { useState, createElement } from "react"
const lvl1Words = ['test1', 'test2', 'test3'];
const wordBoxEl = document.getElementById('wordBox2')

export default function Wordlist() {
    let [currentWords, setCurrentWords] = useState('');

    const renderWords = () => {
        let wordArr = []
        // loop through each word in lvl1words array and then nest a loop to add a span element to each letter of that word
        lvl1Words.map((word) => {
            for(let i = 0; i<word.length; i++){
                if(i !== word.length - 1) {
                    wordArr.push(createElement(
                        'span',
                        { className: 'tester', key: Math.floor(Math.random() * 1000)},
                         word[i]
                    ))
                } else {
                    wordArr.push(createElement(
                        'span',
                        { className: 'tester', key: Math.floor(Math.random() * 1000)},
                         word[i], ' '
                    ))
                } 
            }
        })
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
}