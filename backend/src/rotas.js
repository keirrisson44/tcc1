import express from 'express';
import AgressorController from "./controller/AgressorController.js";
import OcorrenciaController from "./controller/OcorrenciaController.js";
import VitimaController from "./controller/VitimaController.js";
import UsuarioController from "./controller/UsuarioController.js"; 
import axios from "axios";

export function adicionarRotas(api) {


  api.use('/agressor', AgressorController);
  api.use('/ocorrencia', OcorrenciaController);
  api.use('/vitima', VitimaController);

  
  api.use('/usuario', UsuarioController);  

  api.use('/public/storage', express.static('public/storage'));

  const GOOGLE_API_KEY = "SUA_API_KEY_AQUI";

  api.get("/instituicoes-proximas", async (req, res) => {
    try {
      const bairro = req.query.bairro;

      if (!bairro)
        return res.status(400).send({ erro: "Bairro é obrigatório" });

      const geo = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address: `${bairro}, Brasil`,
            key: GOOGLE_API_KEY
          }
        }
      );

      const location = geo.data.results[0]?.geometry.location;

      if (!location)
        return res.status(404).send({ erro: "Localização não encontrada" });

      const { lat, lng } = location;

      const places = await axios.get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
        {
          params: {
            location: `${lat},${lng}`,
            radius: 5000,
            keyword: "apoio a mulheres violência doméstica ONG abrigo psicologico",
            key: GOOGLE_API_KEY
          }
        }
      );

      const resultado = places.data.results.map(local => ({
        nome: local.name,
        endereco: local.vicinity,
        telefone: local.formatted_phone_number || "Não informado"
      }));

      return res.send(resultado);

    } catch (err) {
      console.error(err);
      res.status(500).send({ erro: "Erro ao buscar instituições" });
    }
  });
}
