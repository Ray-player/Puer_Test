import * as UE from "ue";
import mixin from "../../mixin";
import { $Ref, $set, $unref } from "puerts";


// 资产路径
const AssetPath = "/Game/Blueprint/TestBP/BP_PuerT2.BP_PuerT2_C";


// 创建一个继承ts类（或者其他类）的接口（用来类型提示）
export interface BP_PuerT2 extends UE.Game.Blueprint.TestBP.BP_PuerT2.BP_PuerT2_C {
}


// 创建一个继承ts的本体类    implements   实现类型提示
@mixin(AssetPath)
export class BP_PuerT2 implements BP_PuerT2 {
    static StaticClass: () => UE.Class;
   /*  ReceiveBeginPlay(): void {
        console.log("Message From BP_PuerT2 | BeginPlay")
        UE.KismetSystemLibrary.PrintString(this, "Message From BP_PuerT2 | BeginPlay", true, true, UE.LinearColor.Blue, 2.0);
    } */

    TS_PrintPueraddBP(InStr: $Ref<string>, OutStr: $Ref<string>): void {
        // 使用引用值需要用$unref()方法包裹
        $set(OutStr, "Start From TScode" + $unref(InStr));
    }

    TS_Message(): void {
        UE.KismetSystemLibrary.PrintString(this,"Message From Bind Function: ", true, true, UE.LinearColor.Yellow, 2.0);
    }
    TS_MessageParam(param: string): void {
        UE.KismetSystemLibrary.PrintString(this,"Message From Bind Function Param: " + param, true, true, UE.LinearColor.Yellow, 2.0);
    }

    
}