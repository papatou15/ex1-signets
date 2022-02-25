import './Carte.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';

export default function Carte({key, titre, modif, couleur, img}) {
    return(
        <article className="carte" style={{backgroundColor: couleur}}>
            <div className="sort">
                <SortIcon />
            </div>
            <img src={img} alt="" />
            <div className="basCarte">
                <h2>{titre}</h2>
                <p>Modifié: {modif}</p>
                <div className="troisPoints">
                    <MoreVertIcon />
                </div>
            </div>
        </article>
    )
}