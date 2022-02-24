import ButtonRound from "components/atomics/buttons/ButtonRound";
import Header from "components/atomics/sections/Header";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 16px;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    padding: 0;
    margin-left: 240px;
    margin-right: 170px;
    margin: 0 10% 0 15%;
  }
`;

export const Icon = styled(Logo)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: flex;
    margin-top: 50px;
    width: 53px;
    height: 53px;
  }
`;

export const ImpactHeader = styled(Header)`
  width: 100%;
  display: none;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.ribonBlack};
  font-weight: 900;
  line-height: 1.6;
  margin: 30px 0 0 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 88px;
    gap: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Button = styled(ButtonRound)`
  width: 100px;
  align-self: center;
  margin-top: 16px;
`;
