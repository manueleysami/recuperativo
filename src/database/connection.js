const mongoose = require('mongoose');
require('dotenv').config();
class Connect {
  async conectarBD() {
    try {
      const objetoConfiguracion = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      };
      await mongoose.connect(process.env.CONEXION, objetoConfiguracion);
      console.log('Base de datos conectada!');
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new Connect();
