"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BP_PuerT2 = void 0;
const UE = require("ue");
const mixin_1 = require("../../mixin");
const puerts_1 = require("puerts");
// 资产路径
const AssetPath = "/Game/Blueprint/TestBP/BP_PuerT2.BP_PuerT2_C";
// 创建一个继承ts的本体类    implements   实现类型提示
let BP_PuerT2 = class BP_PuerT2 {
    static StaticClass;
    /*  ReceiveBeginPlay(): void {
         console.log("Message From BP_PuerT2 | BeginPlay")
         UE.KismetSystemLibrary.PrintString(this, "Message From BP_PuerT2 | BeginPlay", true, true, UE.LinearColor.Blue, 2.0);
     } */
    TS_PrintPueraddBP(InStr, OutStr) {
        // 使用引用值需要用$unref()方法包裹
        (0, puerts_1.$set)(OutStr, "Start From TScode" + (0, puerts_1.$unref)(InStr));
    }
    TS_Message() {
        UE.KismetSystemLibrary.PrintString(this, "Message From Bind Function: ", true, true, UE.LinearColor.Yellow, 2.0);
    }
    TS_MessageParam(param) {
        UE.KismetSystemLibrary.PrintString(this, "Message From Bind Function Param: " + param, true, true, UE.LinearColor.Yellow, 2.0);
    }
    TS_CreateCubeActor() {
        //蓝图类加载示例
        //blueprint.load(UE.Game.Blueprint.TestBP.BP_TestCube.BP_TestCube_C);
        const cubeClass = UE.Class.Load("/Game/Blueprint/TestBP/BP_TestCube.BP_TestCube_C");
        const Actors = UE.NewArray(UE.Actor);
        /* 检测场景中是否已存在BP_TestCube
        UE.GameplayStatics.GetAllActorsOfClass(this, cubeClass,$ref(Actors));
        for( let Act of Actors ){
            if(Act != null){
                Act.K2_DestroyActor();
            }
        } */
        const BP_TestCube = UE.GameplayStatics.BeginDeferredActorSpawnFromClass(this, cubeClass, this.GetTransform());
        UE.GameplayStatics.FinishSpawningActor(BP_TestCube, this.GetTransform());
    }
};
exports.BP_PuerT2 = BP_PuerT2;
exports.BP_PuerT2 = BP_PuerT2 = __decorate([
    (0, mixin_1.default)(AssetPath)
], BP_PuerT2);
//# sourceMappingURL=BP_PuerT2.js.map