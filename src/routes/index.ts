import {Router} from 'express';
import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoController'
import * as UserController from '../controllers/userController'

const router = Router();

router.get('/home', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idade);
router.post('/idade-resultado', UserController.idadeResultado);

/* router.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino } = req.params;
    console.log(req.params);
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

router.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug = req.params.slug;
    res.send(`Noticia: ${slug}`);
}); */

export default router;