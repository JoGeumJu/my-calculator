import React, { useState } from "react";

import { useRecoilValue } from "recoil";
import { fontSizeState, themeColorState } from "../../recoil/themeStates";

import ReactModal from "react-modal";
ReactModal.setAppElement("body");

import ErrorModal from "../Modal/ErrorModal";
import MemoModal from "../Modal/MemoModal";

import styled from "@emotion/styled";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaEquals } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";

interface Theme {
  fontsize?: number;
  themecolor: {
    color0: string[];
    color1: string[];
    color2: string[];
    color3: string[];
    color4: string[];
  };
}

export default function Calculator() {
  const fontSizeG = useRecoilValue(fontSizeState);
  const themeColorG = useRecoilValue(themeColorState);

  const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ")"];
  const [calResult, setCalResult] = useState("");
  const [outResult, setOutResult] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [memoResult, setMemoResult] = useState("");

  const chooseNumber = () => {
    if (outResult.includes(" ")) {
      let lastIdx = -outResult.length + outResult.lastIndexOf(" ") + 1;
      let tempArray = outResult;
      let temp = tempArray.slice(lastIdx);
      setCalResult(calResult.slice(0, lastIdx));
      setOutResult(outResult.slice(0, lastIdx));
      return temp;
    } else if (!outResult.includes(" ")) {
      setCalResult("");
      setOutResult("");
      return Function(`return ${outResult}`)();
    }
  };

  // ErrorModal handling
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [contextErrorModal, setContextErrorModal] = useState("");
  const handleErrorModal = (context: string) => {
    setIsOpenErrorModal(true);
    setContextErrorModal(context);
    setTimeout(function () {
      setIsOpenErrorModal(false);
    }, 3000);
  };
  // MemoModal handling
  const [isOpenMemoModal, setIsOpenMemoModal] = useState(false);
  const [contextMemoModal, setContextMemoModal] = useState("");
  const handleMemoModal = (context: string) => {
    setIsOpenMemoModal(true);
    setContextMemoModal(context);
    setTimeout(function () {
      setIsOpenMemoModal(false);
    }, 3000);
  };

  return (
    <Wrapper id="modal">
      <InnerWrap>
        <ErrorModal
          isOpenModal={isOpenErrorModal}
          context={contextErrorModal}
        />
        <MemoModal isOpenModal={isOpenMemoModal} context={contextMemoModal} />
        <DivCalculator themecolor={themeColorG}>
          <DivOutput>
            <DivDeco1 />
            <DivDeco2 />
            <DivTextArea fontsize={fontSizeG} themecolor={themeColorG}>
              <DivCalArea>{outResult}</DivCalArea>
              <DivRsltArea>{resultValue}</DivRsltArea>
            </DivTextArea>
          </DivOutput>
          <DivInput>
            <DivTbody>
              <TrInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (
                        calResult !== "" &&
                        NUMBERS.includes(calResult[calResult.length - 1]) &&
                        calResult[calResult.length - 1] !== ")"
                      ) {
                        setCalResult(calResult.slice(0, -1));
                        setOutResult(outResult.slice(0, -1));
                      } else if (
                        calResult !== "" &&
                        NUMBERS.includes(calResult[calResult.length - 1]) &&
                        calResult[calResult.length - 1] === ")"
                      ) {
                        if (calResult[calResult.length - 1] === ")") {
                          let lastIdxC =
                            -calResult.length + calResult.lastIndexOf("(");
                          let lastIdxO =
                            -outResult.length + outResult.lastIndexOf("(");
                          setCalResult(calResult.slice(0, lastIdxC));
                          setOutResult(outResult.slice(0, lastIdxO));
                        }
                      } else if (
                        calResult !== "" &&
                        !NUMBERS.includes(calResult[calResult.length - 1])
                      ) {
                        setCalResult(calResult.slice(0, -1));
                        setOutResult(outResult.slice(0, -3));
                      }
                    }}
                  >
                    <ABtn1 id="del" themecolor={themeColorG}>
                      <IconDel themecolor={themeColorG} />
                    </ABtn1>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult("");
                      setOutResult("");
                      setResultValue("");
                    }}
                  >
                    <ABtn1 id="c" themecolor={themeColorG}>
                      C
                    </ABtn1>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (memoResult === "") {
                        if (resultValue !== "") {
                          setMemoResult(resultValue);
                          handleMemoModal(`${resultValue} 저장`);
                        } else {
                          handleErrorModal("저장할 결과값이 없습니다");
                        }
                      } else if (memoResult !== "") {
                        if (
                          !NUMBERS.includes(calResult[calResult.length - 1])
                        ) {
                          setCalResult((prev) => prev + memoResult);
                          setOutResult((prev) => prev + memoResult);
                          setMemoResult("");
                        } else {
                          handleErrorModal("연산자 뒤에서만 부를 수 있습니다");
                        }
                      }
                    }}
                  >
                    <ABtn2 id="memo" themecolor={themeColorG}>
                      <IconMemo themecolor={themeColorG} />
                    </ABtn2>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        setCalResult((prev) => prev + "%");
                        setOutResult((prev) => prev + " % ");
                      } else {
                        if (calResult === "") {
                          handleErrorModal("숫자를 먼저 입력하세요");
                        }
                      }
                    }}
                  >
                    <ABtn4 id="%" themecolor={themeColorG}>
                      %
                    </ABtn4>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        let num: number = chooseNumber();
                        setCalResult((prev) => prev + `(${-num})`);
                        setOutResult((prev) => prev + `(${-num})`);
                      }
                    }}
                  >
                    <ABtn4 id="sign" themecolor={themeColorG}>
                      ±
                    </ABtn4>
                  </DivBtn>
                </TdInput>
              </TrInput>
              <TrInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "7");
                      setOutResult((prev) => prev + "7");
                    }}
                  >
                    <ABtn3 id="7" themecolor={themeColorG}>
                      7
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "8");
                      setOutResult((prev) => prev + "8");
                    }}
                  >
                    <ABtn3 id="8" themecolor={themeColorG}>
                      8
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "9");
                      setOutResult((prev) => prev + "9");
                    }}
                  >
                    <ABtn3 id="9" themecolor={themeColorG}>
                      9
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        setCalResult((prev) => prev + "/");
                        setOutResult((prev) => prev + " / ");
                      } else {
                        if (calResult === "") {
                          handleErrorModal("숫자를 먼저 입력하세요");
                        }
                      }
                    }}
                  >
                    <ABtn4 id="/" themecolor={themeColorG}>
                      /
                    </ABtn4>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        let num: number = chooseNumber();
                        setCalResult((prev) => prev + `(1/${num})`);
                        setOutResult((prev) => prev + `(1/${num})`);
                      }
                    }}
                  >
                    <ABtn4 id="fraction" themecolor={themeColorG}>
                      1/x
                    </ABtn4>
                  </DivBtn>
                </TdInput>
              </TrInput>
              <TrInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "4");
                      setOutResult((prev) => prev + "4");
                    }}
                  >
                    <ABtn3 id="4" themecolor={themeColorG}>
                      4
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "5");
                      setOutResult((prev) => prev + "5");
                    }}
                  >
                    <ABtn3 id="5" themecolor={themeColorG}>
                      5
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "6");
                      setOutResult((prev) => prev + "6");
                    }}
                  >
                    <ABtn3 id="6" themecolor={themeColorG}>
                      6
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        setCalResult((prev) => prev + "*");
                        setOutResult((prev) => prev + " X ");
                      } else {
                        if (calResult === "") {
                          handleErrorModal("숫자를 먼저 입력하세요");
                        }
                      }
                    }}
                  >
                    <ABtn4 id="*" themecolor={themeColorG}>
                      X
                    </ABtn4>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        let num: number = chooseNumber();
                        setCalResult((prev) => prev + `(${Math.pow(num, 2)})`);
                        setOutResult((prev) => prev + `(${num}²)`);
                      }
                    }}
                  >
                    <ABtn4 id="pow" themecolor={themeColorG}>
                      x²
                    </ABtn4>
                  </DivBtn>
                </TdInput>
              </TrInput>
              <TrInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "1");
                      setOutResult((prev) => prev + "1");
                    }}
                  >
                    <ABtn3 id="1" themecolor={themeColorG}>
                      1
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "2");
                      setOutResult((prev) => prev + "2");
                    }}
                  >
                    <ABtn3 id="2" themecolor={themeColorG}>
                      2
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "3");
                      setOutResult((prev) => prev + "3");
                    }}
                  >
                    <ABtn3 id="3" themecolor={themeColorG}>
                      3
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        setCalResult((prev) => prev + "-");
                        setOutResult((prev) => prev + " - ");
                      } else {
                        if (calResult === "") {
                          handleErrorModal("숫자를 먼저 입력하세요");
                        }
                      }
                    }}
                  >
                    <ABtn4 id="-" themecolor={themeColorG}>
                      -
                    </ABtn4>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        let num: number = chooseNumber();
                        setCalResult((prev) => prev + `(${Math.sqrt(num)})`);
                        setOutResult((prev) => prev + `(√${num})`);
                      }
                    }}
                  >
                    <ABtn4 id="sqrt" themecolor={themeColorG}>
                      √
                    </ABtn4>
                  </DivBtn>
                </TdInput>
              </TrInput>
              <TrInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "0");
                      setOutResult((prev) => prev + "0");
                    }}
                  >
                    <ABtn3 id="0" themecolor={themeColorG}>
                      0
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "00");
                      setOutResult((prev) => prev + "00");
                    }}
                  >
                    <ABtn3 id="00" themecolor={themeColorG}>
                      00
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (
                        NUMBERS.includes(calResult[calResult.length - 1]) &&
                        calResult[calResult.length - 1] !== "."
                      ) {
                        setCalResult((prev) => prev + ".");
                        setOutResult((prev) => prev + ".");
                      }
                    }}
                  >
                    <ABtn3 id="." themecolor={themeColorG}>
                      .
                    </ABtn3>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        setCalResult((prev) => prev + "+");
                        setOutResult((prev) => prev + " + ");
                      } else {
                        if (calResult === "") {
                          handleErrorModal("숫자를 먼저 입력하세요");
                        }
                      }
                    }}
                  >
                    <ABtn4 id="+" themecolor={themeColorG}>
                      +
                    </ABtn4>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (
                        calResult !== "" &&
                        NUMBERS.includes(calResult[calResult.length - 1])
                      ) {
                        setResultValue(Function(`return ${calResult}`)());
                      } else {
                        handleErrorModal("먼저 식을 완성하세요");
                      }
                    }}
                  >
                    <ABtn1 id="=" themecolor={themeColorG}>
                      <IconEql themecolor={themeColorG} />
                    </ABtn1>
                  </DivBtn>
                </TdInput>
              </TrInput>
            </DivTbody>
          </DivInput>
        </DivCalculator>
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
`;
const InnerWrap = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const DivCalculator = styled.div<Theme>`
  display: flex;
  flex-direction: row;
  ${(props) => `background:${props.themecolor.color0[0]};`}
  border-radius: 40px;
  box-shadow: 6px 6px 2px 0px #999999;
  padding: 25px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    padding: 16px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
