sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("mentoria.ka.ux420opa.controller.Main", {
        onInit() {
        },
        
        onPressTestButton: function () {
            MessageBox.show("Botão apertado!")
        }
    });
});