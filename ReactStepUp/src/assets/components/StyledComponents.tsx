import styled from "styled-components";

function StyledComponents() {
    return (
      <SContainer>
        <STittle>-s-</STittle>
        <button>Fight!</button>
      </SContainer>
    )
  }

const SContainer = styled.div`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const STittle = styled.p`
    margin: 0;
    color: #3d84a8;
`;


export default StyledComponents