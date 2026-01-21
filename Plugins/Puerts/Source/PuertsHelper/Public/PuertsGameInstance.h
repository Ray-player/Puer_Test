//控制台刷新puerTs命令: Puerts.Gen

#pragma once

#include "CoreMinimal.h"
#include "JsEnv.h"
#include "Engine/GameInstance.h"
#include "PuertsGameInstance.generated.h"

/**
 * 游戏实例类，自动启动Puerts的虚拟机，并提供调试入口
 */
UCLASS()
class PUERTSHELPER_API UPuertsGameInstance : public UGameInstance
{
	GENERATED_BODY()
public:
	virtual void Init() override;
	virtual void OnStart() override;
	virtual void Shutdown() override;
	//TS入口文件名称
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PuertsHelper")
	FString JsEnvStartName = TEXT("MainGame");
	//对应JS代码存放路径
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PuertsHelper")
	FString JsFileName = TEXT("JavaScript");
	//防止TS中Mixin蓝图被GS回收的类引用
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PuertsHelper")
	TArray<TSubclassOf<UObject>> ClassContainer;
	//是否开启调试模式
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PuertsHelper|Debug")
	bool bEnableDebug = true;
	//是否等待调试器连接
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PuertsHelper|Debug")
	bool bWaitForDebugger = true;
	//调试端口号
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "PuertsHelper|Debug")
	int DebugPort = 8080;

	/*通过在Puerts入口类(MainGame.ts对应JsEnvStartName属性)中绑定该委托
	 * 实现通过函数名调用Puerts中的函数
	 */
	DECLARE_DYNAMIC_DELEGATE_TwoParams(FPuerFuncCall,FString,FunctionName,UObject*,uobj);
	UPROPERTY()
	FPuerFuncCall OnPuerFuncCall;
	DECLARE_DYNAMIC_DELEGATE_ThreeParams(FPuerFuncCallString, FString, FunctionName, FString, Param, UObject*, uobj);
	UPROPERTY()
	FPuerFuncCallString OnPuerFuncCallString;
	
	/**
	 * @brief 调用Puerts中的函数
	 * @param FunctionName 函数名
	 * @param uobj         调用对象
	 */
	UFUNCTION(BlueprintCallable,Category="Puerts|Helper")
	static void CallPuerFunc(FString FunctionName,UObject* uobj);
	/**
	 * @brief 调用Puerts中的函数
	 * @param FunctionName 函数名
	 * @param Param        参数(string)
	 * @param uobj         调用对象
	 */
	UFUNCTION(BlueprintCallable,Category="Puerts|Helper")
	static void CallPuerFuncString(FString FunctionName,FString Param,UObject* uobj);

private:
	void InitJsEnv();
	TSharedPtr<puerts::FJsEnv> JsEnv;
};
