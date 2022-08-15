import styled from "styled-components";
import Button from "components/atomics/buttons/Button";
import Divider from "components/atomics/Divider";
import LottieAnimation from "components/atomics/LottieAnimation";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-gap: 0px; // grid-template-rows: [line-2] 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    max-width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  padding: 28px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  padding: 0px 20px;
`;

export const Title = styled.h5`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.ribonBlack};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h6`
  margin-top: 4px;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 12px 16px;
  align-self: end;
  display: flex;
  background-color: white;
  align-items: center;
  box-shadow: 0px -4px 4px rgba(24, 86, 105, 0.15);

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    box-shadow: none;
    padding: 0;
    max-width: 340px;
  }
`;

export const HrDivider = styled(Divider)`
  width: 50px;
  padding: 0 100px;
`;

export const FinishButton = styled(Button)`
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    height: 56px;
  }
`;

export const HeartAnimation = styled(LottieAnimation)``;
