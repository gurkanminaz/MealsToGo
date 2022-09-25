import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Open = styled(SvgXml)`
  flex-direction: row;
`;
const Star = styled(SvgXml)`
  width: 20px;
  height: 20px;
`;
const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Open,
  Star,
  Icon,
};
