import "./social-media-styles.scss";
import Diamond from "../../assets/x-diamond (2).png"
import Flower from "../../assets/flower1 (3).png"
import Arrow from "../../assets/arrow-repeat (2).png"

export function SocialMedias(){
    return (
        <div className="father-box">
            <h1>Conheça todas as nossas facilidades</h1>
            <div className="social-medias">
                <div className="cartao">
                    <img src={Diamond} alt="Diamante"/>
                    <div className="container-texto">
                        <h1 className="titulo">PAGUE PELO PIX</h1>
                        <p className="text-s">Ganhe 5% OFF em pagamentos via PIX</p>
                    </div>
                </div>
                <div className="cartao">
                    <img src={Arrow} alt="Flor"/>
                    <div className="container-texto">
                        <h1 className="titulo">TROCA GRÁTIS</h1>
                        <p className="text-s">Fique livre para trocar em até 30 dias.</p>
                    </div>
                </div>
                <div className="cartao">
                    <img src={Flower} alt="Arrow"/>
                    <div className="container-texto">
                        <h1 className="titulo">SUSTENTABILIDADE</h1>
                        <p className="text-s">Moda responsável, que respeita o meio ambiente.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}