import JokerList from './JokerList';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addTask,
  removeTask
} from '../../actions/tasks';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addTask: (task) => addTask(task),
    removeTask: (id) => removeTask(id)
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(JokerList);
