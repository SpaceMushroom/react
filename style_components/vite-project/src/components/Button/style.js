import { styled } from "styled-components";
import { PALETTE } from "../../shared/theme/constants";

export const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  margin: 0.125rem 0.25rem;
  border-radius: 0.375rem;
  font-weight: 400;
  border: ${(props) =>
    `1px solid ${
      props.outline ? props.theme.palette[props.color] : "rgba(0, 0, 0, 0.175)"
    }`};

  background-color: ${(props) =>
    props.outline //jeigu oultine
      ? props.theme.palette.light //outline BG balta
      : props.theme.palette[props.color]}; //normal BG pagal BTN spalvą

  color: ${(props) =>
    props.outline // jei outline
      ? props.theme.palette[props.color] // outline pagal BTN spalvą
      : props.color === PALETTE.warning || // Normal BTN ir vienos iš šių spoalvų
        props.color === PALETTE.info ||
        props.color === PALETTE.light
      ? props.theme.palette.dark // jeigu taip juoda
      : props.theme.palette.light}; // visi kiti balti

  &:hover {
    background-color: ${(props) =>
      props.outline // jei outline
        ? props.theme.palette[props.color] // taip tai pagal BTN spalvą
        : props.theme.hoverPalete[
            props.color
          ]}; // ne pagal naują paletę hoverPalete

    color: ${(props) =>
      props.outline // jei outline
        ? props.color === PALETTE.warning || //jeigu vienas iš išvardintų
          props.color === PALETTE.info ||
          props.color === PALETTE.light
          ? props.theme.palette.dark // taip juoda
          : props.theme.palette.light // ne balta
        : ""}; // jeigu ne outline tada nieko nedaro
  }
`;
