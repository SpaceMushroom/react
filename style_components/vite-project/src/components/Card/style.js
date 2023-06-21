import { styled } from "styled-components";
import { PALETTE } from "../../shared/theme/constants";

export const StyledCardWrapper = styled.div`
  width: ${(props) => (props.fullwidth ? "100%" : "18rem")};
  border-radius: 0.375rem;
  border: ${(props) =>
    `1px solid ${
      props.outline ? props.theme.palette[props.color] : "rgba(0, 0, 0, 0.175)"
    }`};
  background-color: ${(props) => props.theme.palette[props.color]};
  color: ${(props) =>
    props.color === PALETTE.warning ||
    props.color === PALETTE.info ||
    props.color === PALETTE.light
      ? props.theme.palette.dark
      : props.theme.palette.light};
`;

export const StyledCardHeaderContainer = styled.div`
  background-color: ${(props) =>
    props.outline
      ? "#F1F2F3"
      : props.color === PALETTE.light
      ? "#F1F2F3"
      : "inherit"};
  padding: 0.5rem 1rem;
  border-radius: 0.375rem 0.375rem 0 0;
`;

export const StyledCardHeader = styled.h5`
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 400;
  line-height: 1.5rem;
  color: ${(props) => (props.outline ? props.theme.palette.dark : "inherit")};
`;

export const StyledDivider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.175);
`;

export const StyledCardContentContainer = styled.div`
  padding: 1rem;
  border-radius: 0 0 0.375rem 0.375rem;
  color: ${(props) =>
    props.outline
      ? props.color === PALETTE.primary ||
        props.color === PALETTE.secondary ||
        props.color === PALETTE.success ||
        props.color === PALETTE.danger
        ? props.theme.palette[props.color]
        : props.theme.palette.dark
      : "inherit"};
  background-color: ${(props) =>
    props.outline ? props.theme.palette.light : "inherit"};
`;

export const StyledCardContentHeader = styled.h4`
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.sizes.font.lg};
  font-weight: 500;
  line-height: 1.5rem;
`;

export const StyledCardContentParagraph = styled.p`
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 400;
  line-height: 1.5rem;
`;
