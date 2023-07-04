import './styles.scss';
import { Button } from '../button-meteora';

export function CardProduct(props){
    return (
        <div key={props.id} className="product-card">
            <img src={props.image} alt="Camiseta Marrom"/>
            <div>
                <h1>{props.nome}</h1>
                <p>{props.texto}</p>
                <span>{props.preco}</span>
                <Button>Ver mais</Button>
            </div>    
        </div>
    )
}