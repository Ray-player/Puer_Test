import * as UE from "ue";
import mixin from "../../mixin";
import { $ref } from "puerts";

// 资产路径
const AssetPath = "/Game/Blueprint/TestBP/BP_TestCube.BP_TestCube_C";


// 创建一个继承ts类（或者其他类）的接口（用来类型提示）
export interface BP_TestCube extends UE.Game.Blueprint.TestBP.BP_TestCube.BP_TestCube_C {
}


// 创建一个继承ts的本体类    implements   实现类型提示
@mixin(AssetPath)
export class BP_TestCube implements BP_TestCube {
    static StaticClass: () => UE.Class;

    ReceiveTick(DeltaSeconds: number): void {
        this.K2_AddActorLocalRotation(new UE.Rotator(0, 10 * DeltaSeconds, 0),false,$ref<UE.HitResult>(),false)
    }
}