//import React from 'react';
import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import styles from '../styles/UpcomingEvents.module.scss';
import Event from './Event';
import axios from 'axios';
//import Col from "react-bootstrap/Col";
//import Row from "react-bootstrap/Row";

function UpcomingEvents() {
    const [events, getEvents] = useState([]);
    //const url = 'http://localhost:3000/';

    useEffect( () => {
        getAllEvents();
    }, []);

    const getAllEvents = () => {
        axios.get('/api/events')
        .then((response) => {
            console.log(response);
            const allEvents = response.events;
            getEvents(allEvents);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <div>
        <Container className="py-2 experiences">
            <h1 className={styles.upcoming_events}>Upcoming Events</h1>
            <Event
                id="1"
                name="Vonage API Workshop"
                event_typ="workshop"
                permission="private"
                start_time="1610442000000"
                end_time="1610443800000"
                description="A Nanoleaf Shapes Mini Triangle Smarter Kit will be awarded to each member of the winning team for Best Use of Vonage API. Vonage is a cloud communications platform that allows developers to integrate voice, video and messaging into their applications using their communication APIs. So whether you want to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers, Vonage has got you covered"
                speakers={[
                    {
                        name: "Vonyage"
                    }
                ]}
                public_url=""
                private_url="https://hopin.com/events/hack-the-north-2020"
                related_events={[
                    "2",
                    "3",
                ]}
            />
            <Event
                id="2"
                name="Rapid Prototyping with Flutter and Firebase"
                event_typ="tech_talk"
                permission="public"
                start_time="1610442000000"
                end_time="1610447400000"
                description="Ever need to make an app quickly, such as for a hackathon or prototype, but not know where to start? In this talk you will learn about Flutter, Google's cross-OS development platform, as well as Firebase, Google's Backend as a Service (BaaS) platform, and how they can be used to quickly take your ideas and turn them into beautiful and functional prototypes. We will discuss multiple useful widgets, third-party plugins, and how to implement various features of Firebase that can support your users. This talk will cover code implementations as well as theory."
                speakers={[
                    {
                        name: "Firebase"
                    }
                ]}
                public_url="https://youtu.be/koxjhSHvnGo"
                private_url="https://hopin.com/events/hack-the-north-2020"
                related_events={[
                    "1",
                    "3",
                ]}
            />
            <Event
                id="6"
                name="Intro to GraphQL"
                event_typ="tech_talk"
                permission="public"
                start_time="1610526600000"
                end_time="1610530200000"
                description="You’ve been working with REST APIs for a while now, and you’re sick of it. Data fetching is difficult, you can’t specify what data you need, adding on features feels tacky… it feels wrong. This is where the future of networking architecture lies: GraphQL! In this workshop, you’ll learn what all the hype surrounding this graph-based query language is about, and even how to build hyper scalable APIs using its awesome new data constructs!"
                speakers={[
                    {
                        name: "Rishi Kothari 🍦",
                        profile_pic: "https://hackthenorth.com/img/schedule/RishiKothari.png"
                    }
                ]}
                public_url="https://youtu.be/koxjhSHvnGo"
                private_url="https://hopin.com/events/hack-the-north-2020"
                related_events={[
                    "7",
                    "8",
                    "9",
                    "10",
                ]}
            />
        </Container>
        </div>
    );
}

export default UpcomingEvents;
/*
 <Event
    id={event.id}
    name={event.name}
    event_typ={event.event_typ}
    permission={event.permission}
    start_time={event.start_time}
    end_time={event.end_time}
    description={event.description}
    speakers={event.speakers}
    public_url={event.public_url}
    private_url={event.private_url}
    related_events={event.related_events}
 />
            
<Event
                    id="1"
                    name="Wow"
                    event_typ="workshop"
                    permission="private"
                    start_time="1610442000000"
                    end_time="1610443800000"
                    description="A Nanoleaf Shapes Mini Triangle Smarter Kit will be awarded to each member of the winning team for Best Use of Vonage API. Vonage is a cloud communications platform that allows developers to integrate voice, video and messaging into their applications using their communication APIs. So whether you want to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers, Vonage has got you covered"
                    speakers={[
                        {
                        name: "Vonyage",
                        profile_pic: "https://hackthenorth.com/img/schedule/Kristy%20Gao.png"
                        }
                    ]}
                    public_url=""
                    private_url="https://hopin.com/events/hack-the-north-2020"
                    related_events={[
                        "2",
                        "3",
                    ]}
                />
                */

                /*
    
    {events.map(event => (
                <p>{event.id}</p>
            ))}*/

            //<p> {events.length > 0 ? "a" : "no"}</p>