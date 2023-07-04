import './field-email.scss';
import { Button } from '../button-meteora';

export function EmailField(){
    return (
        <div className='father-container-email'>
            <div className='field'>
            <p>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
            </p>
            <div><input placeholder="Digite seu email"></input><Button>Enviar</Button></div>
            </div> 
        </div>
    )
}