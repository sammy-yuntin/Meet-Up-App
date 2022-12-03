import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(){
    const titleInputRef = useRef();
    const imageInputref = useRef();
    const addressInputref = useRef();
    const descriptionInputref = useRef();

    

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputref.current.value;
        const enteredAddress = addressInputref.current.value;
        const enteredDescription = descriptionInputref.current.value;
    
        const meetupData = {
            title: enteredTitle,
            address: enteredAddress,
            image: enteredImage,
            description: enteredDescription
        };
    
        console.log(meetupData)
    
    } 


    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title" className={classes.label}>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image" className={classes.label}>Meetup Image</label>
                    <input type="url" required id="image" ref ={imageInputref}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="address" className={classes.label}>Meetup Address</label>
                    <input type="text" required id="text" ref ={addressInputref}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description" className={classes.label}>Meetup Description</label>
                    <textarea type="text" required id="description" rows="5"  ref={descriptionInputref}/>
                    
                </div>

                <div className={classes.actions}>
                        <button type="submit">Add Meetup</button>
                </div>

            </form>
        </Card>
    )
}
export default NewMeetupForm;