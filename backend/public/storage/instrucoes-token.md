# INSTRUÇÕES

### Instalar o JsonWebToken na API
``` npm i jsonwebtoken ```

### Criar a estrutura de pastas:
```
  --| src
     --| controller
     ----| loginController.js

     --| repository
     ----| loginRepository.js

     --| utils
     ----| jwt.js
```

### No banco de dados, criar a tabela de login:
```sql
  CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(100),
      senha VARCHAR(100),
      role VARCHAR(100),
      criacao DATETIME
  );
```

### No repository loginRepository.js, incluir funções que cria a conta e faz login
```js
import { conection } from "./conection.js";


export async function consultarCredenciais(email, senha) {
  const comando = `
    SELECT id,
           email,
           role,
           criacao
      FROM login
     WHERE email = ?
       and senha = MD5(?)
  `;

  const [registros] = await conection.query(comando, [email, senha]);
  return registros[0];
}


export async function criarConta(novoLogin) {
  const comando = `
    INSERT INTO login (email, senha, role, criacao)
               VALUES (?, MD5(?), ?, ?);
  `;

  const [info] = await conection.query(comando, [
    novoLogin.email,
    novoLogin.senha,
    novoLogin.role,
    new Date()
  ]);
  return info.insertId;
}

```



### No loginController.js
```js
import * as repo from '../repository/loginRepository.js';
import { generateToken } from '../utils/jwt.js'

import { Router } from "express";
const endpoints = Router();


endpoints.post('/login/conta', async (req, resp) => {
  let novoLogin = req.body;

  let id = await repo.criarConta(novoLogin);
  resp.send({ novoId: id });
})


endpoints.post('/login', async (req, resp) => {
  let email = req.body.email;
  let senha = req.body.senha;

  let credenciais = await repo.consultarCredenciais(email, senha);

  if (!credenciais) {
    resp.status(401).send({
      erro: 'Credenciais inválidas.'
    });
  }
  else {
    resp.send({
      token: generateToken(credenciais)
    });
  }
})


export default endpoints;
```

### No cursoController.js, proteger os endpoints
```js
import { getAuthentication } from '../utils/jwt.js'
...
const autenticador = getAuthentication();
...



endpoints.get('/curso', autenticador, async (req, resp) => {
  let registros = await repo.listarCursos();
  resp.send(registros);
})

```


### No rotas.js, adiciona o controller
```js
...
import loginController from './controller/loginController.js'

export function adicionarRotas(api) {
  ...
  api.use(loginController);
}

```