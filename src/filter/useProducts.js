import { useDeferredValue } from 'react';
import data from '../itens.json';
import { useFilter } from './useFilter';
export function useProducts(){
    const {search, category} = useFilter() 
    const searchDeferred = useDeferredValue(search)
    const filteredProducts = data.filter((product) => {
        const productName = product.nome.toLowerCase();
        const searchValue = (searchDeferred || '').toLowerCase();
        const matchesSearch = productName.includes(searchValue);
        const matchesCategory = category === 'todos' || category === product.tipo;
    
        return matchesSearch && matchesCategory;
      });

  return {
     data: filteredProducts
    }
  
}