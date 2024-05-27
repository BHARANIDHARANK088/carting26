// 106
import { css } from "styled-components";

export const mobile = (props) => {
    return css`
       @media only screens and (max-width: 380px) {
        ${props}
       }
    `
}

