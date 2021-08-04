const multer = require('multer');
const slugify = require('slugify');
const path = require('path');
const { whitelist } = require('./archivos');
const multerUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname, '../public/imagenes/'));
    },
    filename: function (req, file, callback) {
      const name = slugify(file.originalname, { lower: true })
      callback(null, `${new Date().getTime()}-${name}`)
    },
    fileFilter: (req, file, callback) => {
      if (!whitelist.includes(file.mimetype)) {
        return callback(new Error('El tipo de imagen no es permitido.'));
      }
      callback(null, true);
    },
  }),
});
module.exports = { multerUpload };
