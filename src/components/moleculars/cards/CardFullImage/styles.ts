import styled from "styled-components";

type ContainerProps = {
  backgroundImage: string;
};

export const Container = styled.div<ContainerProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.ribonBlue};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RoundLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: 150px;
    height: 150px;
    border-radius: 150px;
  }
`;

export const Title = styled.h3`
  line-height: 25px;
  text-align: center;
  margin-left: 3px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.ribonWhite};
  line-height: 25px;
  text-align: center;
`;
