# INSTRUÇÕES

### Instalar o Multer na API
``` npm i multer ```

### Criar a estrutura de pastas:
```
  --| public
     --| assets
     --| storage
```

### No banco de dados, incluir o campo da imagem:
```sql
  ALTER TABLE curso 
     ADD img_curso VARCHAR(400);
```

### No repository cursoRepository.js, incluir função que altera o caminho da imagem
```js
export async function alterarImagemCurso(id, caminho) {
  const comando = `
    UPDATE curso
       SET img_curso = ?
     WHERE id = ?
  `

  const [info] = await conection.query(comando, [caminho, id])
}
```

### No controller, cursoController.js, configurar o multer, informando para onde vão as imagens
```js
  import multer from'multer';
  ...
  const upload = multer({ dest: 'public/storage' })
```

### Adicionar o endpoint que vai alterar a imagem.
```js
                                 // informa o nome da imagem 
endpoints.put('/curso/:id/imagem', upload.single('img'), async (req, resp) => {
    let caminho = req.file.path;   // lê o caminho do arquivo gerado pelo multer
    let id = req.params.id;

    await repo.alterarImagemCurso(id, caminho);
    resp.send();
})
```

### No arquivo rotas.js, liberar a pasta storage na api.
```js
  import express from 'express'
  ...
  export function adicionarRotas(api) {
    ...
    api.use('/public/storage', express.static('public/storage'))
  }
```

