
export default function NopalFilter({ handleCategoryFilter }){

   
    return (
          <>
             <div className="brand-filter">
                <select onChange={handleCategoryFilter}>
                    <option value="">Prikazi sve</option>
                    <option value="prekidaci">Prekidaci</option>
                    <option value="uticnice">Uticnice</option>
                    <option value="releji">Releji</option>
                    <option value="sijalicnaGrla">Sijalicna grla</option>  
                    <option value="utikaci">Utikaci</option>  
                    <option value="Others">Drugo</option>  
                 </select>
             </div>
          </>
    )
}

 