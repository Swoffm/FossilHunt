import React from "react"


const FossilCollectionEditForumJSX = (props) => {


    return(<>
    <form className="fossilForum">
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
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="timeperiod"
                    value={props.fossil.timeperiod}
                /></div>


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
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="location"
                    value={props.fossil.location}
                /></div>


            {/* <div className="formChild">

                <label htmlFor="name">Upload Fossil Image: </label>
                <input
                    type="file"
                    required
                    onChange={props.handleFieldChange}
                    id="image"
                />
            </div> */}



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