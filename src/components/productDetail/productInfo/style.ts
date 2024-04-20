import styled from 'styled-components';

export const ProductInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ProductCarouselLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
`;

export const ProductInfoTable = styled.table`
  border-collapse: separate;
  border-spacing: 5px;
`;

export const TableRow = styled.tr`
  height: 30px;
`;

export const TableHeader = styled.th`
  width: 100px;
  vertical-align: middle;
  background-color: #eee;
`;

export const TableData = styled.td`
  text-align: left;
  vertical-align: middle;
  background-color: azure;
`;
