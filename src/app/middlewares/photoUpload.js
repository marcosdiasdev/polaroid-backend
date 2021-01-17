const formidable = require('formidable');
const { photoUploadOptions } = require('../config/config');

module.exports = (req, res, next) => {

  const form = formidable(photoUploadOptions);
  const fileTypes = ['image/jpeg', 'image/png', 'image/gif'];

  form.onPart = (part) => {
    if(part.mime && fileTypes.indexOf(part.mime) === -1) {
      form._error('Invalid file type');
    } else {
      form.handlePart(part);
    }
  };

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(400).json({message: err});

    req.photo = {
      description: fields.description,
      user_id: req.user_id,
      url: files.file.path.split('/').slice(-1),
    }
    
    next();         
  });
}