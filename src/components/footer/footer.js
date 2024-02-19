//footer.js

import './footer.scss';
import styled from "styled-components";
import {StyledButton} from "../styled-components/styled-button";


export const Footer = () => {

    const StyledInput = styled.input`
      border: 1px solid cornflowerblue;
      border-radius: 5px;
    `
    return (<div>
        <StyledButton>styled button</StyledButton>
        <StyledInput/>
    </div>);
}