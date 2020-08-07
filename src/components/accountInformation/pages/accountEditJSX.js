import React from "react"


const AccountEditJSX = props => {
    


    return(
        <section className="accountChild">
          
          <div className="title-forum"><h1>Account Update</h1></div>  

          <section className="email--username">
              <section className="email">
            <label htmlFor="genus">Email: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="email"

                    value={props.user.email}
                />
                </section>

<section className="email">

<label htmlFor="genus">Username: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="username"

                    value={props.user.username}
                />
                </section>
                </section>
                <section className = "cloud--image-selection">
                <label htmlFor="cloud--image">Select Profile Image</label> 
                <section className="cloud--imageSection">
                   
                    <div>
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1123_yaolse.jpg" alt="profile fossil image" />
                        <input onChange={props.handleFieldChange}  id="userImage" type="radio" name="cloud--image" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1123_yaolse.jpg" className="cloud--image"></input>
                       
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1116_vgck5i.jpg" alt="profile fossil image" />
                        <input id="userImage" name="cloud--image" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1116_vgck5i.jpg" className="cloud--image"></input>
                       
                        
                       
                        
                        
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1118_ikvo4j.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1118_ikvo4j.jpg"  className="cloud--image"></input>
                      
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1120_of7gsg.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1120_of7gsg.jpg" className="cloud--image"></input>
                        </div>





                        <div>
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1119_djf1x9.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1119_djf1x9.jpg" className="cloud--image"></input>
                      
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1117_qcwpve.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1117_qcwpve.jpg"  alt="profile fossil image" className="cloud--image"></input>
                     
                        

                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1115_f0qpi3.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1115_f0qpi3.jpg" className="cloud--image"></input>
                      
                        
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1113_fvrm6r.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503386/IMG_1113_fvrm6r.jpg" className="cloud--image"></input>
                        </div>



                        <div>
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503385/IMG_1121_srfw3p.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503385/IMG_1121_srfw3p.jpg" className="cloud--image"></input>
                       
                       
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503385/IMG_1122_emkupd.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503385/IMG_1122_emkupd.jpg"  className="cloud--image"></input>
                      
                       

                       
                        <img className="cloud--image" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596503385/IMG_1125_r6dvj4.jpg" alt="profile fossil image" />
                        <input name="cloud--image" id="userImage" onChange={props.handleFieldChange}  type="radio" value="https://res.cloudinary.com/drcnakesm/image/upload/v1596503385/IMG_1125_r6dvj4.jpg" className="cloud--image"></input>
                        </div>
                      
                       
                       

                </section>
                </section>
                
                


    
   <div className="btnAcct"><button className="forumbtn" onClick={props.updateUser}>Submit</button></div> 
</section>
        
        )
}

export default AccountEditJSX