import PropTypes from 'prop-types';
import { Title, Wrap } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrap>
      <Title>{title}</Title> {children}
    </Wrap>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
