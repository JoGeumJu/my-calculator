import Link from "next/link";

import styled from "@emotion/styled";
import { FcCalculator, FcSettings, FcAbout } from "react-icons/fc";

export default function Navbar() {
  return (
    <Wrapper>
      <Nav>
        <Menus>
          <Menu>
            <Link href="/">
              <MenuCal>
                <IconCal />
              </MenuCal>
            </Link>
          </Menu>
          <Menu>
            <Link href="/setting">
              <MenuSetting>
                <IconSetting />
              </MenuSetting>
            </Link>
          </Menu>
          <Menu>
            <Link href="/about">
              <MenuAbout>
                <IconAbout />
              </MenuAbout>
            </Link>
          </Menu>
        </Menus>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin: 0 15px;
`;
const Menus = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;
const Menu = styled.li`
  margin: 10px;
`;
// menu_cal
const MenuCal = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 3px 3px 3px 0px #999999;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;
const IconCal = styled(FcCalculator)`
  width: 32px;
  height: 32px;
`;
// menu_setting
const MenuSetting = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 3px 3px 3px 0px #999999;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;
const IconSetting = styled(FcSettings)`
  width: 32px;
  height: 32px;
`;
// menu_about
const MenuAbout = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 3px 3px 3px 0px #999999;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;
const IconAbout = styled(FcAbout)`
  width: 32px;
  height: 32px;
`;
