import './ListeCartes.scss';
import Cartes from './Carte';
import lesCartes from './data/infoCartes.json';

export default function ListeCartes(){
    return (
        <section className="ListeCartes">
            <div className="cartes">
                {
                    lesCartes.map(p => <Cartes key={p.id} titre={p.titre} modif={p.modif} couleur={p.couleur}/>)
                }
            </div>
        </section>
    );
};