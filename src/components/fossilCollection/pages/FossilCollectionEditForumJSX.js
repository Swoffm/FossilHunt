import React from "react"


const FossilCollectionEditForumJSX = (props) => {


    return(<>
    <div className="title-forum">
        <h1 className="h1title">Fossil Collection</h1>
        </div>
    <form className="fossilForum forumLogin">
        <fieldset>
            <div className="formgrid">
                <div className="formChild">
                <label htmlFor="genus">Name: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="genus"

                    value={props.fossil.genus}
                /></div>

<div className="formChild">

<label htmlFor="timeperiod">Geological Time Period: </label>
<select id="timePeriod"  onChange={props.handleFieldChange}  value={props.fossil.timePeriod}>
   <option>Time Period</option>
    <option value="quaternary">Quaternary</option>
    <option value="neogene">Neogene</option>
    <option value="paleogene">Paleogene</option>
    <option value="cretaceous">Cretaceous</option>
    <option value="jurassic">Jurassic</option>
    <option value="triassic">Triassic</option>
    <option value="permian">Permian</option>
    <option value="carboniferous">Carboniferous</option>
    <option value="devonian">Devonian</option>
    <option value="silurian">Silurian</option>
    <option value="ordovician">Ordovician</option>
    <option value="cambrian">Cambrian</option>
    <option value="ediacaran">Ediacaran</option>
    <option value="tonian">Tonian</option>
    <option value="stenian">Stenian</option>
    <option value="ectasian">Ectasian</option>
    <option value="calymmian">Calymmian</option>
    <option value="statherian">Statherian</option>
    <option value="orosirian">Orosirian</option>
    <option value="rhyacian">Rhyacian</option>
    <option value="siderian">Siderian</option>
</select>
</div>



            <div className="formChild">

                <label htmlFor="rockType">Rock Type: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="rockType"
                    value={props.fossil.rockType}
                /></div>



<div className="formChild">

<label htmlFor="location">Location: </label>
<select onChange={props.handleFieldChange} id="location" value={props.fossil.location}>
    <option>Select State</option>
<option value="Alabama">Alabama</option>
<option value="Alaska">Alaska</option>
<option value="Arizona">Arizona</option>
<option value="Arkansas">Arkansas</option>
<option value="California">California</option>
<option value="Colorado">Colorado</option>
<option value="Connecticut">Connecticut</option>
<option value="Delaware">Delaware</option>
<option value="DC">District Of Columbia</option>
<option value="Florida">Florida</option>
<option value="Georgia">Georgia</option>
<option value="Hawaii">Hawaii</option>
<option value="Idaho">Idaho</option>
<option value="Illinois">Illinois</option>
<option value="Indiana">Indiana</option>
<option value="Iowa">Iowa</option>
<option value="Kansas">Kansas</option>
<option value="Kentucky">Kentucky</option>
<option value="Louisiana">Louisiana</option>
<option value="Maine">Maine</option>
<option value="Maryland">Maryland</option>
<option value="Massachusetts">Massachusetts</option>
<option value="Michigan">Michigan</option>
<option value="Minnesota">Minnesota</option>
<option value="Mississippi">Mississippi</option>
<option value="Missouri">Missouri</option>
<option value="Montana">Montana</option>
<option value="Nebraska">Nebraska</option>
<option value="Nevada">Nevada</option>
<option value="New Hampshire">New Hampshire</option>
<option value="New Jersey">New Jersey</option>
<option value="New Mexico">New Mexico</option>
<option value="New York">New York</option>
<option value="North Carolina">North Carolina</option>
<option value="North Dakota">North Dakota</option>
<option value="Ohio">Ohio</option>
<option value="Oklahoma">Oklahoma</option>
<option value="Oregon">Oregon</option>
<option value="Pennsylvania">Pennsylvania</option>
<option value="Rhode Island">Rhode Island</option>
<option value="South Carolina">South Carolina</option>
<option value="South Dakota">South Dakota</option>
<option value="Tennessee">Tennessee</option>
<option value="Texas">Texas</option>
<option value="Utah">Utah</option>
<option value="Vermont">Vermont</option>
<option value="Virginia">Virginia</option>
<option value="Washington">Washington</option>
<option value="West Virginia">West Virginia</option>
<option value="Wisconsin">Wisconsin</option>
<option value="Wyoming">Wyoming</option>
</select></div>





            </div>
        <div className="formChild">
            <button
                type="button"
                disabled={props.isLoading}
                onClick={props.newFossil}
            >Submit</button>
        </div>
        </fieldset>
    </form >
    </>)

}

export default FossilCollectionEditForumJSX