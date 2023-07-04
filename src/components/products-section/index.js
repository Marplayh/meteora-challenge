import { useProducts } from "../../filter/useProducts";
import { CardProduct } from "../card-product";
import "./styles.scss";

export function ProductSection(){
    const { data: filteredProducts } = useProducts();
    
     
    return(
        <div className="mainContainer">
            <h1>Produtos que estão bombando!</h1>
            <div className="products-list">
            {filteredProducts.length > 0 ? filteredProducts.map((item) => {
                            const imagem = require(`../../assets/${item.imagem}`);
                            return(
                                <CardProduct 
                                id={item.id}
                                image={imagem}
                                nome={item.nome}
                                preco={item.preco}
                                texto={item.texto}
                                /> 
                            )    
                        }): (<p>Nenhum produto encontrado.</p>)}
            
                
            </div>
        </div>
    )
}