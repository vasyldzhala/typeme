import slow from '../assets/gif/1_tenor.gif';
import beginner from '../assets/gif/2_slow-typing.gif';
import average from '../assets/gif/3_cermit.gif';
import skillful from '../assets/gif/4_carrey.gif';
import expert from '../assets/gif/5_typing.gif';
import android from '../assets/gif/6_ghostfasttyping.gif';

const levels = [
  { from: 0, to: 20, name: 'novice', img: slow, message: 'Could be better, you need more practice'},
  { from: 20, to: 40, name: 'beginner', img: beginner, message: 'Not bad! Continue to train to succeed'},
  { from: 40, to: 60, name: 'intermediate', img: average, message: 'Congratulations! You have an average level of skill'},
  { from: 60, to: 100, name: 'proficient', img: skillful, message: 'Very well! Your skill is above average!'},
  { from: 100, to: 150, name: 'expert', img: expert, message: 'A wonderful try! You are competent'},
  { from: 150, to: 1000, name: 'android', img: android, message: 'It is impossible! How do you manage?'}
];

export default levels;
