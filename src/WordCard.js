import React from "react";
import CharacterCard from "./CharacterCard";
import * as _ from "lodash";
import { useState } from "react";

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase();
  let chars = _.shuffle(Array.from(word));
  return {
    word,
    chars,
    attempt: 1,
    guess: "",
    completed: false,
  };
};

const WordCard = ({ value }) => {
  const [state, setState] = useState(prepareStateFromWord(value));
  const [text, setText] = useState("");

  const activationHandler = (c) => {
    console.log(`${c} has been activated.`);

    let guess = state.guess + c;
    setState({ ...state, guess });

    if (guess.length === state.word.length) {
      if (guess === state.word) {
        setText("Congratulations!!");
        setState({ ...state, guess: "", completed: true });

      } else {
        setText("Too Bad let try again");
        setState({
          ...state,guess: "",attempt: state.attempt + 1});
      }
    }
  };

  return (
    <div>
        {state.completed ? (
        <h1
          style={{ color: "green", textTransform: "uppercase", opacity: "2" }}
        >
          {text}
        </h1>
      ) : (
        <h1
          style={{ color: "red", textTransform: "uppercase", opacity: "2" }}
        >
          {text}
        </h1>
      )}
        {state.chars.map((c, i) => (
        <CharacterCard
          value={c}
          key={i}
          activationHandler={activationHandler}
          attempt={state.attempt}
        />
      ))}
      
    </div>
  );
};

export default WordCard;