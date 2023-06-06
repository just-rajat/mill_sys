"use strict";(self.webpackChunkmill_sys=self.webpackChunkmill_sys||[]).push([[3173],{3173:(p,a,i)=>{i.r(a),i.d(a,{DocumentationModule:()=>m});var s=i(6895),r=i(6957),e=i(1571);let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:152,vars:0,consts:[[1,"card"],[1,"app-code"],[1,"font-semibold"],[1,"text-primary","font-medium"],[1,"video-container"],["width","560","height","315","src","https://www.youtube.com/embed/yl2f8KKY204","frameborder","0","allowfullscreen",""],[1,"line-height-4"],[1,"text-sm"],["href","https://www.youtube.com/watch?v=5VOuUdDXRsE",1,"font-medium","text-primary","hover:underline"],["href","https://www.primefaces.org/designer/primeng"],["href","https://www.primefaces.org/designer/api/primeng/15.0.0/",1,"font-medium","text-primary","hover:underline"]],template:function(n,c){1&n&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Documentation"),e.qZA(),e.TgZ(3,"h4"),e._uU(4,"Getting Started"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Apollo is an application template for Angular and is distributed as a CLI project. Current versions is Angular v15 with PrimeNG v15. In case CLI is not installed already, use the command below to set it up."),e.qZA(),e.TgZ(7,"pre",1)(8,"code"),e._uU(9,"npm install -g @angular/cli"),e.qZA()(),e.TgZ(10,"p"),e._uU(11,'Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment.'),e.qZA(),e.TgZ(12,"pre",1)(13,"code"),e._uU(14,"cd apollo\nnpm install\nng serve"),e.qZA()(),e.TgZ(15,"p"),e._uU(16,"The application should run at "),e.TgZ(17,"span",2),e._uU(18,"http://localhost:4200/"),e.qZA(),e._uU(19,", you may now start with the development of your application."),e.qZA(),e.TgZ(20,"h5"),e._uU(21,"Important CLI Commands"),e.qZA(),e.TgZ(22,"p"),e._uU(23,"Following commands are derived from CLI."),e.qZA(),e.TgZ(24,"pre",1)(25,"code"),e._uU(26,"Run 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options."),e.qZA()(),e.TgZ(27,"h4"),e._uU(28,"Structure"),e.qZA(),e.TgZ(29,"p"),e._uU(30,"Apollo consists of 3 main parts; the application layout, layout assets and PrimeNG component theme assets. Layout is placed inside the "),e.TgZ(31,"span",3),e._uU(32,"src/app/layout"),e.qZA(),e._uU(33," folder, and the assets are in the "),e.TgZ(34,"span",3),e._uU(35,"src/assets/layout"),e.qZA(),e._uU(36," folder. "),e.qZA(),e.TgZ(37,"h5"),e._uU(38,"Default Configuration"),e.qZA(),e.TgZ(39,"p"),e._uU(40,"Initial layout configuration can be defined at the main app component by injecting the "),e.TgZ(41,"span",3),e._uU(42,"LayoutService"),e.qZA(),e._uU(43,", this step is optional and only necessary when customizing the defaults. Note that "),e.TgZ(44,"span",3),e._uU(45,"theme"),e.qZA(),e._uU(46," and "),e.TgZ(47,"span",3),e._uU(48,"scale"),e.qZA(),e._uU(49," are not reactive since theme is configured outside of Angular at "),e.TgZ(50,"strong",2),e._uU(51,"index.html"),e.qZA(),e._uU(52," by default and initial scale is defined with the "),e.TgZ(53,"span",3),e._uU(54,"$scale"),e.qZA(),e._uU(55," at "),e.TgZ(56,"strong",2),e._uU(57,"layout.scss"),e.qZA(),e._uU(58,". When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. "),e.qZA(),e.TgZ(59,"pre",1)(60,"code"),e._uU(61,'import { Component, OnInit } from \'@angular/core\';\nimport { PrimeNGConfig } from \'primeng/api\';\nimport { LayoutService } from \'./layout/service/app.layout.service\';\n\n@Component({\n    selector: \'app-root\',\n    templateUrl: \'./app.component.html\'\n})\nexport class AppComponent implements OnInit {\n\n    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }\n\n    ngOnInit(): void {\n        this.primengConfig.ripple = true;       //enables core ripple functionality\n\n        //optional configuration with the default configuration\n        this.layoutService.config = {\n            ripple: false,                      //toggles ripple on and off\n            inputStyle: \'outlined\',             //default style for input elements\n            menuMode: \'static\',                 //layout mode of the menu, valid values are "static", "overlay", "slim" and "horizontal"\n            colorScheme: \'light\',               //color scheme of the template, valid values are "light", "dim" and "dark"\n            theme: \'indigo\',                    //default component theme for PrimeNG\n            menuTheme: "colorScheme",           //theme of the menu, valid values are "colorScheme", "primaryColor" and "transparent"\n            scale: 14                           //size of the body font size to scale the whole application\n        };\n    }\n\n}'),e.qZA()(),e.TgZ(62,"h5"),e._uU(63,"Menu"),e.qZA(),e.TgZ(64,"p"),e._uU(65,"Menu is a separate component defined in "),e.TgZ(66,"span",3),e._uU(67,"src/app/layout/app.menu.component.ts"),e.qZA(),e._uU(68," file and based on PrimeNG MenuModel API. In order to define the menuitems, navigate to this file and define your own model as a nested structure."),e.qZA(),e.TgZ(69,"pre",1)(70,"code"),e._uU(71,"import { OnInit } from '@angular/core';\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-menu',\n    templateUrl: './app.menu.component.html'\n})\nexport class AppMenuComponent implements OnInit {\n\n    model: any[];\n\n    ngOnInit() {\n        this.model = [\n            {\n                label: 'Dashboards',\n                icon: 'pi pi-home',\n                items: [\n                    {\n                        label: 'E-Commerce',\n                        icon: 'pi pi-fw pi-home',\n                        routerLink: ['/']\n                    },\n                    {\n                        label: 'Banking',\n                        icon: 'pi pi-fw pi-image',\n                        routerLink: ['/dashboard-banking']\n                    }\n                ]\n            },\n            //...\n        ];\n    }\n}"),e.qZA()(),e.TgZ(72,"h5"),e._uU(73,"Breadcrumb"),e.qZA(),e.TgZ(74,"p"),e._uU(75,"Breadcrumb component at the topbar section is dynamic and retrieves the path information from the router using the "),e.TgZ(76,"span",3),e._uU(77,"data.breadcrumb"),e.qZA(),e._uU(78," property."),e.qZA(),e.TgZ(79,"pre",1)(80,"code"),e._uU(81,"{ path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) }"),e.qZA()(),e.TgZ(82,"h4"),e._uU(83,"Integration with Existing Angular CLI Projects"),e.qZA(),e.TgZ(84,"p"),e._uU(85,"Apollo structure is designed in a modular way so that it can easily be integrated with your existing application. We've created a short tutorial with details."),e.qZA(),e.TgZ(86,"div",4),e._UZ(87,"iframe",5),e.qZA(),e.TgZ(88,"h4"),e._uU(89,"Theme"),e.qZA(),e.TgZ(90,"p"),e._uU(91,"Apollo provides 24 PrimeNG themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside "),e.TgZ(92,"span",3),e._uU(93,"assets/layout/styles/theme/"),e.qZA(),e._uU(94," folder such as "),e.TgZ(95,"span",3),e._uU(96,"assets/layout/styles/theme/theme-light/blue/theme.css"),e.qZA(),e._uU(97,"."),e.qZA(),e.TgZ(98,"p"),e._uU(99,"A custom theme can be developed by the following steps."),e.qZA(),e.TgZ(100,"ul")(101,"li",6),e._uU(102,'Choose a custom theme name such as "mytheme".'),e.qZA(),e.TgZ(103,"li",6),e._uU(104,'Create a folder named "mytheme" under '),e.TgZ(105,"span",2),e._uU(106,"assets/layouts/styles/theme-light/"),e.qZA(),e._uU(107," folder."),e.qZA(),e.TgZ(108,"li",6),e._uU(109,'Create a file such as theme.scss inside your "mytheme" folder.'),e.qZA(),e.TgZ(110,"li",6),e._uU(111,"Define the variables listed below in your file and import the dependencies."),e.qZA(),e.TgZ(112,"li",6),e._uU(113,"Include the theme.scss to your application."),e.qZA()(),e.TgZ(114,"p"),e._uU(115,"Here are the variables required to create a theme."),e.qZA(),e.TgZ(116,"pre",1)(117,"code"),e._uU(118,"$primaryColor: #3B82F6 !default;\n$primaryLightColor: #BFDBFE !default;\n$primaryDarkColor: #2563eb !default;\n$primaryDarkerColor: #1D4ED8 !default;\n$primaryTextColor: #ffffff !default;\n$primary500:#3B82F6 !default;\n\n$highlightBg: #EFF6FF !default;\n$highlightTextColor: $primaryDarkerColor !default;\n\n@import '../_variables';\n@import '../../designer/_components';\n@import '../_extensions';"),e.qZA()(),e.TgZ(119,"h5"),e._uU(120,"Theme Switcher"),e.qZA(),e.TgZ(121,"p"),e._uU(122,"Dynamic theming is built-in to the template and implemented by including the theme via a link tag instead of bundling the theme along with a configurator component to switch it. In order to switch your theme dynamically as well, it needs to be compiled to css. An example sass command to compile the css would be; "),e.qZA(),e.TgZ(123,"pre",1)(124,"code"),e._uU(125,"sass --update src/assets/theme/mytheme/theme.scss:src/assets/theme/mytheme/theme.css"),e.qZA()(),e.TgZ(126,"p",7),e._uU(127,"*Note: The sass command above is supported by Dart Sass. Please use Dart Sass instead of Ruby Sass."),e.qZA(),e.TgZ(128,"p"),e._uU(129,"Another alternative would be creating dynamic bundles, please see the "),e.TgZ(130,"a",8),e._uU(131,"video tutorial"),e.qZA(),e._uU(132," for an example."),e.qZA(),e.TgZ(133,"h5"),e._uU(134,"Theme Designer"),e.qZA(),e.TgZ(135,"p"),e._uU(136,"Apollo includes a simplified version of the "),e.TgZ(137,"a",9),e._uU(138,"PrimeNG Theme Designer"),e.qZA(),e._uU(139," that only includes the main SASS structure. Full list of SASS variables to customize the components further is available at the "),e.TgZ(140,"a",10),e._uU(141,"SASS API"),e.qZA(),e._uU(142," docs. "),e.qZA(),e.TgZ(143,"h4"),e._uU(144,"Migration Guide"),e.qZA(),e.TgZ(145,"p"),e._uU(146,"Every important change is included in "),e.TgZ(147,"b"),e._uU(148,"CHANGELOG.md"),e.qZA(),e._uU(149," file at the root folder of the distribution along with the instructions to update. Whenever a major version of Angular is released, a new version of the template is provided that mainly brings compatibility support to the PrimeNG component theming. If there are no compatibility issues on component theming e.g. new components or new functionality to PrimeNG, you may still update your application to the latest Angular and PrimeNG without the need to waiting for an update."),e.qZA(),e.TgZ(150,"p"),e._uU(151,'Initial integration with an existing CLI application and the update process is similar. During an update, only the layout folder and layout assets folder need to be updated and overriden, see the "Integration with Existing Angular CLI Projects" section for more information.'),e.qZA()())},styles:["@media screen and (max-width: 991px){.video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:0;padding-bottom:56.25%}.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}}"]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:u}]),r.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,l]}),t})()}}]);