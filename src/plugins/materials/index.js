import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
// import styles from './styles';

export default (editor, config) => {
  // Load components
  components(editor, config);

  // Load blocks
  blocks(editor);

  // Load commands
  commands(editor);

  // Load panels
  panels(editor);

};