import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 40px;
  height: 20px;
  font-size: 1.5rem;
  z-index: 1;
  cursor: pointer;
  color: var(--color-1c1c1b);

  &:hover {
    &:before {
      content: "Back to Top";
      position: absolute;
      left: -100px;
      top: -30px;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
      white-space: nowrap;
    }
  }
`;
