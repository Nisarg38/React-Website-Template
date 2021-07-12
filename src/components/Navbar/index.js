import React,{useState,useEffect} from 'react';
import {FaBars}  from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {


  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => { 
    if(window.scrollY >= 80)
      setscrollNav(true);
    else
      setscrollNav(false);
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav);
  },[]);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

    return (
        <>
            <Nav scroll={scrollNav}>
          
                <NavbarContainer>           
                    <NavLogo to="/" onClick={toggleHome}>Name</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                       <NavItems>
                          <NavLinks to="Page1" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Page1</NavLinks>
                        </NavItems> 
                        <NavItems>
                          <NavLinks to="Page2" >Page2</NavLinks>
                        </NavItems> 
                        <NavItems>
                          <NavLinks to="Page3" >Page3</NavLinks>
                        </NavItems> 
          
                    </NavMenu>
                    <NavBtn>
                        <a href="https://github.com/Nisarg38" target="_blank" rel="noopener noreferrer" className="git"  >
                          <img alt="github" src="https://raw.githubusercontent.com/Nisarg38/Sorting-Algo-Visualizer-Js/main/images/GitHub-Mark-Light-120px-plus.png"
                          width="40" height="40" / >
                        </a>
                        <a href="https://github.com/Nisarg38" target="_blank" rel="noopener noreferrer" className="repo"   >
                          <img alt="github" src="https://raw.githubusercontent.com/Nisarg38/Sorting-Algo-Visualizer-Js/main/images/1331-repository-outline%20(1).gif"
                          width="80" height="80"  />
                        </a>
                        <a href="https://github.com/Nisarg38" target="_blank" rel="noopener noreferrer" className="git" >
                          <img alt="github" src="https://raw.githubusercontent.com/Nisarg38/Sorting-Algo-Visualizer-Js/main/images/GitHub-Mark-Light-120px-plus.png"
                          width="40" height="40"  />
                        </a>
              
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
