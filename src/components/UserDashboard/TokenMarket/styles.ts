import { Grid, Select, TextField, Theme, styled } from "@mui/material";
import { breakpoints } from "../../../styles";

export const ModalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '1px solid "background.paper"',
  boxShadow: 24,
  p: 1,
  borderRadius: 5,
  textAlign: 'center' as const,
  color: 'green'
}

export const TextFieldNoBorder = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
      fontSize: 40px;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & input[type='number'] {
      -moz-appearance: textfield;
    }
    // Increase font size inside the input field
    input {
      font-size: 1.5rem; // Adjust this value to your desired font size
    }
  }
`;
export const SelectNoBorder = styled(Select)`
  /* .MuiSelect-select {
    font-size: 1.5rem; // Adjust this value to your desired font size
  } */

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const StyledGreyGrid = styled(Grid)`
  background-color:  ${({ theme }: { theme?: Theme }) => theme?.palette.background.default};
  border-radius: 10px;
  padding: 30px 70px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 10px;
  }
`;

export const ItemGrid = styled(Grid)`
  background-color:  ${({ theme }: { theme?: Theme }) => theme?.palette.background.paper};
  border-radius: 10px;
  display: flex;
  align-items: center;
`