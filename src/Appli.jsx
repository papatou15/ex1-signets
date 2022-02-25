import './Appli.scss';
import Header from './Header';
import ListeCartes from './ListeCartes.jsx';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Appli() {
  return (
    <div className="Appli">
      <Header />
      <ListeCartes />
      <div className="addIcon">
        <AddCircleIcon />
      </div>
    </div>
  );
  
}

export default Appli;