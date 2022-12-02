import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
   

function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/"> All meetUps</Link></li>
                    <li><Link to="/new-meetups"> Add New meetUps</Link></li>
                    <li><Link to="/favs"> My Favorite meetups</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation