import React, { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import {
  fontSizeState,
  fontStyleState,
  themeModeState,
  themeColorState,
} from "../../recoil/themeStates";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";

import ReactModal from "react-modal";
ReactModal.setAppElement("body");

import styled from "@emotion/styled";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { FaTag, FaCaretLeft, FaCaretRight, FaCheck } from "react-icons/fa";
import { MdBrightness5, MdDarkMode } from "react-icons/md";

import SettingModal from "../../components/Modal/SettingModal";

import ThemeData from "../../data/ThemeData.json";
import FontStyleData from "../../data/FontStyleData.json";

interface Props {
  value?: number | string;
  is_hover_font_size?: string;
  theme?: (string | number)[];
}
interface Theme {
  thememode: (string | number)[];
}

export default function Setting(props: Props) {
  // recoil
  const [fontSizeG, setFontSizeG] = useRecoilState(fontSizeState);
  const [fontStyleG, setFontStyleG] = useRecoilState(fontStyleState);
  const [themeModeG, setThemeModeG] = useRecoilState(themeModeState);
  const [themeColorG, setThemeColorG] = useRecoilState(themeColorState);
  const updateG = () => {
    setFontSizeG(fontSizeValue);
    setFontStyleG(fontStyleValue);
    setThemeModeG(themeModeValue);
    setThemeColorG(themeColorValue);
  };

  // fontSize
  const [fontSizeValue, setFontSizeValue] = useState(fontSizeG);
  const onChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSizeValue(Number(e.target.value));
  };
  const [isHoverFontSize, setIsHoverFontSize] = useState("notHover");
  // fontStyle
  const [fontStyleValue, setFontStyleValue] = useState(fontStyleG);
  const onChangeFontStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontStyleValue(e.target.value);
  };
  // theme
  const [themeModeValue, setThemeModeValue] = useState(themeModeG);
  const [themeColorValue, setThemeColorValue] = useState(themeColorG);

  // MemoModal handling
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const [contextSettingModal, setContextMemoModal] =
    useState("설정값이 성공적으로 바뀌었습니다");
  const handleSettingModal = () => {
    setIsOpenSettingModal(true);
    setTimeout(function () {
      setIsOpenSettingModal(false);
    }, 3000);
  };

  SwiperCore.use([Navigation]);

  return (
    <Wrapper>
      <SettingModal
        isOpenModal={isOpenSettingModal}
        context={contextSettingModal}
      />
      <InnerWrap>
        <DivFontSize>
          <DivTextArea>
            <PFontSize>글씨크기</PFontSize>
            <ExFontSize value={fontSizeValue}>Aa</ExFontSize>
          </DivTextArea>
          <DivInputArea
            onMouseEnter={() => setIsHoverFontSize("hover")}
            onMouseLeave={() => setIsHoverFontSize("notHover")}
          >
            <BtnMinus
              onClick={() => {
                setFontSizeValue(fontSizeValue - 1);
              }}
            >
              <IconMinus thememode={themeModeG} />
            </BtnMinus>
            <InputFontSize
              type={"range"}
              name="font_size"
              min={10}
              max={40}
              step={1}
              value={fontSizeValue}
              onChange={onChangeFontSize}
            ></InputFontSize>
            <BtnPlus
              onClick={() => {
                setFontSizeValue(fontSizeValue + 1);
              }}
            >
              <IconPlus thememode={themeModeG} />
            </BtnPlus>
            <TagFontSize
              is_hover_font_size={isHoverFontSize}
              thememode={themeModeG}
            ></TagFontSize>
            <TagText
              is_hover_font_size={isHoverFontSize}
              thememode={themeModeG}
            >
              {fontSizeValue}
            </TagText>
          </DivInputArea>
        </DivFontSize>
        <DivFontStyle>
          <DivTextArea>
            <PFontStyle>글씨체</PFontStyle>
            <ExFontStyle value={fontStyleValue}>가나다라</ExFontStyle>
          </DivTextArea>
          {/* 글씨체 추가 1. global.css추가  2. Option추가*/}
          <SelFontStyle
            name="font_style"
            value={fontStyleValue}
            onChange={onChangeFontStyle}
          >
            {FontStyleData.map((item) => (
              <OptionFontStyle
                key={item.id}
                value={item.name}
                style={{
                  background: "#313131",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </OptionFontStyle>
            ))}
          </SelFontStyle>
        </DivFontStyle>
        <DivTheme>
          <DivTextArea>
            <PTheme>테마</PTheme>
          </DivTextArea>
          <SwiperTheme>
            <Swiper
              className="swiper_container"
              modules={[Navigation]}
              initialSlide={Number(themeModeValue[0])}
              slidesPerView="auto"
              slidesPerGroup={1}
              spaceBetween={10}
              centeredSlides={true}
              loop={true}
              loopedSlides={3}
              scrollbar={{ draggable: true, el: null }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {ThemeData.map((idx) => (
                <SwiperSlide
                  className="swiper_slide"
                  style={{ position: "relative", width: "165px" }}
                  key={idx.id}
                >
                  <ImgTheme src={idx.src} />
                  <BrightChooseTheme
                    id={idx.id}
                    theme={themeModeValue}
                    onClick={() => {
                      setThemeModeValue([idx.id, 0]);
                      setThemeColorValue({
                        color0: [idx.color[0].rgb, idx.color[0].fontColor],
                        color1: [idx.color[1].rgb, idx.color[1].fontColor],
                        color2: [idx.color[2].rgb, idx.color[2].fontColor],
                        color3: [idx.color[3].rgb, idx.color[3].fontColor],
                        color4: [idx.color[4].rgb, idx.color[4].fontColor],
                      });
                    }}
                  >
                    <IconBrightChoose />
                  </BrightChooseTheme>
                  <NightChooseTheme
                    id={idx.id}
                    theme={themeModeValue}
                    onClick={() => {
                      setThemeModeValue([idx.id, 1]);
                      setThemeColorValue({
                        color0: [idx.color[0].rgb, idx.color[0].fontColor],
                        color1: [idx.color[1].rgb, idx.color[1].fontColor],
                        color2: [idx.color[2].rgb, idx.color[2].fontColor],
                        color3: [idx.color[3].rgb, idx.color[3].fontColor],
                        color4: [idx.color[4].rgb, idx.color[4].fontColor],
                      });
                    }}
                  >
                    <IconNightChoose />
                  </NightChooseTheme>
                </SwiperSlide>
              ))}
            </Swiper>
            <NextTheme className="swiper-button-prev">
              <IconNextTheme thememode={themeModeG} />
            </NextTheme>
            <PrevTheme className="swiper-button-next">
              <IconPrevTheme thememode={themeModeG} />
            </PrevTheme>
          </SwiperTheme>
        </DivTheme>
        <BtnApply
          onClick={() => {
            handleSettingModal();
            updateG();
          }}
          thememode={themeModeG}
        >
          <IconApply thememode={themeModeG} />
        </BtnApply>
      </InnerWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: none;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const DivTextArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;
  height: 26px;
  align-items: flex-end;
  justify-content: space-between;
`;
const DivInputArea = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  
`;
// font-size
const DivFontSize = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 70px;
`;
const PFontSize = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
`;
const ExFontSize = styled.p<Props>`
  font-size: ${(props) => props.value}px;
  padding: 0;
  margin: 0;
`;
const InputFontSize = styled.input`
  display: flex;
  position: relative;
  margin: 0 2px;
  cursor: pointer;
`;
const BtnPlus = styled.a`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const IconPlus = styled(HiPlusCircle)<Theme>`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.thememode[1] === 0 ? "color: #313131;" : "color: #ffffff;"}
`;
const BtnMinus = styled.a`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const IconMinus = styled(HiMinusCircle)<Theme>`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.thememode[1] === 0 ? "color: #313131;" : "color: #ffffff;"}
`;
const TagFontSize = styled(FaTag)<Props & Theme>`
  display: ${(props) =>
    props.is_hover_font_size === "hover" ? "flex" : "none"};
  position: absolute;
  width: 29px;
  height: 29px;
  bottom: -33px;
  right: 7px;
  transform: rotate(45deg);
  ${(props) => (props.thememode[1] === 0 ? "color:#313131;" : "color:#ffffff;")}
  transition: 0.3s ease;
`;
const TagText = styled.p<Props & Theme>`
  display: ${(props) =>
    props.is_hover_font_size === "hover" ? "flex" : "none"};
  position: absolute;
  margin: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  bottom: -44px;
  right: -2px;
  ${(props) => (props.thememode[1] === 0 ? "color:#ffffff;" : "color:#313131;")}
  font-size: 12px;
  transition: 0.3s ease;
`;

// font-style
const DivFontStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 70px;
`;
const PFontStyle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
`;
const ExFontStyle = styled.p<Props>`
  font-family: ${(props) => props.value};
  padding: 0;
  margin: 0;
  font-size: 16px;
`;
const SelFontStyle = styled.select`
  height: 23px;
  padding: 3px 5px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 0px #999999;
  font-family: inherit;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
`;
const OptionFontStyle = styled.option``;
// theme
const DivTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 70px;
`;
const PTheme = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
`;
const SwiperTheme = styled.div`
  display: flex;
  position: relative;
  width: 515px;
  overflow: visible;
`;
const ImgTheme = styled.img`
  width: 165px;
  border-radius: 15px;
  cursor: pointer;
`;
const BrightChooseTheme = styled.div<Props>`
  display: flex;
  position: absolute;
  top: 50%;
  left: 29.5%;
  padding: 4px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  transform: translate(-50%, -50%);
  background-color: rgba(31, 31, 31, 0.2);
  cursor: pointer;
  &:hover {
    background-color: rgba(31, 31, 31, 0.6);
  }
  ${(props) =>
    props.id === props.theme[0] &&
    props.theme[1] === 0 &&
    "box-shadow: 0px 0px 6px 3px rgb(255, 82, 82); backgroundColor: rgba(31, 31, 31, 0.6);"}
`;
const IconBrightChoose = styled(MdBrightness5)`
  width: 100%;
  height: 100%;
  color: #ffcc5e;
`;
const NightChooseTheme = styled.div<Props>`
  display: flex;
  position: absolute;
  top: 50%;
  right: 29.5%;
  padding: 3px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transform: translate(50%, -50%);
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
  ${(props) =>
    props.id === props.theme[0] &&
    props.theme[1] === 1 &&
    "box-shadow: 0px 0px 6px 3px rgb(255, 82, 82); backgroundColor: rgba(255, 255, 255, 0.6);"}
`;
const IconNightChoose = styled(MdDarkMode)`
  width: 100%;
  height: 100%;
  color: #49473d;
`;
const NextTheme = styled.div`
  display: flex;
  position: absolute;
  z-index: 700;
  top: 50%;
  left: -23px;
  transform: translate(0, -50%);
  width: 25px;
  height: 25xp;
  cursor: pointer;
`;
const IconNextTheme = styled(FaCaretLeft)<Theme>`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.thememode[1] === 0 ? "color: #313131;" : "color: #ffffff;"}
`;
const PrevTheme = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: -23px;
  transform: translate(0, -50%);
  z-index: 700;
  width: 25px;
  height: 25xp;
  cursor: pointer;
`;
const IconPrevTheme = styled(FaCaretRight)<Theme>`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.thememode[1] === 0 ? "color: #313131;" : "color: #ffffff;"}
`;
const BtnApply = styled.button<Theme>`
  ${(props) =>
    props.thememode[1] === 0
      ? "background-color:#313131;"
      : "background-color:#ffffff;"}
  color: #fff;
  padding: 10px 15px;
  border-radius: 12px;
  border: none;
  box-shadow: 2px 2px 2px 0px #999999;
  cursor: pointer;
  &:hover {
    ${(props) =>
      props.thememode[1] === 0
        ? "background-color:#414141"
        : "background-color:#eeeeee;"}
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;
const IconApply = styled(FaCheck)<Theme>`
  width: 100%;
  height: 100%;
  ${(props) => (props.thememode[1] === 0 ? "color:#ffffff;" : "color:#313131;")}
`;
