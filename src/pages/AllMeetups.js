import React from "react";
import MeetupList  from "../components/meetups/MeetupList";

const DummyData = [
    {
        id:"m1",
        title:"This is a first meetup",
        adress:"Meetup street 5, 1245 Meetup city",
        description: "This is a first meetup which you definitely should not miss. it will be very interesting",
        image: "https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/317660056_527704742712704_3041821442636757010_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeETbvoWgdOONLY4SKroAdd2l3pG47cUURiXekbjtxRRGKOhf1EjLwPfDa2dOHsGGErR_3Ec81mgATfm95DKhxvE&_nc_ohc=wYajRRxYbvwAX_2GgAc&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfC79IbYMeVFmfQmFLwQ77eDyTwnMhz-7TmtB1lUtw77pw&oe=638EFDA3"
    },
    {
        id:"m2",
        title:"This is a second meetup",
        adress:"Meetup street 5, 1245 Meetup city",
        description: "This is a second meetup which you definitely should not miss. it will be very interesting",
        image: "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/317489355_527688106047701_8382225895082380340_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEH9gwJGr6ZTnAV-bdkgJNBWmQA2vYor5haZADa9iivmBnXqFh2MqcIjaHzcR7IXQYexbpabPJf9V_b9vEPQwTs&_nc_ohc=1O7pBSwpGEAAX-MZ8he&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AfBVdrRurAy-JtdqEOh9OvJYLVsC1LzwIXdhxFj__QpMCg&oe=638EE585"
    }
 ]

function AllMeetups(){
    return(
        <section>
            <h1>AllMeetups page</h1>
            <MeetupList meetups={DummyData}/>
            {/*  {[<ul ><li  key = {DummyData.id}>Item 1</li><li>Item 2</li> <li>Item 3</li></ul>]} */}
        </section>
    )
}

export default AllMeetups