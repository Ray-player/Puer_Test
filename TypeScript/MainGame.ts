import * as UE from "ue";
import { $Nullable, argv } from "puerts";
import "./AutoImport";
// console.log("Hello World!!!");

// 绑定c++中注册到TS的事件
const gameInstance = argv.getByName("GameInstance") as UE.PuertsGameInstance;
gameInstance.OnPuerFuncCall.Bind((functionName: string, uobj:$Nullable<Object>) => {
    (uobj as any)[functionName]();
});
gameInstance.OnPuerFuncCallString.Bind((functionName: string, param: string, uobj:$Nullable<Object>) => {
    (uobj as any)[functionName](param);
});
