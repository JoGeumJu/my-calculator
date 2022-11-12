import ReactModal from "react-modal";

import styled from "@emotion/styled";

interface Props {
  isOpenModal: boolean;
  context?: string;
}

export default function MemoModal(props: Props) {
  return (
    <ReactModal
      isOpen={true}
      style={{
        overlay: {
          position: "absolute",
          width: "0",
          height: "0",
        },
        content: {
          position: "absolute",
          top: "77px",
          left: "20px",
          width: "280px",
          height: "32px",
          margin: "0",
          padding: "0",
          backgroundColor: "rgb(255, 253, 218)",
          borderRadius: "12px",
          boxShadow: "3px 3px 3px #999999",
          border: "none",
          fontSize: "15px",
          color: "#313131",
          transform: `${
            props.isOpenModal ? "translate(0px,0px)" : "translate(-310px,0)"
          }`,
          transition: "0.7s ease",
        },
      }}
    >
      <Wrapper>
        <IconNotice src="/images/modal/bell.png" />
        <Context>{props.context}</Context>
      </Wrapper>
    </ReactModal>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
`;
const Context = styled.p`
  font-size: 15px;
`;
const IconNotice = styled.img`
  width: 18px;
  margin-left: 4px;
  margin-right: 8px;
`;
