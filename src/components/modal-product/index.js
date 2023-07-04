import Checked from '../../assets/check-circle.png';
import { Button } from '../button-meteora';
import './modal-style-product.scss';

export function ModalProduct(props){
    const closeModal = () => {
        if (props.closeModal) {
          props.closeModal();
        }
      };
    return(
        <div id="modal-product-style">
            <div className="barra-superior-product" id='barra-superior'>
                <div>
                    <img src={Checked} alt='check'></img><h3>Confira detalhes sobre o produto</h3>
                </div>
                <button className='close-x' onClick={closeModal}>x</button>
            </div>
            <div className='border-line'>
                <div id="modal-product-content">
                    <div id="modal-product-img">
                        <img src={props.image} alt=""/>
                    </div>
                    <div id="modal-product-info">
                        <div className='info-container'>
                            <h3>{props.nome}</h3>
                            <p>{props.texto}</p>
                            <div></div>
                            <span>{props.preco}</span>
                            <p className='small-text'>Vendido e entregue por Riachuelo</p>
                        </div>
                        <div className='cores-container'>
                            <span>Cores:</span>
                            <div>
                            <label>
                                <input
                                type="radio"
                                name="color"
                                value="color1"
                                />
                                <span>Azul claro</span>
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="color"
                                value="color2"
                                />
                                <span>Offwhite</span>
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="color"
                                value="color3"
                                />
                                <span>Preto</span>
                            </label>
                            </div>
                        </div>
                        <div className='cores-container'>
                            <span>Tamanho:</span>
                            <div>
                            <label>
                                <input
                                type="radio"
                                name="option"
                                value="option1"
                                />
                                <span>P</span>
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="option"
                                value="option2"
                                />
                                <span>PP</span>
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="option"
                                value="option3"
                                />
                                <span>M</span>
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="option"
                                value="option4"
                                />
                                <span>G</span>
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="option"
                                value="option5"
                                />
                                <span>GG</span>
                            </label>
                            </div>
                        </div>
                        <Button>Adicionar à sacola</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}