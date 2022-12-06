import classes from "./MeetupItem.module.css"
import Card from "../ui/Card";
import {useContext} from "react"
import FavoriteContext from "../../store/favorites-context";

function MeetupItem(props){
    const favoritesCtx = useContext(FavoriteContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if (itemIsFavorite) {
            alert("this meetup was a favorite but will now be un-favorited")
            favoritesCtx.removeFavorite(props.id);
        } else {
            alert("this meet was not a favorite, but will now be made one")
            favoritesCtx.addFavorite({
                id : props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address
            });
        }
    }
    return(
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>


                </div>
                <div>
                <h3>{props.title}</h3> 
                <address>{props.address}</address>
                <p>{props.description}</p>
                </div>
                <div >
                    <button className={classes.action} onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite? "Un-Favorite" : "To Favorite"}
                    </button>
                </div>
                
                
                
            </li>
        </Card>
        
    )
}
export default MeetupItem;