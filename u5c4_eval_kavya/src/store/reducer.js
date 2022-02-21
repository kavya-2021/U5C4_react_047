import { SHOW_SEARCH_RESULTS,SORT_ALPHABETS_ASC,SORT_ALPHABETS_DESC,SORT_BY_DATE_ASC,SORT_BY_DATE_DESC,SORT_BY_QUALITY_ASC,SORT_BY_QUALITY_DESC,FILTER_EXPLICIT } from "./actionTypes"

const init = {
    result:[]
}

export const SearchReducer = (store = init,{type,payload})=>{
    switch(type){
        case SHOW_SEARCH_RESULTS:
            return {...store,result:payload}

        case SORT_ALPHABETS_ASC:
          return store
        
        case SORT_ALPHABETS_DESC:
          return store 

        case SORT_BY_DATE_ASC:
        return store

        case SORT_BY_DATE_DESC:
        return store

        case SORT_BY_QUALITY_ASC:
        return store

        case SORT_BY_QUALITY_DESC:
        return store   
        
        case FILTER_EXPLICIT:
          return store

        default:
          return store    
    }
}