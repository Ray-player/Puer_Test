import * as UE from "ue";
import mixin from "../../mixin";
import { $Ref, $ref, $set, blueprint } from "puerts";

// 资产路径
const AssetPath = "/Game/Blueprint/TestBP/BP_TestCube.BP_TestCube_C";


// 创建一个继承ts类（或者其他类）的接口（用来类型提示）
export interface BP_TestCube extends UE.Game.Blueprint.TestBP.BP_TestCube.BP_TestCube_C {
}


// 创建一个继承ts的本体类    implements   实现类型提示
@mixin(AssetPath)
export class BP_TestCube implements BP_TestCube {
    static StaticClass: () => UE.Class;
    SpawnWidget: UE.UserWidget = null;

    ReceiveTick(DeltaSeconds: number): void {
        this.K2_AddActorLocalRotation(new UE.Rotator(0, 10 * DeltaSeconds, 0), false, $ref<UE.HitResult>(), false)
    }
    ReceiveDestroyed(): void {
        if (this.SpawnWidget != null) {
            this.SpawnWidget.RemoveFromParent();

            const player = UE.GameplayStatics.GetPlayerController(this, 0);
            UE.WidgetBlueprintLibrary.SetInputMode_GameOnly(player);
            player.bShowMouseCursor = false;
        }
    }

    TS_ReadStruct(outStr: $Ref<UE.Game.Blueprint.TestBP.S_TestStr.S_TestStr>): void {
        //蓝图结构体加载示例(枚举可直接使用)
        const S_TestStr = UE.UserDefinedStruct.Load("/Game/Blueprint/TestBP/S_TestStr.S_TestStr");
        const playerInstance = UE.NewStruct(S_TestStr) as UE.Game.Blueprint.TestBP.S_TestStr.S_TestStr;
        playerInstance.Name = UE.KismetSystemLibrary.GetDisplayName(this);
        playerInstance.Id = UE.Guid.NewGuid();

        $set(outStr, playerInstance);
    }
    TS_FuncPuerts(): void {
        //创建Widget示例
        blueprint.load(UE.Game.Blueprint.TestBP.WBP_TestPuer.WBP_TestPuer_C);

        //UI输入模式
        const player = UE.GameplayStatics.GetPlayerController(this, 0);
        UE.WidgetBlueprintLibrary.SetInputMode_UIOnlyEx(player);
        player.bShowMouseCursor = true;

        const TestWidget = UE.WidgetBlueprintLibrary.Create
            (this, UE.Game.Blueprint.TestBP.WBP_TestPuer.WBP_TestPuer_C.StaticClass(),
                UE.GameplayStatics.GetPlayerController(this, 0)) as UE.Game.Blueprint.TestBP.WBP_TestPuer.WBP_TestPuer_C;
        //设置初始值
        TestWidget.TextBlock.SetText(UE.KismetSystemLibrary.GetDisplayName(this));
        TestWidget.SpinBox_X.SetValue(this.K2_GetActorLocation().X);
        TestWidget.SpinBox_Y.SetValue(this.K2_GetActorLocation().Y);
        TestWidget.SpinBox_Z.SetValue(this.K2_GetActorLocation().Z);
        //绑定按钮事件
        TestWidget.Button_UseV.OnClicked.Add(() => {
            this.K2_SetActorLocation(new UE.Vector(TestWidget.SpinBox_X.GetValue(), TestWidget.SpinBox_Y.GetValue(), TestWidget.SpinBox_Z.GetValue()),
                false, $ref<UE.HitResult>(), false);
        })
        TestWidget.Button_Des.OnClicked.Add(() => {
            this.K2_DestroyActor();
        })



        TestWidget.AddToViewport();
        this.SpawnWidget = TestWidget;

        blueprint.unload(UE.Game.Blueprint.TestBP.WBP_TestPuer.WBP_TestPuer_C);
    }
}