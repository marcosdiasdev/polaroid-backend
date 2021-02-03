exports.cookieConfig = {
  httpOnly: true,
  signed: true,
  secure: false,
};

exports.photoUploadOptions = {
  uploadDir: process.env.STORAGE,
  keepExtensions: false,
  allowEmptyFiles: false,
}

exports.secret = process.env.SECRET;