import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});


// Deixar a tela de login no padrao (pronto)
// Implementar sozinho um drop down menu a partir do icone do usuario (pronto)
// criar a tela e integracao para cadastro do usuario (pronto)
// criar a tela e integracao para cadastro de video
// implementacao de pesquisa




export default api;