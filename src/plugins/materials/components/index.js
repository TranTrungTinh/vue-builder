
export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  const inputTypes = [
    {value: 'text', name: 'Text'},
    {value: 'email', name: 'Email'},
    {value: 'password', name: 'Password'},
    {value: 'number', name: 'Number'},
  ];
  
  // The `input` will be the Component type ID
  domc.addType('input', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        // Can be dropped only inside `form` elements
        draggable: 'form, form *',
        // Can't drop other elements inside it
        droppable: false,
        removable: false,
        copyable: false,
        // Traits (Settings)
        traits: ['name', 'placeholder', {
            // Change the type of the input (text, password, email, etc.)
            type: 'select',
            label: 'Type',
            name: 'type',
            options: inputTypes,
          },{
            // Can make it required for the form
            type: 'checkbox',
            label: 'Required',
            name: 'required',
        }],
      }),
    },
    {
      isComponent: function(el) {
        if(el.tagName == 'INPUT'){
          return {type: 'input'};
        }
      },
    }),
  
    // Define the View
    view: defaultView,
  });

  domc.addType('button', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        // Can be dropped only inside `form` elements
        draggable: 'form, form *',
        // Can't drop other elements inside it
        droppable: false,
        removable: false,
        copyable: false
      }),
    },
    {
      isComponent: function(el) {
        if(el.tagName == 'BUTTON'){
          return {type: 'button'};
        }
      },
    }),
  
    // Define the View
    view: defaultView,
  });
};
