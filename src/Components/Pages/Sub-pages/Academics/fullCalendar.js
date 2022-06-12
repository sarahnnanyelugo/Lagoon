import React, { useEffect } from "react";
import styled from "styled-components";
import { subRoute } from "./Acaitems";

import Backdrop from "../../../../Assets/Backdrop.png";
import Calendar1 from "../../../../Assets/calendarimg.png";

import Calendar2 from "../../../../Assets/calendarimg2.png";

import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";


import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./fullCalendar.css";

// import "react-accessible-accordion/dist/fancy-example.css";


export default function fullCalendar() {
  const currentPath = window.location.pathname;



  function handleChange(e) {
    let link = e.target.value;
    console.log(link);
    window.location = link;
  }


  return (
    <Container>
      <div className="placeholder2">
        <img src={Backdrop} alt="placeholder" />
        <div className="overlay">
          <ul>
            {subRoute?.map((sub, idx) => {
              return (
                <li key={idx}>
                  <a
                    className={sub.cName}
                    href={sub.path}
                    style={{
                      color:
                        sub.path.toString() === currentPath.toString()
                          ? "red"
                          : "",
                      backgroundColor:
                        sub.path.toString() === currentPath.toString()
                          ? "#fff"
                          : "",
                      padding:
                        sub.path.toString() === currentPath.toString()
                          ? "20px"
                          : "",
                      border:
                        sub.path.toString() === currentPath.toString()
                          ? "2px solid red"
                          : "",
                      borderRadius:
                        sub.path.toString() === currentPath.toString()
                          ? "20px"
                          : "",
                    }}
                  >
                    {sub.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="col-md-12 flexy calendar">
        <div className="col-md-4">
          {" "}
          <h1>Calendar</h1>
          <Accordion className="accord">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordbutton">
                  <h3>Academic Calendars</h3>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordbutton">
                  <h3>Atheletic Activities</h3>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="col-md-4">
          <img src={Calendar1} alt="calendar" />
        </div>
        <div className="col-md-4">
          <img src={Calendar2} alt="calendar" />
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "Reunion", date: "2022-06-10" },
              { title: "Graduation", date: "2022-06-11" },
              { title: "Inter-house Sports", date: "2022-06-21" },
              { title: "Open day", date: "2022-06-19" },
              { title: "Social day", date: "2022-06-11" },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}



const Container = styled.section`
  .placeholder2 {
    height: 37rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;

      ul {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        /* height:100% ; */
        align-items: baseline;
        position: absolute;
        bottom: 30%;

        li {
          display: flex;
          flex-direction: column;
          /* height:70% ; */
          align-items: baseline;
          justify-content: flex-end;

          a {
            text-decoration: none;
            font-size: 1.5rem;
            color: #fff;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  header {
    grid-column: 1/3;
    text-align: center;
    color: red;
    font-size: 2rem;
    margin-top: 30px;
  }
`;