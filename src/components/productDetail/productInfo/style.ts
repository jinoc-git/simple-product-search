import styled from 'styled-components';

export const ProductInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ProductInfoTable = styled.table`
  text-align: left;
  border: 1px solid;
  border-collapse: separate;
  border-spacing: 5px;
`;

export const TableRow = styled.tr`
  height: 30px;
`;

export const TableHeader = styled.th`
  width: 100px;
  background-color: #eee;
`;

export const TableData = styled.td`
  background-color: azure;
`;
