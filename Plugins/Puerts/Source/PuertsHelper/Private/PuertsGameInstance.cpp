
#include "PuertsGameInstance.h"

void UPuertsGameInstance::Init()
{
	Super::Init();
	if (!GIsEditor)
	{
		InitJsEnv();
		UE_LOG(LogTemp,Log,TEXT("InitJSEnv In PakGame"));
	}
}

void UPuertsGameInstance::OnStart()
{
	Super::OnStart();
	if (GIsEditor)
	{
		InitJsEnv();
	}
}

void UPuertsGameInstance::Shutdown()
{
	Super::Shutdown();
	JsEnv.Reset();
}

void UPuertsGameInstance::CallPuerFunc(FString FunctionName, UObject* uobj)
{
	if (UPuertsGameInstance* Instance = Cast<UPuertsGameInstance>(uobj->GetWorld()->GetGameInstance()))
	{
		Instance->OnPuerFuncCall.Execute(FunctionName,uobj);
	}
	else
	{
		UE_LOG(LogTemp, Error, TEXT("Call Function Failed:"));
		UE_LOG(LogTemp, Error, TEXT("UPuertsGameInstance::CallPuerFunc:Now GameInstance is not UPuertsGameInstance"));
	}
}

void UPuertsGameInstance::CallPuerFuncString(FString FunctionName, FString Param, UObject* uobj)
{
	if (UPuertsGameInstance* Instance = Cast<UPuertsGameInstance>(uobj->GetWorld()->GetGameInstance()))
	{
		Instance->OnPuerFuncCallString.Execute(FunctionName,Param,uobj);
	}
	else
	{
		UE_LOG(LogTemp, Error, TEXT("Call Function Failed:"));
		UE_LOG(LogTemp, Error, TEXT("UPuertsGameInstance::CallPuerFuncString:Now GameInstance is not UPuertsGameInstance"));
	}
}

void UPuertsGameInstance::InitJsEnv()
{
	// 初始化JsEnv
	if (bEnableDebug)
	{
		JsEnv = MakeShared<puerts::FJsEnv>
(std::make_unique<puerts::DefaultJSModuleLoader>(JsFileName),
	std::make_shared<puerts::FDefaultLogger>(), DebugPort);
		if (bWaitForDebugger)
		{
			JsEnv->WaitDebugger();
		}
	}
	else
	{
		JsEnv = MakeShared<puerts::FJsEnv>();
	}
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add({TEXT("GameInstance"), this});
	// 启动JsEnv
	JsEnv->Start(JsEnvStartName, Arguments);
}
