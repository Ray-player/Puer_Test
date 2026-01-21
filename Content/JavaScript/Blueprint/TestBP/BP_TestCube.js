"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BP_TestCube = void 0;
const UE = require("ue");
const mixin_1 = require("../../mixin");
const puerts_1 = require("puerts");
// 资产路径
const AssetPath = "/Game/Blueprint/TestBP/BP_TestCube.BP_TestCube_C";
// 创建一个继承ts的本体类    implements   实现类型提示
let BP_TestCube = class BP_TestCube {
    static StaticClass;
    ReceiveTick(DeltaSeconds) {
        this.K2_AddActorLocalRotation(new UE.Rotator(0, 10 * DeltaSeconds, 0), false, (0, puerts_1.$ref)(), false);
    }
};
exports.BP_TestCube = BP_TestCube;
exports.BP_TestCube = BP_TestCube = __decorate([
    (0, mixin_1.default)(AssetPath)
], BP_TestCube);
//# sourceMappingURL=BP_TestCube.js.map