// output
const DivOutput = styled.div`
  display: flex;
  position: relative;
  background-color: #b9dfff;
  width: 350px;
  height: 420px;
  border-radius: 24px;
  border: 5px solid #8ccbff;
  margin-right: 15px;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    width: 300px;
    height: 360px;
    margin-right: 12px;
  }
  @media only screen and (max-width: 767px) {
    width: 360px;
    height: 300px;
    margin-right: 0px;
    margin-bottom: 12px;
  }
`;
const DivDeco1 = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  height: 50px;
  width: 500px;
  bottom: 220px;
  left: -185px;
  background-color: #dff1ff;
  opacity: 0.4;
  transform: rotate(-65deg);
  @media only screen and (max-width: 1024px) {
    left: -165px;
  }
  @media only screen and (max-width: 767px) {
    left: -150px;
    bottom: 185px;
  }
`;
const DivDeco2 = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  height: 30px;
  width: 500px;
  bottom: 240px;
  left: -270px;
  background-color: #dff1ff;
  opacity: 0.4;
  transform: rotate(-65deg);
  @media only screen and (max-width: 1024px) {
    left: -250px;
  }
  @media only screen and (max-width: 767px) {
    left: -220px;
  }
`;
const DivTextArea = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  ${(props) => `font-size:${props.fontsize}px;`}
`;
const DivCalArea = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  font-size: inherit;
  color: #313131;
  justify-content: right;
  text-align: right;
  overflow: hidden;
  word-break: break-all;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 11px;
    background-color: rgba(0, 0, 0, 0);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #85bfee;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  &::-webkit-scrollbar-button {
    background-color: rgba(0, 0, 0, 0);
    height: 0px;
  }
`;
const DivRsltArea = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  padding: 8px;
  font-size: inherit;
  color: #313131;
  align-items: center;
  justify-content: right;
  text-align: right;
  overflow: hidden;
  word-break: break-all;
  border-radius: 12px;
  background-color: rgba(133, 191, 238, 0.3);
