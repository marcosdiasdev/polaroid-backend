exports.cookieConfig = {
  httpOnly: true,
  signed: true, // with a secret key for cookieParser
  secure: false, // to force https
};

exports.jwtOptions = {
  expiresIn: "60 minutes"
}

exports.photoUploadOptions = {
  uploadDir: process.env.STORAGE,
  keepExtensions: false,
  allowEmptyFiles: false,
}

exports.secret = process.env.SECRET;