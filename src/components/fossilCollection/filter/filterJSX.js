import React from "react"


const FilterJSX = props => {


    const location = props.FLocation.map(element => element.userId == props.UserId ? element.location : null)
   
    let locationArray = []
    for(let i in location) {
        if(location[i]) {
            locationArray.push(location[i])
        }
    }
    
        // the code below looks for unique values
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
      const optionLocation = locationArray.filter(unique)

        //=================below looks for a unique genus ============
      const genus = props.FLocation.map(element => element.userId == props.UserId ? element.genus : null)
      
      let genusArray = []
      for(let i in genus) {
          if(genus[i]) {
            genusArray.push(genus[i])
          }
      }
      
          // the code below looks for unique values

        const optionGenus = genusArray.filter(unique)

      
      
    
let id = 1;
    return (
    
    <section className="fossil--select">

        <select className="fossil--select-location forum--select" name="location" onChange={props.filterLocationChange}>
        <option>Location</option>
           {optionLocation.map(element => <option value={element} key={id++}>{element}</option>)}
        </select>

        <select className="fossil--select-genus forum--select" name="genus" onChange={props.filterGenusChange}>
        <option value="genus/species">Genus/Species</option>
           {optionGenus.map(element => <option value={element} key={id++}>{element}</option>)}
        </select>
        
        </section>
        
    )
}

export default FilterJSX