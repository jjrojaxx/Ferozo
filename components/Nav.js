// Imports
import styled from "styled-components";
import Image from "next/image";
import LogoImg from "../public/images/Logo.svg";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Nav() {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };
  //Styles
  const Menu = styled.div`
    background-color: #3b2c76;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1033px) {
      padding: 16px;
    }
  `;
  const Logo = styled.div`
    padding: 0;
    margin: 0;
  `;
  const ContainerMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1250px;
    nav {
      display: flex;
      align-items: center;
      @media (max-width: 1033px) {
        display: none;
      }
      ul {
        display: flex;
        flex-direction: row;
        li {
          list-style: none;
          padding: 0 16px;
          a {
            color: #fff;
            font-size: 16px;
            text-decoration: none;
            font-weight: 400;
            font-family: "roboto";
            transition: all 300ms;
            &:hover {
              color: #9e04ff;
            }
          }
        }
      }
    }
  `;
  const ItemsThree = styled.div`
    margin-left: 18px;
    @media (max-width: 1033px){
      margin-left: 0px;  
      margin-top: 24px;
    }
  `;
  const BtnWihte = styled.button`
    padding: 8px 35px;
    border-radius: 100px;
    border: none;
    color: #3a2b74;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 12px;
    transition: all 300ms;
    background-color: #fff;
    &:hover {
      background-color: #f1f1f1;
      color: #9e04ff;
    }
  `;
  const BtnTrans = styled.button`
    padding: 8px 35px;
    border-radius: 100px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 15px;
    transition: all 300ms;
    border: 1px solid;
    background-color: transparent;
    &:hover {
      background-color: rgb(241, 241, 241);
      color: #3a2b74;
      border: 1px solid;
    }
  `;
  const IconLogoMobile = styled.div`
    color: #fff;
    font-size: 28px;
    display: none;
    transition: all 300ms;
    &:hover {
      color: #3a2b74;
    }
    @media screen and (max-width: 1033px) {
      display: block;
      padding-top: 10px;
      animation-delay: 1s;
    }
  `;
  const MenuMobile = styled.nav`
    padding: 20px 32px;
    position: absolute;
    top: 0; 
    height: 100%;
    transition: all 300ms;
    backdrop-filter: blur(8px);
    left: ${({click}) => (click ? '-400px' : 0 )};
    background-color: #3b2c76;
    img{
      margin-bottom: 28px;
    }
    ul{

      li{
        list-style: none;
        padding: 20px 0px;
        transition: all 300ms;
        border-radius: 15px;
        &:hover {
          background-color: rgba(255, 255, 255, 0.171);
          padding: 20px 0px 20px 20px;
        }
        a{
          text-decoration: none;
          color: #fff;
        }
      }
    }
  `;
  //Code
  return (
    <Menu>
      <ContainerMenu>
        <Logo>
          <Image src={LogoImg} />
        </Logo>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/ConsultingDevaster">Consulting Devaster</Link>
            </li>
            <li>
              <Link href="/StaffingDevaster">Staffing Devaster</Link>
            </li>
          </ul>
          <ItemsThree>
            <BtnWihte>Lorem</BtnWihte>
            <BtnTrans>Lorem</BtnTrans>
          </ItemsThree>
        </nav>
        <IconLogoMobile onClick={() => ChangeClick()}>
          {click ? <FaBars /> : <FaTimes />}
        </IconLogoMobile>
      </ContainerMenu>

      <MenuMobile click={click}>
      <Logo>
          <Image src={LogoImg} />
      </Logo>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
          <li>
            <Link href="/ConsultingDevaster">Consulting Devaster</Link>
          </li>
          <li>
            <Link href="/StaffingDevaster">Staffing Devaster</Link>
          </li>
        </ul>
        <ItemsThree>
          <BtnWihte>Lorem</BtnWihte>
          <BtnTrans>Lorem</BtnTrans>
        </ItemsThree>
      </MenuMobile>
    </Menu>
  );
}
