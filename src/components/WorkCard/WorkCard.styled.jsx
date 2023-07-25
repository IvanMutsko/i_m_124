import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: box-shadow 250ms linear;

  width: 360px;
  background-color: #596559;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1023px) {
    width: 300px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  border-top: 1px solid #2d332d;
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 8px;
`;

export const CardTechnologies = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 0;
`;

export const WorkLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff42;
  color: #ffffff99;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.2rem;
  padding: 10px;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #ffffff89;
  }
`;

export const LinkWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
`;

export const CardOverlay = styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d332def;
  padding: 20px;

  opacity: ${props => (props.show ? '1' : '0')};
  pointer-events: ${props => (props.show ? 'auto' : 'none')};
  transition: opacity 250ms linear;
`;
