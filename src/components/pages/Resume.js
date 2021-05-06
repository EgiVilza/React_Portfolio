import React from "react"
import "../scss/style.css"
import resume from "../Images/resume.pdf"

function Resume() {
    return (
        <div>
            {/* <p className="note">To Be Updated</p> */}
            <object className="resume" data={resume + "#view=FitH"} type="application/pdf">
            </object>
        </div>    
    )
}

export default Resume