`;
// input
const DivInput = styled.table`
  display: flex;
  flex-direction: column;
  background-color: none;
  @media only screen and (max-width: 1024px) {
  }
`;
const DivTbody = styled.tbody`
  display: flex;
  flex-direction: column;
`;
const TrInput = styled.tr`
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 100%;
  padding: 6px 0;
  @media only screen and (max-width: 1024px) {
    padding: 5px 0;
  }
`;
const TdInput = styled.td`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 20%;
  padding: 0 6px;
  @media only screen and (max-width: 1024px) {
    padding: 0 5px;
  }
`;
const DivBtn = styled.button`
  display: flex;
  padding: 0px;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-family: inherit;
`;
const ABtn1 = styled.div<Theme>`
  display: flex;
  width: 68px;
  height: 68px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  ${(props) => `background:${props.themecolor.color1[0]};`}
  ${(props) => `color:${props.themecolor.color1[1]};`}
  border-radius: 27px;
  box-shadow: 3px 3px 2px 0px #999999;
  font-size: 17px;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
  @media only screen and (max-width: 1024px) {
    border-radius: 22px;
    width: 60px;
    height: 60px;
  }
`;
const ABtn2 = styled.div<Theme>`
  display: flex;
  width: 68px;
  height: 68px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  ${(props) => `background-color:${props.themecolor.color2[0]};`}
  border-radius: 27px;
  box-shadow: 3px 3px 2px 0px #999999;
  font-size: 17px;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
  @media only screen and (max-width: 1024px) {
    border-radius: 22px;
    width: 60px;
    height: 60px;
  }
