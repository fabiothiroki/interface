import ButtonRound from "components/atomics/buttons/ButtonRound";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 16px;
  justify-content: center;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.ribonBlack};
  font-weight: 900;
  line-height: 1.6;
  margin-top: 30px;
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 10px;
`;

export const Wrapper = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
`;

export const Button = styled(ButtonRound)`
  width: 100px;
  align-self: center;
  margin-top: 16px;
`;
