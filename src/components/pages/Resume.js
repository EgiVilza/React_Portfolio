import React from "react"
import "../scss/style.css"
// import resume_1 from "../Images/resume_1.jpg"
// import resume_2 from "../Images/resume_2.jpg"
import resume from "../Images/Resume_Portfolio.pdf"

function Resume() {
    return (
        <div>
            {/* <p className="note">To Be Updated</p> */}
            {/* <object className="resume" data={resume + "#view=FitH"} type="application/pdf">
            </object> */}
            <embed className="resume" src={resume + "#view=FitH"}></embed>
            {/* <img className="resume" src={resume_1}/>
            <img className="resume" src={resume_2}/> */}
        </div>    
    )
}

export default Resume