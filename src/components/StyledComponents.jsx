import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <Text>- Styled Components -</Text>
        <button>FIGHT!!</button>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: antiquewhite;
`;

const Text = styled.p`
  font-family: serif;
  color: blue;
`;
