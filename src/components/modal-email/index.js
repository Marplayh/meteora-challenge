import Checked from '../../assets/check-circle.png';
import './modal-email.scss';

export function EmailModal(props){
    const closeModal = () => {
        if (props.onClick) {
          props.onClick();
        }
      };
    return (
            <div className="modal-email">
                    <div className="barra-superior" id='barra-superior'>
                        <div>
                        <img src={Checked} alt='check'></img><h3>E-mail cadastrado com sucesso!</h3>
                        </div>
                       <button className='close-x' onClick={closeModal}>x</button>
                    </div>
                    <div className="barra-inferior">
                    <p>Em breve você receberá novidades exclusivas da Meteora.</p> 
                    </div>
            </div>
    )
}