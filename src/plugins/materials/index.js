import commands from './commands';
import blocks from './blocks';
// import components from './components';
import panels from './panels';
// import styles from './styles';

export default (editor, config) => {
  blocks(editor);

  // Load commands
  commands(editor);

  // Load panels
  panels(editor);

};