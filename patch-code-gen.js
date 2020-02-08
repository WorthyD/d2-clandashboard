/********
 *
 * Code Gen Messes with the casing of multiple responses. This is going to be easier than
 *
 * ****/
const replace = require('replace-in-file');
const options = { files: ['projects/bungie-api/src/lib/model/*.ts'], from: /response/g, to: 'Response' };

replace(options)
  .then(changedFiles => {
    console.log('Modified files:', changedFiles.length);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
