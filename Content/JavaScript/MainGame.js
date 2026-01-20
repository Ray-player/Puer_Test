"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
require("./AutoImport");
// console.log("Hello World!!!");
// 绑定c++中注册到TS的事件
const gameInstance = puerts_1.argv.getByName("GameInstance");
gameInstance.OnPuerFuncCall.Bind((functionName, uobj) => {
    uobj[functionName]();
});
gameInstance.OnPuerFuncCallString.Bind((functionName, param, uobj) => {
    uobj[functionName](param);
});
//# sourceMappingURL=MainGame.js.map