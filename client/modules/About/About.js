import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
//import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h3>Something about me!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis orci urna, sit amet convallis tellus bibendum sed. Curabitur hendrerit elit sed dui lobortis, dictum auctor mi consequat. Etiam in pulvinar velit. Sed at nulla erat. Sed ut ligula maximus, auctor metus a, euismod lacus. Nunc ultrices porttitor sem vitae ullamcorper. Praesent tincidunt, est id tempus feugiat, lacus metus faucibus sem, at auctor eros magna in tortor. Cras vitae condimentum ex. In hendrerit varius velit.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
