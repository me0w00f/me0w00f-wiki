# JetBrains 全家桶

由[@Jinze](https://jinze.me0w00f.tech/)编辑此页面

## 基本介绍

****

JetBrains 全家桶是指由 JetBrains 公司开发的一系列集成开发环境（IDE）和开发工具的组合。它包括多个受欢迎的开发工具：

* CLion：适用于C和C++开发的集成开发环境。
* IntelliJ IDEA：适用于Java、Kotlin、Groovy和其他JVM（Java虚拟机）语言的集成开发环境。 
* PyCharm：适用于Python开发的集成开发环境。 
* WebStorm：适用于JavaScript、HTML和CSS开发的集成开发环境。 
* PhpStorm：适用于PHP开发的集成开发环境。 
* RubyMine：适用于Ruby开发的集成开发环境。  
* DataGrip：适用于数据库开发的集成开发环境。 
* GoLand：适用于Go语言开发的集成开发环境。

这些现代化的 IDE 不仅极大方便了项目开发，也更适合编程新手快速上手学习。缺点是价格昂贵，一般只有公司企业能够大批量引进进行开发。

## 安装方式

****

### Toolbox 安装（推荐）

****

JetBrains 为安装了其IDE开发环境的管理工具——Toolbox。

我推荐安装 JetBrains Toolbox 来安装并管理你的 IDE。

首先在[官网安装Toolbox](https://www.jetbrains.com/toolbox-app/)。

<div align="center">
    <img src="/images/开发工具/toolbox.png" width="500"/>
</div>

启动 Toolbox，它会自动检测你已经安装过的 JetBrains IDE。

<div align="center">
    <img src="/images/开发工具/install.png" width="300"/>
</div>

可用栏则会显示所有可安装的 JetBrains IDE，你可以选择需要的进行安装或在右上角搜索你需要的 IDE 进行安装。

之后，你便可以通过 Toolbox 进行快速启动 IDE 并对其进行更新或卸载。

## 激活方式

****
### LicenseServer版

下载[LicenseServer](https://notabug.org/Nasller/LicenseServer/releases)
<div align="center">
    <img src="/images/开发工具/licenseServerZip.png" width="500"/>
</div>

点击下载压缩包,去对应IDE中安装插件,选择从磁盘安装,并选择解压后的jar包
<div align="center">
    <img src="/images/开发工具/licenseServerIde.png" width="500"/>
</div>
<div align="center">
    <img src="/images/开发工具/licenseServerJar.png" width="500"/>
</div>
配置 `javaagent` 到你的`ide.vmOptions`文件,打开Toolbox,跟着下方图片走
<div align="center">
    <img src="/images/开发工具/toolboxSetting.png" width="500"/>
</div>
<div align="center">
    <img src="/images/开发工具/toolboxJvm.png" width="500"/>
</div>
点击打开,并添加下面代码,注意要更改成自身路径

```
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
-javaagent:路径下的\Bundle-ja-netfilter-2022.2.0.jar=jetbrains
```
找到许可证面板
<div align="center">
    <img src="/images/开发工具/ideLicence.png" width="500"/>
</div>
<div align="center">
    <img src="/images/开发工具/serverInit.png" width="500"/>
</div>
<div align="center">
    <img src="/images/开发工具/licenseServerManger.png" width="500"/>
</div>
点击许可证书服务器，我个人习惯使用服务器注册，如果想别的可以根据上图进行注册，如上图有 jetbrains code(填入激活码)



