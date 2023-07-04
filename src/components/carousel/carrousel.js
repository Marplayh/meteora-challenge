/* eslint-disable react/style-prop-object */
import './style.scss';
import ImageBanner from '../../assets/BannerCarousel.png';
import TabletImage from '../../assets/banner-medium-img.png';
import MobileImage from '../../assets/imagem-pequena.png';
import SecondImg from '../../assets/second-img-desktop.png';
import SecondImgMobile from '../../assets/second-img-mobile.png';
import SecondImgtablet from '../../assets/second-img-tablet.png';
import ThirdImg from '../../assets/third-img-desktop.png';
import ThirdImgTablet from '../../assets/third-img-tablet.png';
import ThirdImgMobile from '../../assets/third-img-mobile.png';

export default function BannersCarousel(){
   
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner"> 
            <div class="carousel-item active">
                    <img class="principal" src={ImageBanner} alt="Imagem Banner"/>
                    <img class="principal" src={TabletImage} alt="Imagem Banner"/>
                    <img class="principal" src={MobileImage} alt="Imagem Banner"/>
                </div>
                <div class="carousel-item">
                    <div className='segundo'>
                        <img class="imagens" src={SecondImg} alt="Imagem Banner"/>
                        <img class="imagens" src={SecondImgtablet} alt="Imagem Banner"/>
                        <img class="imagens" src={SecondImgMobile} alt="Imagem Banner"/>
                        
                        <div className='texto'>
                            <h1>Coleção Atemporal</h1>
                            <p>Estilo e qualidade para durar</p>
                        </div>
                    </div>
                </div> 
                <div class="carousel-item">
                    <div className='terceira'>    
                        <img class="imagens" src={ThirdImg} alt="Imagem Banner"/>  
                        <img class="imagens" src={ThirdImgTablet} alt="Imagem Banner"/> 
                        <img class="imagens" src={ThirdImgMobile} alt="Imagem Banner"/> 
                        <div className='texto'>
                            <h1>Coleção Atemporal</h1>
                            <p>Alto impacto visual, baixo impacto ambiental</p>
                        </div>    
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}