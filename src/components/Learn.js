import React from 'react';
import levels from './levels';
import howToSit from '../assets/img/how-to-sit.png';
import keyboardScheme from '../assets/img/keyboard-scheme.png';

const Learn = props => {
  return (
    <div className="main-container">

      <h2>Learn how to touch type</h2>

      <section className="section">
        <p>
          Touch typing is all about the idea that each finger has its own area on the keyboard.
          Thanks to that fact you can type without looking at the keys.
          Practice regularly and your fingers will learn their location on the keyboard
          through muscle memory.
        </p>

        <img className="float-img" src={howToSit} alt=""/>

        <h3>
          Sitting posture for typing
        </h3>

        <p>
          Sit straight and remember to keep your back straight.
          Keep your elbows bent at the right angle.
          Face the screen with your head slightly tilted forward.
          Keep at least 45 - 70 cm of distance between your eyes and the screen.
          Еxpose the shoulder, arm, and wrist muscles to the least possible strain.
          The wrists can touch the tabletop in front of the keyboard.
          Never shift your body weight to the wrists by resting on them.
        </p>
        <hr/>

        <h3>
          Home row position
        </h3>

        <p>
          Curve your fingers a little and put them on the ASDF and JKL;
          keys which are located in the middle row of the letter keys.
          This row is called HOME ROW because you always start from these keys and
          always return to them.
          F and J keys under your index fingers should have a raised line on them to
          aide in finding these keys without looking.
        </p>
        <hr/>

        <h3>
          Кeyboard scheme
        </h3>

        <p>
          The color-coded keyboard under lesson input field will help you to understand
          which finger should press each key.</p>
          <ul>
            <li>
              Hit keys only with the fingers for which they have been reserved.
            </li>
            <li>
              Always return to the starting position of the fingers "ASDF – JKL;".
            </li>
            <li>
              When typing, imagine the location of the symbol on the keyboard.
            </li>
            <li>
              Establish and maintain a rhythm while typing. Your keystrokes should come at equal intervals.
            </li>
            <li>
              The SHIFT key is always pressed by the pinky finger opposite to the one hitting the other key.
            </li>
            <li>
              Use the thumb of whichever hand is more convenient for you to press the Space bar.
            </li>
          </ul>
        <p>
          This method may seem inconvenient at first, but do not stop, eventually you’ll find out that you are typing quickly, easily and conveniently.
        </p>
        <p>
          <img className="centred-img" src={keyboardScheme} alt=""/>
        </p>

        <hr/>

        <h3>
          Fingers motion
        </h3>

        <p>
          Don't look at the keys when you type.
          Just slide your fingers around until they find the home row marking.
        </p>
        <p>
          Limit your hand and finger movement only to what is necessary to press a specific key.
          Keep your hands and fingers close to the base position.
          This improves typing speed and reduces stress on the hands.
        </p>
        <p>
          Pay attention to ring fingers and little fingers, since they are considerably
          underdeveloped.
        </p>
        <hr/>
        <h3>Take care of yourself</h3>
        <p>
          Take a break if you feel that you get distracted easily and are making a lot of mistakes.
          It is more productive to come back when you feel refreshed.
        </p>
        <hr/>
        <p>*Materials from <a href="https://www.ratatype.com">www.ratatype.com</a> were used</p>

      </section>

      <h2>
        How do we measure typing skill level?
      </h2>

      <section className="section">
        <p>
          Your typing skill depends on typing speed.
        </p>
        <div className="levels-gallery">
          {levels.map(level => (
            <div key={level.name}>
              <img src={level.img} alt=""/>
              <span>
                {level.from}...{level.to} WPM - {level.name}
              </span>
            </div>
            ))
          }
        </div>
        <p>
          We measure your typing speed in words per minute (WPM).
          By the "word" we mean an average of 5.1 (in english) characters including spaces.
          However, we don't allow you to continue typing if you have a typo in your test,
          you have to fix it to continue.
        </p>
      </section>
    </div>
  )
};

export default Learn;
