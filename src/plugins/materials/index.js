import pluginExport from 'grapesjs-plugin-export';


import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
// import styles from './styles';

export default (editor, config) => {

  const exportOpts = {
    btnLabel: "Download Zip",
    filenamePfx: "skg-template",
    root: {
      css: {
        'style.css': editor => editor.getCss(),
      },
      'index.html': editor =>
        `<!doctype html>
        <html>
        <head>
        <title>We custom title here</title>
        <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
        <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="We custom description here">
        <meta name="keywords" content="SKG, VueJS, Web builder">
        <meta name="author" content="SKG web generater">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        <link rel="stylesheet" href="css/style.css">
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        </head>
          <body>
            <main>${editor.getHtml()}</main>
          </body>
        <html>`,
      }
    }

  pluginExport(editor, exportOpts);

  // Load components
  components(editor, {
    removable: false,
    editable: false
  });

  // Load blocks
  blocks(editor);

  // Load commands
  commands(editor);

  // Load panels
  panels(editor);

};