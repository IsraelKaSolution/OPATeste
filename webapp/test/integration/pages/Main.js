sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "Main";
	
	Opa5.createPageObjects({
		onTheViewPage: {

			actions: {},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "page",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},

				iShouldFindAButton: function () {
					return this.waitFor({
						id: "helloButton",
						viewName: sViewName,
						success: function (oButton) {
							oButton.$().trigger("press")
							Opa5.assert.ok(oButton.getId(), "Botão encontrado !");
						},
						errorMessage: "Botão não encontrado"
					});
				}
			}
		}
	});

});
