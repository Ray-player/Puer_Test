import * as UE from "ue"
import {$ref, argv, blueprint } from "puerts"

//ts覆盖蓝图方法调用示例
const uclass = UE.Class.Load("/Game/Blueprint/BP_TestCube.BP_TestCube_C")
const jsClass = blueprint.tojs<typeof UE.Game.Blueprint.TestBP.BP_TestCube.BP_TestCube_C>(uclass)

interface TS_Cube extends UE.Game.Blueprint.TestBP.BP_TestCube.BP_TestCube_C{}
class TS_Cube implements TS_Cube{
    /* ReceiveBeginPlay(): void {
        console.log("Message From TS_Cube | Puerts")
    } */
    ReceiveTick(DeltaSeconds: number): void {
        this.K2_AddActorLocalRotation(new UE.Rotator(0, 10 * DeltaSeconds, 0),false,$ref<UE.HitResult>(),false)
    }
    TS_FuncPuerts(): void {
        console.log("Message From TS_Cube | TS_FuncPrintMessage")
    }
}

blueprint.mixin(jsClass, TS_Cube)

