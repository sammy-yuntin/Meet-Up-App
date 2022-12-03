import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(){
    return(
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title" className={classes.label}>Meetup Title</label>
                    <input type="text" required id="title"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image" className={classes.label}>Meetup Image</label>
                    <input type="url" required id="image"/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="address" className={classes.label}>Meetup Address</label>
                    <input type="text" required id="text"/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description" className={classes.label}>Meetup Description</label>
                    <textarea type="text" required id="description" rows="5" />
                    
                </div>

                <div className={classes.actions}>
                        <button type="submit">Add Meetup</button>
                </div>

            </form>
        </Card>
    )
}
export default NewMeetupForm;