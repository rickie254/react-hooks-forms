import React, {useState} from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent(){
    const [formData, setFormData] = useState(
        {
        firstName: "",
        lastName: ""
        }
    )
    function handleFormChange(e){
        setFormData(prevFormData => {
            return({
            ...prevFormData,
            [e.target.name]:e.target.value
            }
            )
        })
    }
    return(
        <div>
            <Form 
                firstName={formData.firstName}
                lastName={formData.lastName}
                handleFormChange={handleFormChange}
            />
            <DisplayData 
                firstName={formData.firstName}
                lastName={formData.lastName}
            />
        </div>
    )
}

export default ParentComponent