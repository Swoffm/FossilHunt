import React from "react";


const FossilCollectionForumJSX = (props) => {

    return (<form>
        <fieldset>
            <div className="formgrid">
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="genus"
                    placeholder="Enter Genus Name"
                />


                <label htmlFor="name">Geological Time Period: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="timeperiod"
                    placeholder="Time Period"
                />


                <label htmlFor="name">Rock Type: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="rockType"
                    placeholder="What type of rock was the fossil found in"
                />


                <label htmlFor="name">Location: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="location"
                    placeholder="Location of the fossil"
                />

                <label htmlFor="name">Upload Fossil Image: </label>
                <input
                    type="file"
                    required
                    onChange={props.handleFieldChange}
                    id="image"
                   
                />




            </div>
            <div className="alignRight">
                <button
                    type="button"
                    disabled={props.isLoading}
                    onClick={props.newFossil}
                >Submit</button>
            </div>
        </fieldset>
    </form>)
}

export default FossilCollectionForumJSX