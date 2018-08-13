import _ from 'lodash';
import { SerialKiller, sayMyName, sayNames } from './utils';
import { Joel, villains } from './data.js';
import $ from 'jquery';

// const _ = require('lodash');

console.log($.fn.jquery);

console.log('running');

console.log(SerialKiller);

console.log(_.capitalize('FREDDY'));

console.log('hello');

sayMyName(SerialKiller);

console.log(Joel.weapon);

console.log('--------------');
sayNames();
console.log('--------------');

console.log(`last: ${_.last(villains)}`);


$(document).ready( () => {
    console.log('doc is ready for manipulation');

    $('button').click( () => {
        alert('hello');
        sayNames();
    } )
} );