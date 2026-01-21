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
    SpawnWidget = null;
    ReceiveTick(DeltaSeconds) {
        this.K2_AddActorLocalRotation(new UE.Rotator(0, 10 * DeltaSeconds, 0), false, (0, puerts_1.$ref)(), false);
    }
    ReceiveDestroyed() {
        if (this.SpawnWidget != null) {
            this.SpawnWidget.RemoveFromParent();
            const player = UE.GameplayStatics.GetPlayerController(this, 0);
            UE.WidgetBlueprintLibrary.SetInputMode_GameOnly(player);
            player.bShowMouseCursor = false;
        }
    }
    TS_ReadStruct(outStr) {
        //蓝图结构体加载示例(枚举可直接使用)
        const S_TestStr = UE.UserDefinedStruct.Load("/Game/Blueprint/TestBP/S_TestStr.S_TestStr");
        const playerInstance = UE.NewStruct(S_TestStr);
        playerInstance.Name = UE.KismetSystemLibrary.GetDisplayName(this);
        playerInstance.Id = UE.Guid.NewGuid();
        (0, puerts_1.$set)(outStr, playerInstance);
    }
    TS_FuncPuerts() {
        //创建Widget示例
        puerts_1.blueprint.load(UE.Game.Blueprint.TestBP.WBP_TestPuer.WBP_TestPuer_C);
        //UI输入模式
        const player = UE.GameplayStatics.GetPlayerController(this, 0);
        UE.WidgetBlueprintLibrary.SetInputMode_UIOnlyEx(player);
        player.bShowMouseCursor = true;
        const TestWidget = UE.WidgetBlueprintLibrary.Create(this, UE.Game.Blueprint.TestBP.WBP_TestPuer.WBP_TestPuer_C.StaticClass(), UE.GameplayStatics.GetPlayerController(this, 0));
        //设置初始值
        TestWidget.TextBlock.SetText(UE.KismetSystemLibrary.GetDisplayName(this));
        TestWidget.SpinBox_X.SetValue(this.K2_GetActorLocation().X);
        TestWidget.SpinBox_Y.SetValue(this.K2_GetActorLocation().Y);
        TestWidget.SpinBox_Z.SetValue(this.K2_GetActorLocation().Z);
        //绑定按钮事件
        TestWidget.Button_UseV.OnClicked.Add(() => {
            this.K2_SetActorLocation(new UE.Vector(TestWidget.SpinBox_X.GetValue(), TestWidget.SpinBox_Y.GetValue(), TestWidget.SpinBox_Z.GetValue()), false, (0, puerts_1.$ref)(), false);
        });
        TestWidget.Button_Des.OnClicked.Add(() => {
            this.K2_DestroyActor();
        });
        TestWidget.AddToViewport();
        this.SpawnWidget = TestWidget;
        puerts_1.blueprint.unload(UE.Game.Blueprint.TestBP.WBP_TestPuer.WBP_TestPuer_C);
    }
};
exports.BP_TestCube = BP_TestCube;
exports.BP_TestCube = BP_TestCube = __decorate([
    (0, mixin_1.default)(AssetPath)
], BP_TestCube);
//# sourceMappingURL=BP_TestCube.js.map