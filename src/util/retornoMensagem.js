import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function retornoMensagem(status, mensagem) {
  if (status !== 200) {
    return toast.error(mensagem, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (status !== 200 && status !== 400) {
    return toast.info(mensagem, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return toast.success(mensagem, {
    position: 'top-right',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
