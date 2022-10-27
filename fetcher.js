const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2);
const url = input[0];
const location = input[1];
// console.log(url);
// console.log(location);

request(url, (err, response/*I dont know what to do with response */, body) => {
  if (err) {
    console.error(err);
  }
  // console.log(response); All this does is spit it all out to console. Leaving it out is cleaner.
  fs.writeFile(location, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${location}`);
  });
});