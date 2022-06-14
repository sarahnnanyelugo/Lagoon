import React from 'react'
import styled from 'styled-components';

export default function Inquire() {

    const Check = [
      {
        title: "Inquire",
        link: "/admission/admission-proceedure",
      },
      {
        title: "Apply",
        link: "https://lagoonweb.eschoolng.net/primary/application/start_application.php",
        target: "_blank",
      },
      {
        title: "Visit Us",
        link: "/about/virtual-tour",
      },
    ];

  return (
    <List>
        {Check.map((check, idx)=>{
            return(
                <li key={idx}>
                    <a href={check.link} target={check.target?check.target:"_parent"}>{check.title}</a>
                </li>
            )
        })
            
        }
    </List>
  )
}


const List = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-between;
  list-style: none;
  transition: all 0.5s linear;
  margin: 5rem auto 4rem auto;
  padding: 0;
  li {
    border: 2px solid red;
    padding: 10px 10px;
    width: 20%;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: red;

      a {
        color: #fff;
      }
    }

    a {
      font-size: 22px;
      color: red;
      font-weight: 900;
      text-decoration: none;
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display:block;
    li{
      width:100%;
      margin:10px;
      
    }
  }
`;