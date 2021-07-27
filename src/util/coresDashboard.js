export default function coresDashboard(tipo) {
  let cor;

  switch (tipo) {
    case 'primary':
      cor = '#00E096';
      break;
    case 'danger':
      cor = '#E74C3C';
      break;
    case 'secondary':
      cor = '#0C1E5B';
      break;
    case 'orange':
      cor = '#F39C12';
      break;
    default:
      break;
  }
  return cor;
}
