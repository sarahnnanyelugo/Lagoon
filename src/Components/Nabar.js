import React,{useState} from 'react';
import styled from 'styled-components';
import Logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom';
import {navMenus} from './MenuItems';
import Dropdown from './Dropdown';



export default function Nabar() {
    const [click , setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
  
    const [activeMenu, setActiveMenu] = useState({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false,
    })
  
    const onMouseEnter = (e) => {
        console.log(e.target.text)
      const menuText = e.target.text.trim().toLowerCase() || 'about';
  
      if (window.innerWidth < 960){
        setDropdown(false);
      }else{
        setActiveMenu({
          menu1: menuText === 'about',
          menu2: menuText === 'academics',
          menu3: menuText === 'admission',
          menu4: menuText === 'faith',
          menu5: menuText === 'studentlife ',
          menu6: menuText === 'parents '
          
        })
      }
  
    }
  
    const onMouseLeave = () =>{
      if(window.innerWidth < 960){
        setDropdown(false);
      }else{
        setActiveMenu({
          menu1: false,
          menu2: false,
          menu3: false,
          menu4: false,
          menu5: false,
          menu6: false,
        })
      }
    };
  
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <NavbarContainer>
        <ContactNavbar>
            <ul className="navcont">
                <li className='list1'>  (+234) 01 3426109 &nbsp; (+234) 704 442 7923</li>
                <li className='list2'>info@lagoonschool.com.ng</li>
            </ul>
        </ContactNavbar>
        <DetailsNavbar>
            <Link to={'/'} className='home'>
                <img src={Logo} alt="logo" />
            </Link>
            <div className='menu-item'></div>
            <div className='list-container'>
                <ul className='link-up'>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> About </Link>      {activeMenu.menu1 && <Dropdown menuArray={navMenus.about}/>}</li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> Academics </Link>      {activeMenu.menu2 && <Dropdown menuArray={navMenus.academics}/>}</li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> Admission </Link>      {activeMenu.menu3 && <Dropdown menuArray={navMenus.admission}/>}</li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> Faith </Link>      {activeMenu.menu4 && <Dropdown menuArray={navMenus.faith}/>}</li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> Student Life </Link>      {activeMenu.menu5 && <Dropdown menuArray={navMenus.studentlife}/>}</li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> Parents </Link>      {activeMenu.menu6 && <Dropdown menuArray={navMenus.parents}/>}</li>
                </ul>
                <Button>
                    PORTAL
                </Button>
            </div>
            
        </DetailsNavbar>
    </NavbarContainer>
  )
}





const NavbarContainer = styled.nav``

const ContactNavbar = styled.div`
    position:relative ;
    width:100% ;
    display: flex ;
    flex-direction:column;
    text-align:center ;
    height: 60px ;
    justify-content: center;
    padding-left:20px  ;

    .navcont{
        padding: 0;
        list-style:none;
        margin:0 ;
        display:flex ;
        gap:3rem;


        .list1{
            font-size:clamp(0.9rem, 2vw, 1rem);
            
            &:before{
                content: '🕿';
                padding-right:10px ;
                font-size:clamp(1.1rem, 2vw, 0.9rem);
                color: red;

            }
        }

        .list2{
            font-size:clamp(0.9rem, 2vw, 1rem);
            
            &:before{
                content: '🖂';
                padding-right:10px ;
                color: red;
                font-size:clamp(0.9rem, 2vw, 1rem);

            }
        }


    }
`

const DetailsNavbar = styled.div`
    display:flex ;
    width:100% ;
    justify-content:space-between ;
    background-color:#e21020;
    z-index:100 ;
    position:relative ;
.home{
    img{
        height:6vw;
    }
}

.menu-item{
    display:none;
}
.list-container{
    display:flex ;
    padding-right: 4%;

  .link-up{
      display:flex ;
      gap:3rem;
      list-style:none ;
      padding-right: 2rem;
    li{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        cursor: pointer;

      a{
          text-decoration:none;
          font-size:clamp(1rem, 6vw, 1.3rem);
          color:#fff ;
      }}
  }}

`

const Button = styled.button`
    height: 40px;
    position: relative;
    top:36% ;
    width: 6rem ;
    background-color:#e21020;
    color:#fff ;
    border: none;
    box-shadow: 0 5px 7px 7px rgba(0, 0 , 0, 0.2);
    transition:all 0.5s ease ;
    font-size:clamp(.9rem, 6vw, 1rem);
    font-weight:900;
    &:hover{
        transform:scale(1.1);
        cursor:pointer;
    }
`
