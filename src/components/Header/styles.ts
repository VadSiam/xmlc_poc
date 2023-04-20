import { AppBar, Theme, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;  
  font-weight: 500;
  margin: 10px;
`
export const StyledAppBar = styled(AppBar)`
  background-color:  ${({ theme }: { theme?: Theme }) => theme?.palette.background.default}
`