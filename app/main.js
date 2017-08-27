"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// Need the method to enable, disable the production mode
var core_1 = require("@angular/core");
// Import the application modules
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
// We shoud enable the production mode
// enableProdMode();
core_1.enableProdMode();
// Start the Web application
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map