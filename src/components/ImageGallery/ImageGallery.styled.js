import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  place-content: center;

  max-width: calc(100vw - 48px);

  margin: 1vh auto;
`;

// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   margin: 0 auto;

//   border: none;

//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   transform: scale(1);

//   &:hover,
//   &:focus {
//     transform: scale(0.8);
//   }
// `;
