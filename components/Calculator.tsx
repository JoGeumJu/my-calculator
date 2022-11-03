import styled from "@emotion/styled";

export default function Calculator() {
  return (
    <Wrapper>
      <InnerWrap>
        <DivCalculator>
          <DivOutput>
            <DivDeco />
            <DivDeco
              style={{ height: "30px", bottom: "240px", left: "-270px" }}
            />
            <DivTextArea>안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽 안뇽</DivTextArea>
          </DivOutput>
          <DivInput>
            <TrInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "#313131", color: "#fff" }}>
                    back
                  </ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn>ce</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn>c</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>%</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>+-</ABtn>
                </DivBtn>
              </TdInput>
            </TrInput>
            <TrInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>7</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>8</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>9</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>/</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>1/x</ABtn>
                </DivBtn>
              </TdInput>
            </TrInput>
            <TrInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>4</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>5</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>6</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>x</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>x^2</ABtn>
                </DivBtn>
              </TdInput>
            </TrInput>
            <TrInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>1</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>2</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>3</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>-</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>rootx</ABtn>
                </DivBtn>
              </TdInput>
            </TrInput>
            <TrInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>0</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>00</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "pink" }}>.</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "yellow" }}>+</ABtn>
                </DivBtn>
              </TdInput>
              <TdInput>
                <DivBtn>
                  <ABtn style={{ backgroundColor: "#313131", color: "#fff" }}>
                    =
                  </ABtn>
                </DivBtn>
              </TdInput>
            </TrInput>
          </DivInput>
        </DivCalculator>
      </InnerWrap>
    </Wrapper>
  );
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
  width: 50%;
  height: 66%;
  border-radius: 40px;
  border: 6px solid #e14e35;
  box-shadow: 10px 10px 3px 0px #999999;
  padding: 20px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
  }
`;
// output
const DivOutput = styled.div`
  display: flex;
  position: relative;
  background-color: #b9dfff;
  width: 40%;
  height: 100%;
  border-radius: 24px;
  border: 5px solid #8ccbff;
  margin-right: 20px;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
  }
`;
const DivDeco = styled.div`
  display: flex;
  position: absolute;
  height: 50px;
  width: 500px;
  bottom: 220px;
  left: -185px;
  background-color: #dff1ff;
  opacity: 0.4;
  transform: rotate(-65deg);
`;
const DivTextArea = styled.div`
  padding: 15px;
`;
// input
const DivInput = styled.table`
  display: flex;
  flex-direction: column;
  background-color: none;
  width: 60%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
  }
`;
const TrInput = styled.tr`
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 100%;
  padding: 8px 0;
  @media only screen and (max-width: 1024px) {
  }
`;
const TdInput = styled.td`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 20%;
  padding: 0 8px;
  @media only screen and (max-width: 1024px) {
  }
`;
const DivBtn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const ABtn = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 24px;
  box-shadow: 3px 3px 3px 0px #999999;
  cursor: pointer;
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;