`;
const ABtn3 = styled.div<Theme>`
  display: flex;
  width: 68px;
  height: 68px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  ${(props) => `background-color:${props.themecolor.color3[0]};`}
  ${(props) => `color:${props.themecolor.color3[1]};`}
  border-radius: 27px;
  box-shadow: 3px 3px 2px 0px #999999;
  font-size: 17px;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
  @media only screen and (max-width: 1024px) {
    border-radius: 22px;
    width: 60px;
    height: 60px;
  }
`;
const ABtn4 = styled.div<Theme>`
  display: flex;
  width: 68px;
  height: 68px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  ${(props) => `background-color:${props.themecolor.color4[0]};`}
  ${(props) => `color:${props.themecolor.color4[1]};`}
  border-radius: 27px;
  box-shadow: 3px 3px 2px 0px #999999;
  font-size: 17px;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
  @media only screen and (max-width: 1024px) {
    border-radius: 22px;
    width: 60px;
    height: 60px;
  }
`;
const IconDel = styled(RiDeleteBack2Fill)<Theme>`
  width: 100%;
  height: 100%;
  ${(props) => `color:${props.themecolor.color1[1]};`}
  padding: 3px;
`;
const IconEql = styled(FaEquals)<Theme>`
  width: 100%;
  height: 100%;
  ${(props) => `color:${props.themecolor.color1[1]};`}
  padding: 6px;
`;
const IconMemo = styled(TbNotes)<Theme>`
  width: 100%;
  height: 100%;
  ${(props) => `color:${props.themecolor.color2[1]};`}
  padding: 2px;
`;
