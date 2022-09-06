import styled from "styled-components";
import Button from "components/atomics/buttons/Button";
import { MainBodyContainer, MainContainer } from "layouts/MainLayout/styles";

export const Container = styled(MainContainer)``;

export const BodyContainer = styled(MainBodyContainer)``;

export const WalletButton = styled(Button)`
  padding: 3px 12px;
`;

export const Treasure = styled.img`
  cursor: pointer;
  padding: 3px;
`;

export const TreasureButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.mediumGreen};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-left: 6%;
  background-color: ${({ theme }) => theme.colors.white};
`;
