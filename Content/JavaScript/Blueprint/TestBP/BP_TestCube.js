"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
//ts覆盖蓝图方法调用示例
const uclass = UE.Class.Load("/Game/Blueprint/BP_TestCube.BP_TestCube_C");
const jsClass = puerts_1.blueprint.tojs(uclass);
class TS_Cube {
    /* ReceiveBeginPlay(): void {
        console.log("Message From TS_Cube | Puerts")
    } */
    ReceiveTick(DeltaSeconds) {
        this.K2_AddActorLocalRotation(new UE.Rotator(0, 10 * DeltaSeconds, 0), false, (0, puerts_1.$ref)(), false);
    }
    TS_FuncPuerts() {
        console.log("Message From TS_Cube | TS_FuncPrintMessage");
    }
}
puerts_1.blueprint.mixin(jsClass, TS_Cube);
//# sourceMappingURL=BP_TestCube.js.map