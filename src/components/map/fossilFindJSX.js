import React from "react"
import apiKey from "../../apiKey/apiKey"

const FossilFindJSX = (props) => {



    return (<>
  
  <div className="title-forum"><h1 className="h1title">Fossil Research</h1></div>
    <form id="fossilForum" className="forumLogin">
       
        <fieldset>
            <p>Select a time period<br />
            Upon selection, all Genus in the iDig api will be displayed to the user<br />
            Don't know what time period your fossil is from? Use this <a target="_blank" href="https://macrostrat.org/map/#/z=1.5/x=16/y=23/bedrock/lines/">Geological Map.</a> <br />
            Enter the location of the fossil into the search bar and record the Age listed on the right.</p>

                <div className="formChild">

                    <label htmlFor="timeperiod">Geological Time Period: </label>
                    <select id="timePeriod" onChange={props.handleFieldChange}>
                        <option value="timePeriod">Time Period</option>
                        <option value="quaternary">Quaternary</option>
                        <option value="neogene">Neogene</option>
                        <option value="paleogene">Paleogene</option>
                        <option value="cretaceous">Cretaceous</option>
                        <option value="jurassic">Jurassic</option>
                        <option value="triassic">Triassic</option>
                        <option value="permian">Permian</option>
                        <option value="devonian">Devonian</option>
                        <option value="silurian">Silurian</option>
                        <option value="ordovician">Ordovician</option>
                        <option value="cambrian">Cambrian</option>
                    </select>
                </div>





            <div className="formChild">
                <button className="forumbtn"
                    type="button"
                    disabled={props.isLoading}
                     onClick={props.newTimePeriod}
                >Submit</button>
            </div>
        </fieldset>
    </form >


    
    </>)
}



export default FossilFindJSX