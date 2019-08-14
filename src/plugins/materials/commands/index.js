import {
  // cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from '../const';

export default (editor) => {
  const cm = editor.Commands;

  // cm.add(cmdImport, openImport(editor, config));
  cm.add(cmdDeviceDesktop, e => e.setDevice('Desktop'));
  cm.add(cmdDeviceTablet, e => e.setDevice('Tablet'));
  cm.add(cmdDeviceMobile, e => e.setDevice('Mobile portrait'));
  cm.add(cmdClear, (editor) => {
    if (confirm('Are you sure to clean the canvas?')) {
      editor.DomComponents.clear();
    }
  })
}
