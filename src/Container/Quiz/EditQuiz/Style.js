import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const CustomText = styled.Text`
  color: #fff;
  font-size: 30px;
`;