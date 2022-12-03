import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from "react-router-dom"

function NewMeetup(){
    
    const history = useNavigate();

    function addMeetupHandler(meetupData){
        fetch("https://second-attempt-for-meetupapp-default-rtdb.firebaseio.com/meetups.json", 
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then( function thenHandler() {
            history("/");
            alert("Data Submitted")
        });
    }

    return(
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}
export default NewMeetup