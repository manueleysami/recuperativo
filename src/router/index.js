const { Router } = require('express');
const { multerUpload } = require('../config/multer');
const {
  Inicio,
  CrearNoticia,
  CrearAutor,
  CrearAutorPost,
  CrearNoticiaPost,
  NoticiaId,
  NoticiaEliminar,
  NoticiaEditar,
  NoticiaEditarPost,
} = require('../controller/controller');
const router = Router();
router.get('/', Inicio);
router.get('/noticia/:id', NoticiaId);
router.use('/noticia/eliminar/:id', NoticiaEliminar);
router.get('/noticia/editar/:id', NoticiaEditar);
router.post('/editar-noticia/:id', NoticiaEditarPost);
router.get('/crear-noticias', CrearNoticia);
router.post('/crear-noticias', multerUpload.single('imagen'), CrearNoticiaPost);
router.get('/crear-autor', CrearAutor);
router.post('/crear-autor', CrearAutorPost);
module.exports = router;
