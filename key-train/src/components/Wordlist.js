import './Wordlist.css'
import { useState, createElement } from "react"
const lvl1Words = ['test1', 'test1', 'test3'];
const wordBoxEl = document.getElementById('wordBox2')

// Generate a list of words from a predefined array
export default function Wordlist({allWords}) {
    let [currentWords, setCurrentWords] = useState('');

    // loop through each word in lvl1words array and then nest a loop to add a span element to each letter of that word
    const renderWords = () => {
        let wordArr = []
        lvl1Words.map((word, wordIndex, wordArray) => {
            console.log(word)
            console.log(wordIndex)
            console.log(wordArray)
            for(let i = 0; i<word.length; i++){
                if(wordIndex === 0 && i === 0){
                    wordArr.push(createElement(
                        'span',
                        { className: 'singleLtr', dataset: 'active', key: Math.floor(Math.random() * 1000)},
                         word[i]
                    ))
                } else if(i !== word.length - 1) {
                    wordArr.push(createElement(
                        'span',
                        { className: 'singleLtr', dataset: 'inactive', key: Math.floor(Math.random() * 1000)},
                         word[i]
                    ))
                } else {
                    wordArr.push(createElement(
                        'span',
                        { className: 'singleLtr', dataset: 'inactive', key: Math.floor(Math.random() * 1000)},
                         word[i]
                    ));
                    wordArr.push(createElement(
                        'span',
                        { className: 'singleLtr', dataset: 'inactive', key: Math.floor(Math.random() * 1000)},
                         ' '
                    ));
                } 
            }
        })
        setCurrentWords(wordArr)
        return currentWords
    }

    // Clear all words from WordList display
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