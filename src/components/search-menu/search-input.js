import './styles.scss';
import { FilterContext } from '../../context/filter-context';
import { useFilter } from '../../filter/useFilter';
import { useRef } from 'react';
export function SearchInput(){
    const {setSearch} = useFilter(FilterContext);
    const searchInputRef = useRef('');
    const handleChange = (e) => {
      searchInputRef.current = e.target.value;
    };
    
    const handleSearch = () => {
      setSearch(searchInputRef.current);
      window.scrollTo({ top: "900", behavior: 'smooth' });
    };
    return(
        <div className="nav-search-mobile">
            <input placeholder="Digite o produto" onChange={handleChange}>
            </input>
            <button onClick={handleSearch}>Buscar</button>
         </div>
    );
}