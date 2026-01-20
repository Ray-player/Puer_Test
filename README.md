# UE_5.5  PUER_TEST 项目

一个用于学习UE开源插件Puerts的测试项目，包含了编写与生成的js/ts脚本。

## 主要功能

1. 插件中添加 `AutoMixinEditor` 模块用于在编辑器中对蓝图自动生成对应ts文件。
2. 添加 `PuertsHelper` 模块，负责Runtime模式下调用Puerts的C++类，如使用其中的`PuertsGameInstance`
   类替换项目的游戏实例以运行虚拟机，并提供调整Debug参数，绑定相关TS方法等功能。
3. 源码不包含V8虚拟机内核，请在Releases中下或前往[Puerts官方文档](https://puerts.github.io/docs/puerts/unreal/install)下载对应内核。

## 环境安装指引

* [Node.js官网安装](https://nodejs.org/zh-cn)
* npm设置镜像下载源：`npm config set registry https://registry.npmmirror.com`
* Typescript安装命令：`install -G typescript`
* 到项目根目录用cmd初始化ts：`npm init -y`  `tsc --init`；建议使用本项目`tsconfig.json`文件配置
* 虚幻编辑器中命令行刷新Puerts链接文件：`puerts.Gen`

