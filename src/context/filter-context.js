import { createContext, useState } from "react";
import { Category } from "../types/category-types";


export const FilterContext = createContext(
    {
        setCategory: ()=>{},
        setSearch: ()=>{}
    }
)

export function FilterContextProvider({children}){
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(Category.todos)

    return(
        <FilterContext.Provider value={{category, search, setCategory, setSearch}}>
            {children}
        </FilterContext.Provider>
    )
}