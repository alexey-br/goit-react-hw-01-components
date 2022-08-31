import PropTypes from 'prop-types';
import getRandomHexColor from '../utils/getRandomHexColor';
import { StatisticsWrapper, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
