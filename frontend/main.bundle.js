webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/Auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=Auth.guard.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".flash-messages {\n    margin-top: 5px;\n    margin-bottom: 5px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"flash-messages\">\n  <flash-messages></flash-messages>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__websocket_service__ = __webpack_require__("./src/app/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Auth_guard__ = __webpack_require__("./src/app/Auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__chatroom_chatroom_component__ = __webpack_require__("./src/app/chatroom/chatroom.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_15__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__Auth_guard__["a" /* AuthGuard */]] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__Auth_guard__["a" /* AuthGuard */]] },
    { path: 'chatroom', component: __WEBPACK_IMPORTED_MODULE_19__chatroom_chatroom_component__["a" /* ChatroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__Auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_19__chatroom_chatroom_component__["a" /* ChatroomComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__Auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_0__websocket_service__["a" /* WebsocketService */],
            { provide: __WEBPACK_IMPORTED_MODULE_11__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_11__angular_common__["HashLocationStrategy"] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "/* .myDiv {\n    margin-top: 50px;\n    border: 0.5px solid grey;\n    height: 100%;\n    overflow: hidden;\n}\n\n.user-names {\n    height: 50px;\n    border-bottom: 1px solid grey;\n    border-right: 1px solid grey;\n    padding: 5px;\n    text-align: left;\n    cursor: pointer;\n}\n\n.user-names:hover {\n    background-color: #A0A0A0;\n    font-weight: bold;\n}\n\n.user-profile {\n    height: 70px;\n    border-bottom: 1px solid grey;\n    border-right: 1px solid grey;\n    padding: 5px;\n}\n\n[data-letters]:before {\n    content:attr(data-letters);\n    display:inline-block;\n    font-size:1em;\n    width:2.5em;\n    height:2.5em;\n    line-height:2.5em;\n    text-align:center;\n    border-radius:50%;\n    background:#2B3DA5;\n    vertical-align:middle;\n    margin-right:1em;\n    color:white;\n}\n*/\n\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Users</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of Users\">\n            <td *ngIf=\"user.username != userService.getLoggedInUser().username\">{{ user.username }}</td>\n            <td *ngIf=\"user.username != userService.getLoggedInUser().username\"><button class=\"btn btn-success button\" routerLink=\"/chatroom\" [queryParams]=\"{ name: user.username, email: user.email }\" >Chat</button></td>\n          </tr>   \n        </tbody>\n      </table>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(userService) {
        this.userService = userService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.Users = users.json();
        });
    };
    ChatComponent.prototype.getUser = function () {
        return this.userService.getLoggedInUser().username;
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("./src/app/chat/chat.component.html"),
        styles: [__webpack_require__("./src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/***/ (function(module, exports) {

module.exports = "\nh2{\n    font-size: 18px;\n    padding: 10px 20px;\n    color: #0D570D;\n}\n\n#mario-chat{\n    max-width: 1000px;\n    min-width: 500px;\n    margin: 30px auto;\n    border: 1px solid #ddd;\n    -webkit-box-shadow: 1px 3px 5px rgba(0,0,0,0.05);\n            box-shadow: 1px 3px 5px rgba(0,0,0,0.05);\n    border-radius: 2px;\n    border-radius: 10px;\n}\n\n#chat-window{\n    height: 500px;\n    overflow: auto;\n    background: #E2E2E2;\n}\n\n#output p{\n    padding: 14px 0px;\n    margin: 0 20px;\n    border-bottom: 1px solid #e9e9e9;\n    color: #555;\n}\n\n#output {\n    height: 500px;\n}\n\n#feedback p{\n    color: #aaa;\n    padding: 14px 0px;\n    margin: 0 20px;\n}\n\n.chat-output {\n    height: 500px;\n}\n\nlabel{\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: block;\n    padding: 10px 20px;\n}\n\ninput{\n    padding: 10px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background: #eee;\n    border: 0;\n    display: block;\n    width: 100%;\n    background: #fff;\n    border-bottom: 1px solid #eee;\n    font-family: Nunito;\n    font-size: 16px;\n}\n\n#send{\n    background: #0C491B;\n    color: #fff;\n    font-size: 18px;\n    border: 0;\n    padding: 12px 0;\n    width: 100%;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n#leave {\n    background: skyblue;\n    color: #fff;\n    font-size: 18px;\n    border: 0;\n    padding: 12px 0;\n    width: 100%;\n    border-radius: 0 0 2px 2px;\n}\n\n.userMessage {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-width: 70%;\n    background-color: #5B9B5B;\n    padding: 10px;\n    border-radius: 5px;\n    margin-top: 1px;\n    color: white;\n}\n\n.secUserMessage {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-width: 70%;\n    background-color: white;\n    padding: 10px;\n    border-radius: 5px;\n    margin-top: 1px;\n    color: black;\n}\n\n.isTyping {\n    color: #888787;\n    padding-left: 5px;\n\n}"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mario-chat\">\n    <h2>{{ username }}</h2>\n    <span><i *ngIf=\"isTyping\" class=\"isTyping\">typing...</i></span>\n    <div id=\"chat-window\">\n        <div *ngFor=\"let item of messageArray\">\n            <p [class.userMessage] = \"item.user == userService.getLoggedInUser().username\" [class.secUserMessage]=\"item.user != userService.getLoggedInUser().username\">{{ item.message }}</p>                \n        </div>\n        <!-- <div id=\"feedback\"></div> -->\n    </div>\n    <input (keypress)=\"typing()\" [(ngModel)]=\"message\" name=\"message\" type=\"text\" placeholder=\"Message\" />            \n    <button id=\"send\" (click)=\"sendMessage()\">Send</button>    \n</div>"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__websocket_service__ = __webpack_require__("./src/app/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatroomComponent = (function () {
    function ChatroomComponent(route, webSocketService, userService, router) {
        var _this = this;
        this.route = route;
        this.webSocketService = webSocketService;
        this.userService = userService;
        this.router = router;
        this.messageArray = [];
        this.isTyping = false;
        this.webSocketService.newMessageReceived().subscribe(function (data) {
            _this.messageArray.push(data);
            _this.isTyping = false;
        });
        this.webSocketService.receivedTyping().subscribe(function (bool) {
            _this.isTyping = bool.isTyping;
        });
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.route.snapshot.queryParamMap.get('name');
        this.email = this.route.snapshot.queryParamMap.get('email');
        var currentUser = this.userService.getLoggedInUser();
        if (currentUser.username < this.username) {
            this.chatroom = currentUser.username.concat(this.username);
        }
        else {
            this.chatroom = this.username.concat(currentUser.username);
        }
        this.webSocketService.joinRoom({ user: this.userService.getLoggedInUser().username, room: this.chatroom });
        this.userService.getChatRoomsChat(this.chatroom).subscribe(function (messages) {
            _this.messageArray = messages.json();
        });
    };
    ChatroomComponent.prototype.sendMessage = function () {
        this.webSocketService.sendMessage({ room: this.chatroom, user: this.userService.getLoggedInUser().username, message: this.message });
        this.message = '';
    };
    ChatroomComponent.prototype.typing = function () {
        this.webSocketService.typing({ room: this.chatroom, user: this.userService.getLoggedInUser().username });
    };
    return ChatroomComponent;
}());
ChatroomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-chatroom',
        template: __webpack_require__("./src/app/chatroom/chatroom.component.html"),
        styles: [__webpack_require__("./src/app/chatroom/chatroom.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__websocket_service__["a" /* WebsocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__websocket_service__["a" /* WebsocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ChatroomComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chatroom.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".welcome {\n    font-family: lobster;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1 class=\"\">Sample Chat App</h1>\n    <p class=\"lead\">Welcome to the demo MEAN stack Socket.io Chat App</p>\n    <ng-template #buttons>\n        <a class=\"btn btn-info\" [routerLink]=\"['/login']\">Login</a>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/sign-up']\">Sign-up</a> \n    </ng-template>\n    <div *ngIf=\"userService.loggedIn(); else buttons\" class=\"container\">\n        <h4 class=\"welcome\">Welcome, {{ userService.getLoggedInUser().username }}</h4>\n        <button class=\"btn btn-success\" routerLink=\"/chat\">Start Chatting</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n.form {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-align: center;\n    -ms-flex-pack: center;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n  \n  .form-signin {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n  }\n  \n  .form-signin .checkbox {\n    font-weight: 400;\n  }\n  \n  .form-signin .form-control {\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: auto;\n    padding: 10px;\n    font-size: 16px;\n  }\n  \n  .form-signin .form-control:focus {\n    z-index: 2;\n  }\n  \n  .form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  \n  .form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"text-md-center container\">\n    <form class=\"form-signin\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Login</h1>\n      <label for=\"inputEmail\" class=\"sr-only\">Username</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" required autofocus>\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n      <div class=\"checkbox mb-3\">\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"login()\" type=\"submit\">Login</button>\n      <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, fmService, router) {
        this.userService = userService;
        this.fmService = fmService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.userService.login(user).subscribe(function (response) {
            var res = response.json();
            if (res.isPresent === true) {
                if (res.correctPassword === true) {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    _this.fmService.show('Successfully logged in', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                    _this.router.navigate(['/']);
                }
                else {
                    _this.fmService.show('Incorrect Password', {
                        cssClass: 'alert-danger',
                        timeout: 3000
                    });
                }
            }
            else {
                _this.fmService.show('User not found', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".site-name {\n    font-family: Lobster;\n}\n\n.nav-item :hover {\n    font-weight: bold;\n}\n\n.cursor {\n    cursor: pointer;\n}\n\n.navbar {\n    -webkit-box-shadow: 0 8px 6px -6px #999;\n    box-shadow: 0 8px 6px -6px #999;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a [routerLink]=\"['/']\" class=\"navbar-brand site-name text-dark\">Chat App</a>\n  <button class=\"navbar-toggler collapsed\" (click)=\"isCollapsed = !isCollapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navItems\" aria-controls=\"navItems\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n   <div class=\"collapse navbar-collapse\" [collapse]=\"!isCollapsed\" id=\"navItems\">\n      <ul class=\"nav navbar-nav ml-auto\">\n          <ng-template #anonymous>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">Login</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link text-dark\" [routerLink]=\"['/sign-up']\">Sign Up</a>\n                </li>\n          </ng-template>\n          <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" class=\"nav-item\">\n            <a class=\"nav-link text-dark dropdown-item cursor\" routerLink=\"/chat\">Chat</a>\n        </li>\n          <li ngbDropdown *ngIf=\"userService.loggedIn(); else anonymous\" class=\"nav-item dropdown\">\n                <a  ngbDropdownToggle class=\"nav-link text-dark dropdown-toggle cursor\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ userService.getLoggedInUser().username }}</a>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                    <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                        <a class=\"nav-link text-dark dropdown-item\" [routerLink]=\"['/profile']\">Profile</a>\n                    </li>\n                    <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\n                        <a class=\"nav-link text-dark dropdown-item cursor\" (click)=\"onLogoutClick()\">Logout</a>\n                    </li>\n                </div>                \n          </li>   \n      </ul> \n    </div> \n</nav> "

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(userService, fmService, router) {
        this.userService = userService;
        this.fmService = fmService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        localStorage.removeItem('user');
        this.fmService.show('Successfully logged-out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".container2 {\n    margin-top: 70px;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container2 container\">\n    <h1 class=\"page-header\">{{ user.username }}</h1>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Email: {{ user.email }}</li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var User = JSON.parse(localStorage.getItem('user'));
        if (User != null) {
            this.user = User;
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports) {

module.exports = "\n.form {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n.form-signin .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"text-md-center container\">\n    <form class=\"form-signin\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Sign-Up</h1>\n      <div *ngIf=\"usernameIsEmpty\" class=\"alert alert-danger\">\n        Username is required\n      </div>\n      <div *ngIf=\"emailIsEmpty\" class=\"alert alert-danger\">\n        Email is required\n      </div>\n      <div *ngIf=\"passwordIsEmpty\" class=\"alert alert-danger\">\n        Password is required\n      </div>\n      <label for=\"inputEmail\" class=\"sr-only\">Username</label>\n      <input type=\"text\" id=\"name\"  class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" required autofocus>\n\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email address\" required autofocus>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required>\n\n      <div class=\"checkbox mb-3\">\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"submitForm()\" type=\"submit\">Sign up</button>\n      <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = (function () {
    function SignUpComponent(userService, fmService, router) {
        this.userService = userService;
        this.fmService = fmService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.usernameIsEmpty = false;
        this.emailIsEmpty = false;
        this.passwordIsEmpty = false;
        this.count = 0;
    };
    SignUpComponent.prototype.submitForm = function () {
        var _this = this;
        this.usernameIsEmpty = false;
        this.emailIsEmpty = false;
        this.passwordIsEmpty = false;
        if (this.username === undefined || this.username === '') {
            this.usernameIsEmpty = true;
            this.count++;
        }
        if (this.email === undefined || this.email === '') {
            this.emailIsEmpty = true;
            this.count++;
        }
        if (this.password === undefined || this.password === '') {
            this.passwordIsEmpty = true;
            this.count++;
        }
        if (this.count === 0) {
            var user = {
                username: this.username,
                email: this.email,
                password: this.password
            };
            this.userService.saveUser(user).subscribe(function (response) {
                if (response.json().user_already_signed_up === true) {
                    _this.fmService.show('Username already taken.', {
                        cssClass: 'alert-danger',
                        timeout: 3000
                    });
                }
                else {
                    _this.fmService.show('Successfully signed up. You can now login', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("./src/app/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.saveUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/api/users", user, { headers: headers });
    };
    UserService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/api/login", user, { headers: headers });
    };
    UserService.prototype.loggedIn = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user != null ? true : false;
    };
    UserService.prototype.getLoggedInUser = function () {
        return JSON.parse(localStorage.getItem("user"));
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/api/users");
    };
    UserService.prototype.getChatRoomsChat = function (chatRoom) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/chatroom/" + chatRoom);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsocketService = (function () {
    function WebsocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl);
    }
    WebsocketService.prototype.joinRoom = function (data) {
        console.log(data);
        this.socket.emit('join', data);
    };
    WebsocketService.prototype.sendMessage = function (data) {
        this.socket.emit('message', data);
    };
    WebsocketService.prototype.newMessageReceived = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('new message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    WebsocketService.prototype.typing = function (data) {
        this.socket.emit('typing', data);
    };
    WebsocketService.prototype.receivedTyping = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('typing', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return WebsocketService;
}());
WebsocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WebsocketService);

//# sourceMappingURL=websocket.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'https://divek.herokuapp.com',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map