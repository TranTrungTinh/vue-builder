<template>
  <div id="gjs" />
</template>

<script>
export default {
  name: "grapesjs",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      gjs: null
    };
  },
  mounted() {
    this.gjs = this.$grapesjs.init(
      Object.assign({}, this.options, {
        allowScripts: 1,
        showOffsets: 1,
        container: "#gjs",
        fromElement: true,
        canvas: {
          styles: [
            "https://fonts.googleapis.com/css?family=Roboto",
            "https://fonts.googleapis.com/icon?family=Material+Icons",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
          ],
          scripts: [
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"
          ]
        },
        storageManager: {
          id: "skg-",
          type: "local",
          autosave: 1,
          autoload: 1,
          stepsBeforeSave: 1,
          storeComponents: 1,
          storeStyles: 1,
          storeHtml: 0,
          storeCss: 0
        },
        styleManager: {
          sectors: [
            {
              name: "General",
              open: false,
              buildProps: [
                "float",
                "display",
                "position",
                "top",
                "right",
                "left",
                "bottom"
              ]
            },
            {
              name: "Dimension",
              open: false,
              buildProps: [
                "width",
                "height",
                "max-width",
                "min-height",
                "margin",
                "padding"
              ]
            },
            {
              name: "Typography",
              open: false,
              buildProps: [
                "font-family",
                "font-size",
                "font-weight",
                "letter-spacing",
                "color",
                "line-height",
                "text-align",
                "text-shadow"
              ],
              properties: [
                {
                  property: "text-align",
                  list: [
                    {
                      value: "left",
                      className: "fa fa-align-left"
                    },
                    {
                      value: "center",
                      className: "fa fa-align-center"
                    },
                    {
                      value: "right",
                      className: "fa fa-align-right"
                    },
                    {
                      value: "justify",
                      className: "fa fa-align-justify"
                    }
                  ]
                }
              ]
            },
            {
              name: "Decorations",
              open: false,
              buildProps: [
                "border-radius-c",
                "background-color",
                "border-radius",
                "border",
                "box-shadow",
                "background"
              ]
            },
            {
              name: "Extra",
              open: false,
              buildProps: ["opacity", "transition", "perspective", "transform"],
              properties: [
                {
                  type: "slider",
                  property: "opacity",
                  defaults: 1,
                  step: 0.01,
                  max: 1,
                  min: 0
                }
              ]
            },
            {
              name: "Flex",
              open: false,
              properties: [
                {
                  name: "Flex Container",
                  property: "display",
                  type: "select",
                  defaults: "block",
                  list: [
                    {
                      value: "block",
                      name: "Disable"
                    },
                    {
                      value: "flex",
                      name: "Enable"
                    }
                  ]
                },
                {
                  name: "Flex Parent",
                  property: "label-parent-flex"
                },
                {
                  name: "Direction",
                  property: "flex-direction",
                  type: "radio",
                  defaults: "row",
                  list: [
                    {
                      value: "row",
                      name: "Row",
                      className: "icons-flex icon-dir-row",
                      title: "Row"
                    },
                    {
                      value: "row-reverse",
                      name: "Row reverse",
                      className: "icons-flex icon-dir-row-rev",
                      title: "Row reverse"
                    },
                    {
                      value: "column",
                      name: "Column",
                      title: "Column",
                      className: "icons-flex icon-dir-col"
                    },
                    {
                      value: "column-reverse",
                      name: "Column reverse",
                      title: "Column reverse",
                      className: "icons-flex icon-dir-col-rev"
                    }
                  ]
                },
                {
                  name: "Wrap",
                  property: "flex-wrap",
                  type: "radio",
                  defaults: "nowrap",
                  list: [
                    {
                      value: "nowrap",
                      title: "Single line"
                    },
                    {
                      value: "wrap",
                      title: "Multiple lines"
                    },
                    {
                      value: "wrap-reverse",
                      title: "Multiple lines reverse"
                    }
                  ]
                },
                {
                  name: "Justify",
                  property: "justify-content",
                  type: "radio",
                  defaults: "flex-start",
                  list: [
                    {
                      value: "flex-start",
                      className: "icons-flex icon-just-start",
                      title: "Start"
                    },
                    {
                      value: "flex-end",
                      title: "End",
                      className: "icons-flex icon-just-end"
                    },
                    {
                      value: "space-between",
                      title: "Space between",
                      className: "icons-flex icon-just-sp-bet"
                    },
                    {
                      value: "space-around",
                      title: "Space around",
                      className: "icons-flex icon-just-sp-ar"
                    },
                    {
                      value: "center",
                      title: "Center",
                      className: "icons-flex icon-just-sp-cent"
                    }
                  ]
                },
                {
                  name: "Align",
                  property: "align-items",
                  type: "radio",
                  defaults: "center",
                  list: [
                    {
                      value: "flex-start",
                      title: "Start",
                      className: "icons-flex icon-al-start"
                    },
                    {
                      value: "flex-end",
                      title: "End",
                      className: "icons-flex icon-al-end"
                    },
                    {
                      value: "stretch",
                      title: "Stretch",
                      className: "icons-flex icon-al-str"
                    },
                    {
                      value: "center",
                      title: "Center",
                      className: "icons-flex icon-al-center"
                    }
                  ]
                },
                {
                  name: "Flex Children",
                  property: "label-parent-flex"
                },
                {
                  name: "Order",
                  property: "order",
                  type: "integer",
                  defaults: 0,
                  min: 0
                },
                {
                  name: "Flex",
                  property: "flex",
                  type: "composite",
                  properties: [
                    {
                      name: "Grow",
                      property: "flex-grow",
                      type: "integer",
                      defaults: 0,
                      min: 0
                    },
                    {
                      name: "Shrink",
                      property: "flex-shrink",
                      type: "integer",
                      defaults: 0,
                      min: 0
                    },
                    {
                      name: "Basis",
                      property: "flex-basis",
                      type: "integer",
                      units: ["px", "%", ""],
                      unit: "",
                      defaults: "auto"
                    }
                  ]
                },
                {
                  name: "Align",
                  property: "align-self",
                  type: "radio",
                  defaults: "auto",
                  list: [
                    {
                      value: "auto",
                      name: "Auto"
                    },
                    {
                      value: "flex-start",
                      title: "Start",
                      className: "icons-flex icon-al-start"
                    },
                    {
                      value: "flex-end",
                      title: "End",
                      className: "icons-flex icon-al-end"
                    },
                    {
                      value: "stretch",
                      title: "Stretch",
                      className: "icons-flex icon-al-str"
                    },
                    {
                      value: "center",
                      title: "Center",
                      className: "icons-flex icon-al-center"
                    }
                  ]
                }
              ]
            }
          ]
        }
      })
    );
  },
  destroyed() {
    this.gjs.destroy();
  }
};
</script>

<style src='grapesjs/dist/css/grapes.min.css'></style>


