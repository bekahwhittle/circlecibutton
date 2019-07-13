// expect button onClick 'p' tag (#new-text) to equal -"Howdy there- Yeehaw!"-

const texasTribute = require('./index');
const $ = require('jquery');

test('button click displays new text', () => {
  $('#yeehaw-button').click();
  expect($('#new-text').text()).toEqual('Howdy there- Yeehaw!');
  // on click
  // expect Howdy there- Yeehaw!
});