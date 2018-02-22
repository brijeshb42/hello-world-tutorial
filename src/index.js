import message from './message';
import './index.css';

const paragraph = document.createElement('p');
paragraph.innerHTML = message;

document.body.prepend(paragraph);
