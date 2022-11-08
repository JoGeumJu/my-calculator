import React, { useState } from "react";

import styled from "@emotion/styled";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaEquals } from "react-icons/fa";
import { arrayBuffer } from "stream/consumers";

export default function Calculator() {
  const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const [calResult, setCalResult] = useState("");
  const [prevResult, setPrevResult] = useState("");
  const [outResult, setOutResult] = useState("");
  const [resultValue, setResultValue] = useState("");

  // const getNum = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   setCalResult((prev) => prev + e.target);
  // };
  // const getOper = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   setCalResult((prev) => prev + e.target);
  // };
  // const getPoint = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   if (calResult.length !== 0) {
  //     setCalResult((prev) => prev + e.target);
  //   }
  // };
  // const getResult = () => {
  //   let calResultTemp = calResult;
  //   if (isNaN(eval(calResultTemp))) {
  //     setCalResult("");
  //   } else if (eval(calResultTemp) == Infinity) {
  //     alert("0으로 나눌 수 없습니다.");
  //     return false;
  //   } else {
  //     setCalResult((prev) => eval(calResultTemp));
  //   }
  // };
  const getOper = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log(e.target);
  };

  return (
    <Wrapper>
      <InnerWrap>
        <DivCalculator>
          <DivOutput>
            <DivDeco1 />
            <DivDeco2 />
            <DivTextArea>
              <DivCalArea>{outResult}</DivCalArea>
              {/* 츌력 최대 숫자 16개, 입력 최대 숫자 16개 */}
              <DivRsltArea>{resultValue}</DivRsltArea>
            </DivTextArea>
          </DivOutput>
          <DivInput>
            <DivTbody>
              <TrInput>
                <TdInput>
                  <DivBtn>
                    <ABtn
                      value="del"
                      style={{ backgroundColor: "#313131", color: "#fff" }}
                      onClick={() => {
                        if (
                          calResult !== "" &&
                          NUMBERS.includes(calResult[calResult.length - 1])
                        ) {
                          setCalResult(calResult.slice(0, -1));
                          setOutResult(outResult.slice(0, -1));
                        } else if (
                          calResult !== "" &&
                          !NUMBERS.includes(calResult[calResult.length - 1])
                        ) {
                          setCalResult(calResult.slice(0, -1));
                          setOutResult(outResult.slice(0, -3));
                        }
                      }}
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
                    <ABtn value="ce" style={{ color: "#fff" }}>
                      CE
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setPrevResult("");
                      setCalResult("");
                      setOutResult("");
                      setResultValue("");
                    }}
                  >
                    <ABtn value="c" style={{ color: "#fff" }}>
                      C
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      if (NUMBERS.includes(calResult[calResult.length - 1])) {
                        setCalResult((prev) => prev + "%");
                        setOutResult((prev) => prev + " % ");
                      }
                    }}
                  >
                    <ABtn value="%" style={{ backgroundColor: "yellow" }}>
                      %
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult("");
                    }}
                  >
                    <ABtn value="sign" style={{ backgroundColor: "yellow" }}>
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
                    <ABtn value="7" style={{ backgroundColor: "pink" }}>
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
                    <ABtn value="8" style={{ backgroundColor: "pink" }}>
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
                    <ABtn value="9" style={{ backgroundColor: "pink" }}>
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
                      }
                    }}
                  >
                    <ABtn value="/" style={{ backgroundColor: "yellow" }}>
                      /
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + "7");
                    }}
                  >
                    <ABtn
                      value="fraction"
                      style={{ backgroundColor: "yellow" }}
                    >
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
                    <ABtn value="4" style={{ backgroundColor: "pink" }}>
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
                    <ABtn value="5" style={{ backgroundColor: "pink" }}>
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
                    <ABtn value="6" style={{ backgroundColor: "pink" }}>
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
                      }
                    }}
                  >
                    <ABtn value="*" style={{ backgroundColor: "yellow" }}>
                      X
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult("");
                    }}
                  >
                    <ABtn value="pow" style={{ backgroundColor: "yellow" }}>
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
                    <ABtn value="1" style={{ backgroundColor: "pink" }}>
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
                    <ABtn value="2" style={{ backgroundColor: "pink" }}>
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
                    <ABtn value="3" style={{ backgroundColor: "pink" }}>
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
                      }
                    }}
                  >
                    <ABtn value="-" style={{ backgroundColor: "yellow" }}>
                      -
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult("");
                    }}
                  >
                    <ABtn value="sqrt" style={{ backgroundColor: "yellow" }}>
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
                    <ABtn value="0" style={{ backgroundColor: "pink" }}>
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
                    <ABtn value="00" style={{ backgroundColor: "pink" }}>
                      00
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setCalResult((prev) => prev + ".");
                      setOutResult((prev) => prev + ".");
                    }}
                  >
                    <ABtn value="." style={{ backgroundColor: "pink" }}>
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
                      }
                    }}
                  >
                    <ABtn value="+" style={{ backgroundColor: "yellow" }}>
                      +
                    </ABtn>
                  </DivBtn>
                </TdInput>
                <TdInput>
                  <DivBtn
                    onClick={() => {
                      setResultValue(Function(`return ${calResult}`)());
                      setPrevResult(resultValue);
                      console.log(prevResult);
                      
                    }}
                  >
                    <ABtn
                      value="="
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

interface Props {
  value?: number | string;
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
`;
const DivRsltArea = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: flex-end;
  justify-content: right;
  text-align: right;
  overflow: hidden;
  word-break: break-all;
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
const DivBtn = styled.div`
  display: flex;
`;
const ABtn = styled.a<Props>`
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
  padding: 0px;
`;
const IconEql = styled(FaEquals)`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 3px;
`;
