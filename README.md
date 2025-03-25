# keyTrain
Keyboard Trainer


I have an array of letters that hen i click, changes their status to "active" or "inactive" based on current state.  I want to update an array using useState based on active components only then have only the items in that array display on screen.

To achieve this functionality using React's useState, you can follow these steps:
State Initialization: Create an array of letters and their active/inactive states.
Toggle Function: Create a function to toggle the active state of each letter when clicked.
Filtered Array: Use a filtered array to display only the active letters.

Here's a sample implementation:

import React, { useState } from 'react';

const LetterToggle = () => {
  // Step 1: Initialize the state with letters
  const [letters, setLetters] = useState([
    { letter: 'A', active: false },
    { letter: 'B', active: false },
    { letter: 'C', active: false },
    { letter: 'D', active: false },
  ]);

  // Step 2: Function to toggle the active state
  const toggleActive = (index) => {
    setLetters((prevLetters) =>
      prevLetters.map((item, i) =>
        i === index ? { ...item, active: !item.active } : item
      )
    );
  };

  // Step 3: Filter active letters for display
  const activeLetters = letters.filter(letter => letter.active);

  return (
    <div>
      <h1>Toggle Letters</h1>
      <div>
        {letters.map((item, index) => (
          <button key={index} onClick={() => toggleActive(index)}>
            {item.letter} - {item.active ? 'Active' : 'Inactive'}
          </button>
        ))}
      </div>
      <h2>Active Letters:</h2>
      <ul>
        {activeLetters.map((item, index) => (
          <li key={index}>{item.letter}</li>
        ))}
      </ul>
    </div>
  );
};

export default LetterToggle;

Explanation:

State Initialization: The letters state is initialized with an array of objects, each containing a letter and its active status.
Toggle Function: The toggleActive function updates the active status of the letter at the specified index.
Filtering Active Items: The activeLetters array is created by filtering the letters array to include only those with active: true.
Rendering: The component renders buttons for each letter and displays a list of active letters below.

You can use this structure to manage and display your letters based on their active state.
