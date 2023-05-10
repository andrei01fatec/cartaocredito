import { Router} from  "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";

const router = Router(); //crio uma instância do elemento Router

//-----ROTAS PARA USER-----//
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/userinfo', isAuthenticated, new DetailUserController().handle);



//exportação do objeto router para acesso de outros arquivos
export {router}; 