import './styles.scss';
import { Button } from '../button-meteora';
import { ModalProduct } from '../modal-product';
import { useState } from 'react';

export function CardProduct(props){
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
      document.body.classList.add('modal-open');
    };
  
    const closeModal = () => {
      setModalOpen(false);
      document.body.classList.remove('modal-open');
    };

    return (
        <>
        <div key={props.id} className="product-card">
            <img src={props.image} alt="Camiseta Marrom"/>
            <div>
                <h1>{props.nome}</h1>
                <p>{props.texto}</p>
                <span>{props.preco}</span>
                <Button onClick={handleOpenModal}>Ver mais</Button>
            </div>     
        </div>
        {modalOpen && (
            <div className="overlay">
                <ModalProduct
                  nome={props.nome}
                  texto={props.texto}
                  preco={props.preco}
                  image={props.image}
                  closeModal={closeModal}
                />
            </div>
          )}
        </>
    )
}