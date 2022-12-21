import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    margin: auto;
`;

export const Legend = styled.legend`
    border: 1px solid;
    background-color: antiquewhite;
    border-radius: 7px;
    padding: 4px 10px;
`;

export const Fieldset = styled.fieldset`
    padding: 20px;
    border-radius: 10px;
    background-color: hsl(33, 82%, 87%);
    margin: 20px auto;

`;

export const Select = styled.select`
    padding: 10px;
    font-family: 'Dosis', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: rgb(41, 41, 41);
    background-color: rgb(212, 212, 212);
    border: 2px double rgb(192, 192, 192);
    border-radius: 5px;
    width: 200px;
`;

export const Input = styled.input`
    padding: 10px;
    font-family: 'Dosis', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: rgb(41, 41, 41);
    background-color: rgb(212, 212, 212);
    border: 2px double rgb(192, 192, 192);
    border-radius: 5px;
    width: 200px;
`;

export const LabelText = styled.span`
    display: inline-block;
    max-width: 150px;
    width: 100%;
    margin-right: 0;
    padding: 10px;
    font-size: 18px;

    ${({ currency }) => currency && css`
        font-size: 16px;
        display: block;
    `}
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 20px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
            grid-template-columns: 1fr 1fr;
        }

    @media (max-width:${({ theme }) => theme.breakpoints.fold}px){
            grid-template-columns: 1fr;
        }    
    ${({ currency }) => currency && css`

        @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width:${({ theme }) => theme.breakpoints.fold}px){
            grid-template-columns: 1fr;
        }
    `};
`;

export const DataInfo = styled.p`
    text-align: right;
    font-style: italic;
    font-size: 13px;
    margin-top: 0px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    max-width: 200px;
    padding: 10px;
    border: none;
    background-color: hsl(34, 52%, 78%);
    border-radius: 5px;
    color: rgb(0, 0, 0);
    transition: .3s;
    margin-left: 10px;
    font-weight: 600;
    box-shadow: 0px 0px 6px rgb(127, 127, 127);

&:hover {
    cursor: pointer;
    background-color: hsl(34, 52%, 75%);
    transform: scale(1.05);
}

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin-left: 0;
        margin-top: 10px;
        grid-column-start: 2;
}

@media (max-width: ${({ theme }) => theme.breakpoints.fold}px){
    .form__submitButton {
        grid-column-start: 2;
    }
}
`;

export const Element = styled.div`
    align-self: center;
`;

export const Label = styled.label`

   ${({ radio }) => radio && css`
        margin-right: 5px;
   `} 
`;

export const RadioElement = styled.span`
    margin-right: 5px;
`;