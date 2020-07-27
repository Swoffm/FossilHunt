import React from "react";


const FossilCollectionForumJSX = (props) => {

    return (<form className="fossilForum">
        <fieldset>
            <div className="formgrid">
                <div className="formChild">
                <label htmlFor="genus">Name: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="genus"
                    placeholder="Enter Genus Name"
                /></div>

            <div className="formChild">

                <label htmlFor="timeperiod">Geological Time Period: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="timeperiod"
                    placeholder="Time Period"
                /></div>


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