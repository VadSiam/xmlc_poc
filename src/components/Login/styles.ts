import styled from "@emotion/styled";
import { Theme } from '@mui/material/styles';
import { breakpoints } from "../../styles";

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }: { theme?: Theme }) => theme?.palette.background.paper};

  @media (max-width: ${breakpoints.sm}) {
    height: 100%;
    padding: 2rem;
  }
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid ${({ theme }: { theme?: Theme }) => theme?.palette.divider};
  background-color: ${({ theme }: { theme?: Theme }) => theme?.palette.background.default};
  border-radius: 8px;
  width: 400px;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

