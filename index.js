import { AwesomeBooks } from './modules/awesomeBooks.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
import { toggleNav } from './modules/toggleNav.js';

const currentDate = DateTime.now();

document.getElementById('currentTime').innerHTML = currentDate;

toggleNav();

const awesomeBooks = new AwesomeBooks();
awesomeBooks();
