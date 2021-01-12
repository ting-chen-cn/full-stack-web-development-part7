import styled from 'styled-components'
// background: Bisque;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid Chocolate;
//   border-radius: 3px;
export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export const CustomTable = styled.table`
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`
export const Input = styled.input`
  margin: 0.25em;
`
export const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

export const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`

export const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`
