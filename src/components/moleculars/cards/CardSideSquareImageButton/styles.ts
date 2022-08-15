import styled from "styled-components";
import Button from "components/atomics/buttons/Button";

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin-top: 24px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.ribonBlack};
`;

export const Text = styled.h4`
  font-weight: 400;
  line-height: 24px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const InsideContainer = styled.div`
  margin-right: 14px;
`;

export const ImageContainer = styled.div`
  height: 96px;
  width: 96px;
  margin-bottom: 8px;
`;

export const SideButton = styled(Button)`
  border-radius: 16px;
  font-size: 12px;
  height: 28px;
`;
