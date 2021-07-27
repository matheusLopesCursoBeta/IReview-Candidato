import axios from 'axios';

export async function Logar(email, senha) {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_TESTE_URL}/login`,
      data: {
        email,
        senha,
      },
    });

    return { status, data };
  } catch (err) {
    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}
