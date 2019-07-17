// jest.mock('./index');
// const texasTribute = require('./button');

// test('button click displays new text', () => {

//     document.body.innerHTML =
//     '<div>' +
//     '  <p id="new-text"></p>' +
//     '  <button id="yeehaw-button">Click</button>' +
//     '</div>';

//     const $ = require('jquery');
//     const texasTribute = require('index');

//     texasTribute.mockImplementation(() => {
//         document.getElementById("new-text").innerHTML = 'Howdy & Yeehaw!';
//     });

//     $('#yeehaw-button').click();
//     expect(texasTribute).toBeCalled();
//     expect($('#new-text').text()).toEqual('Howdy & Yeehaw!');
// });


// Code to run sample mock test on addition expectation 👇🏼
const addition = require('.');

test('adds 2 + 2 to equal 4', () => {
    
  expect(addition(2, 2)).toBe(4);

});