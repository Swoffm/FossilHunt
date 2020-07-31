import React from "react";


const FossilCollectionForumJSX = (props) => {

    return (<form className="fossilForum">
        <fieldset>
            <div className="formgrid">
                <div className="formChild">
                <label htmlFor="genus">Genus/Species Name: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="genus"
                    placeholder="Enter Genus Name"
                /></div>

            <div className="formChild">

                <label htmlFor="timeperiod">Geological Time Period: </label>
                <select id="timePeriod"  onChange={props.handleFieldChange}>
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
                    placeholder="What type of rock was the fossil found in"
                /></div>



            <div className="formChild">

                <label htmlFor="location">Location: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="location"
                    placeholder="Location of the fossil"
                /></div>


            <div className="formChild">

                <label htmlFor="name">Upload Fossil Image: </label>
                <input
                    type="file"
                    required
                    onChange={props.handleFieldChange}
                    id="image"

                />
            </div>



            </div>
        <div className="formChild">
            <button
                type="button"
                disabled={props.isLoading}
                onClick={props.newFossil}
            >Submit</button>
        </div>
        </fieldset>
    </form >)
}

export default FossilCollectionForumJSX