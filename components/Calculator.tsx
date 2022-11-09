import React, { useState } from "react";

import ReactModal from "react-modal";
ReactModal.setAppElement("body");

import ErrorModal from "./Modal/ErrorModal";
import MemoModal from "./Modal/MemoModal";

import styled from "@emotion/styled";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaEquals } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";

export default function Calculator() {
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
        <DivCalculator>
          <DivOutput>
            <DivDeco1 />
            <DivDeco2 />
            <DivTextArea>
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
                    <ABtn
                      id="del"
                      style={{ backgroundColor: "#313131", color: "#fff" }}
                    >
                      <IconDel />
                    </ABtn>
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
                    <ABtn
                      id="c"
                      style={{ backgroundColor: "#313131", color: "#fff" }}
                    >
                      C
                    </ABtn>
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
                    <ABtn id="memo" style={{ color: "#fff" }}>
                      <IconMemo />
                    </ABtn>
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
                    <ABtn id="%" style={{ backgroundColor: "yellow" }}>
                      %
                    </ABtn>
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
                    <ABtn id="sign" style={{ backgroundColor: "yellow" }}>
                      ±
                    </ABtn>
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
                    <ABtn id="7" style={{ backgroundColor: "pink" }}>
                      7
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "8");
                      setOutResult((prev) => prev + "8");
                    }}
                  >
                    <ABtn id="8" style={{ backgroundColor: "pink" }}>
                      8
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "9");
                      setOutResult((prev) => prev + "9");
                    }}
                  >
                    <ABtn id="9" style={{ backgroundColor: "pink" }}>
                      9
                    </ABtn>
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
                    <ABtn id="/" style={{ backgroundColor: "yellow" }}>
                      /
                    </ABtn>
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
                    <ABtn id="fraction" style={{ backgroundColor: "yellow" }}>
                      1/x
                    </ABtn>
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
                    <ABtn id="4" style={{ backgroundColor: "pink" }}>
                      4
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "5");
                      setOutResult((prev) => prev + "5");
                    }}
                  >
                    <ABtn id="5" style={{ backgroundColor: "pink" }}>
                      5
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "6");
                      setOutResult((prev) => prev + "6");
                    }}
                  >
                    <ABtn id="6" style={{ backgroundColor: "pink" }}>
                      6
                    </ABtn>
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
                    <ABtn id="*" style={{ backgroundColor: "yellow" }}>
                      X
                    </ABtn>
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
                    <ABtn id="pow" style={{ backgroundColor: "yellow" }}>
                      x²
                    </ABtn>
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
                    <ABtn id="1" style={{ backgroundColor: "pink" }}>
                      1
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "2");
                      setOutResult((prev) => prev + "2");
                    }}
                  >
                    <ABtn id="2" style={{ backgroundColor: "pink" }}>
                      2
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "3");
                      setOutResult((prev) => prev + "3");
                    }}
                  >
                    <ABtn id="3" style={{ backgroundColor: "pink" }}>
                      3
                    </ABtn>
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
                    <ABtn id="-" style={{ backgroundColor: "yellow" }}>
                      -
                    </ABtn>
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
                    <ABtn id="sqrt" style={{ backgroundColor: "yellow" }}>
                      √
                    </ABtn>
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
                    <ABtn id="0" style={{ backgroundColor: "pink" }}>
                      0
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "00");
                      setOutResult((prev) => prev + "00");
                    }}
                  >
                    <ABtn id="00" style={{ backgroundColor: "pink" }}>
                      00
                    </ABtn>
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
                    <ABtn id="." style={{ backgroundColor: "pink" }}>
                      .
                    </ABtn>
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
                    <ABtn id="+" style={{ backgroundColor: "yellow" }}>
                      +
                    </ABtn>
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
                    <ABtn
                      id="="
                      style={{ backgroundColor: "#313131", color: "#fff" }}
                    >
                      <IconEql />
                    </ABtn>
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
const DivCalculator = styled.div`
  display: flex;
  flex-direction: row;
  background-color: tomato;
  border-radius: 40px;
  border: 6px solid #e14e35;
  box-shadow: 6px 6px 2px 0px #999999;
  padding: 20px;
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
const DivTextArea = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const DivCalArea = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
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
  height: 10%;
  padding: 8px;
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
const ABtn = styled.div`
  display: flex;
  width: 68px;
  height: 68px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: gray;
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
const IconDel = styled(RiDeleteBack2Fill)`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 3px;
`;
const IconEql = styled(FaEquals)`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 5px;
`;
const IconMemo = styled(TbNotes)`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 2px;
`;
