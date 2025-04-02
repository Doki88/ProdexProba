
export default function FinderFilter({ handleCategoryFilter }){

   
    return (
          <>
             <div className="brand-filter">
                <select onChange={handleCategoryFilter}>
                    <option value="">Prikazi sve</option>
                    <option value="Releji">Releji</option>
                    <option value="Postolja za releje">Postolja za releje</option>
                    <option value="Elektrode nivoa">Elektrode nivoa</option>
                    <option value="Adapteri za din šinu">Adapteri za din šinu</option>  
                    <option value="Detektori pokreta">Detektori pokreta</option>        
                    <option value="Led moduli">Led moduli</option>    
                    <option value="Timer moduli">Timer moduli</option>   
                    <option value="Ventilatori">Ventilatori</option>                                                             
                 </select>
             </div>
          </>
    )
}

 