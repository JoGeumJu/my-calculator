import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";

import styled from "@emotion/styled";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { FaTag, FaCaretLeft, FaCaretRight, FaCheck } from "react-icons/fa";
import { MdBrightness5, MdDarkMode } from "react-icons/md";

import Data from "../../data/Data.json";

export default function Setting() {
  const [fontSizeValue, setFontSizeValue] = useState(16);
  const [isHoverFontSize, setIsHoverFontSize] = useState("notHover");
  const [fontStyleValue, setFontStyleValue] = useState("KOFIH이종욱체");
  const onChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSizeValue(Number(e.target.value));
  };
  const onChangeFontStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontStyleValue(e.target.value);
  };

  SwiperCore.use([Navigation]);

  return (
    <Wrapper>
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
              <IconMinus />
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
              <IconPlus />
            </BtnPlus>
            <TagFontSize is_hover_font_size={isHoverFontSize}></TagFontSize>
            <TagText is_hover_font_size={isHoverFontSize}>
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
            <OptionFontStyle
              value="KOFIH이종욱체"
              style={{
                background: "#313131",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              KOFIH이종욱체
            </OptionFontStyle>
            <OptionFontStyle
              value="여기어때_잘난체"
              style={{
                background: "#313131",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              여기어때 잘난체
            </OptionFontStyle>
            <OptionFontStyle
              value="이사만루"
              style={{
                background: "#313131",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              이사만루
            </OptionFontStyle>
            <OptionFontStyle
              value="카페24_써라운드"
              style={{
                background: "#313131",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              카페24 써라운드
            </OptionFontStyle>
            <OptionFontStyle
              value="Gmarket_Sans"
              style={{
                background: "#313131",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Gmarket Sans
            </OptionFontStyle>
            <OptionFontStyle
              value="양진체"
              style={{
                background: "#313131",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              양진체
            </OptionFontStyle>
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
              {Data.swiper_theme_data.map((idx) => (
                <SwiperSlide
                  className="swiper_slide"
                  style={{ position: "relative", width: "165px" }}
                  key={idx.id}
                >
                  <ImgTheme src={idx.src} />
                  <BrightChooseTheme>
                    <IconBrightChoose />
                  </BrightChooseTheme>
                  <NightChooseTheme>
                    <IconNightChoose />
                  </NightChooseTheme>
                </SwiperSlide>
              ))}
            </Swiper>
            <NextTheme className="swiper-button-prev">
              <IconNextTheme />
            </NextTheme>
            <PrevTheme className="swiper-button-next">
              <IconPrevTheme />
            </PrevTheme>
            <SwiperThemeOpacity1 />
            <SwiperThemeOpacity2 />
          </SwiperTheme>
        </DivTheme>
        <BtnApply>
          <IconApply />
        </BtnApply>
      </InnerWrap>
    </Wrapper>
  );
}

interface Props {
  value?: number | string;
  is_hover_font_size?: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 100px);
  justify-content: center;
  align-items: center;
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
const IconPlus = styled(HiPlusCircle)`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  color: #313131;
`;
const BtnMinus = styled.a`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const IconMinus = styled(HiMinusCircle)`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  color: #313131;
`;
const TagFontSize = styled(FaTag)<Props>`
  display: ${(props) =>
    props.is_hover_font_size === "hover" ? "flex" : "none"};
  position: absolute;
  width: 29px;
  height: 29px;
  bottom: -33px;
  right: 7px;
  transform: rotate(45deg);
  color: #313131;
  transition: 0.3s ease;
`;
const TagText = styled.p<Props>`
  display: ${(props) =>
    props.is_hover_font_size === "hover" ? "flex" : "none"};
  position: absolute;
  margin: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  bottom: -44px;
  right: -2px;
  color: #fff;
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
  color: #313131;
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
  width: 500px;
  overflow: visible;
`;
const ImgTheme = styled.img`
  width: 165px;
  border-radius: 15px;
  cursor: pointer;
`;
const SwiperThemeOpacity1 = styled.div`
  display: flex;
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  width: 115px;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 243, 243, 1),
    12%,
    rgba(255, 243, 243, 0.75),
    32%,
    rgba(255, 243, 243, 0.5),
    52.5%,
    rgba(255, 243, 243, 0.25),
    75%,
    rgba(243, 243, 243, 0)
  );
`;
const SwiperThemeOpacity2 = styled.div`
  display: flex;
  position: absolute;
  z-index: 500;
  top: 0;
  right: 0;
  width: 115px;
  height: 100%;
  background-image: linear-gradient(
    to left,
    rgba(255, 243, 243, 1),
    12%,
    rgba(255, 243, 243, 0.75),
    32%,
    rgba(255, 243, 243, 0.5),
    52.5%,
    rgba(255, 243, 243, 0.25),
    75%,
    rgba(243, 243, 243, 0)
  );
`;
const BrightChooseTheme = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 29.5%;
  padding: 4px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(31, 31, 31, 0.2);
  cursor: pointer;
  &:hover {
    background-color: rgba(31, 31, 31, 0.6);
  }
`;
const IconBrightChoose = styled(MdBrightness5)`
  width: 100%;
  height: 100%;
  color: #ffcc5e;
`;
const NightChooseTheme = styled.div`
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
const IconNextTheme = styled(FaCaretLeft)`
  width: 100%;
  height: 100%;
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
const IconPrevTheme = styled(FaCaretRight)`
  width: 100%;
  height: 100%;
`;
const BtnApply = styled.a`
  background: #313131;
  color: #fff;
  padding: 10px 15px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 0px #999999;
  cursor: pointer;
  &:hover {
    background-color: #414141;
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;
const IconApply = styled(FaCheck)`
  width: 100%;
  height: 100%;
  color: #fff;
`;
