import Camisetas from '../../assets/camiseta.png'
import Calcas from '../../assets/Calças.png'
import Bolsa from '../../assets/bolsa.png'
import Calcado from '../../assets/calçados.png'
import Oculos from '../../assets/glass.png'
import Casaco from '../../assets/coat.png'


import './style.scss';
import { FilterContext } from '../../context/filter-context'
import { Category } from '../../types/category-types'
import { useFilter } from '../../filter/useFilter'

export default function ProductsCategory(){
   
    const { setCategory, setSearch} = useFilter(FilterContext);
    const handleCategory = (category)=> {
        setCategory(category)
        setSearch('')
    }

  return(
      <div className="father-container">
        <div className="container-search">
            <h1>Busque por categoria:</h1>
            <div className='cards-container'>
                <div className="card" onClick={()=>handleCategory(Category.camiseta)}>
                    <div>
                        <img src={Camisetas} alt='Camiseta'></img>
                        <div className='text-card'>
                        <h6>Camisetas</h6>
                        </div>
                    </div>
                </div>
                <div className="card" onClick={()=>handleCategory(Category.bolsa)}>
                    <div>
                        <img src={Bolsa} alt='Bolsa'></img>
                        <div className='text-card'>
                        <h6>Bolsas</h6>
                        </div>
                    </div>
                </div>
                <div className="card" onClick={()=>handleCategory(Category.tenis)}>
                    <div>
                        <img src={Calcado} alt='Calçado'></img>
                        <div className='text-card'>
                        <h6>Calçados</h6>
                        </div>
                    </div>
                </div>
                <div className="card" onClick={()=>handleCategory(Category.calca)}>
                    <div>
                        <img src={Calcas} alt='Calças'></img>
                        <div className='text-card'>
                        <h6>Calças</h6>
                        </div>
                    </div>          
                </div>
                <div className="card" onClick={()=>handleCategory(Category.jaqueta)}>
                    <div>
                        <img src={Casaco} alt='Casaco'></img>
                        <div className='text-card'>
                        <h6>Casacos</h6>
                        </div>
                    </div>                  
                </div>
                <div className="card" onClick={()=>handleCategory(Category.oculos)}>
                    <div>
                        <img src={Oculos} alt='Óculos'></img>
                        <div className='text-card'>
                        <h6>Óculos</h6>
                        </div>
                    </div> 
                </div>
            </div>
            
        </div>
        <button id='show-all' onClick={()=>handleCategory(Category.todos)}>Todos os produtos</button>
      </div>
  );
}