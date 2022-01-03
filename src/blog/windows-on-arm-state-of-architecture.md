---
title: 'Windows-On-ARM state of the Architecture'
date: 2020-11-26T13:39:00.004-08:00
draft: false
url: /2020/11/windows-on-arm-state-of-architecture.html
tags: 
- Windows and Surface
---

[![](https://1.bp.blogspot.com/-fljd5-KeZ-c/X7wE1UUtfKI/AAAAAAAALiA/b5Sqr3zfByMzxJhefK18_PYrDDQfxIrVQCNcBGAsYHQ/s320/Surface%2BPro%2BX%2BWoA%2BState%2Bof%2Bthe%2BArchitecture.jpg)](https://1.bp.blogspot.com/-fljd5-KeZ-c/X7wE1UUtfKI/AAAAAAAALiA/b5Sqr3zfByMzxJhefK18_PYrDDQfxIrVQCNcBGAsYHQ/s1600/Surface%2BPro%2BX%2BWoA%2BState%2Bof%2Bthe%2BArchitecture.jpg)

  

  

  
ARM has been on the rise this year alone with huge leaps in desktop, mobile, and server. This year alone has shown the first mainstream ARM chip in a Mac, the M1, we also saw the first Qualcomm chip in a Chromebook, the 7c. I want to reiterate on a point and hope for not ARM as a whole, butrather Windows-on-ARM, in this state of the architecture I'm going deep on WoA. To isolate one of the biggest gambles that Microsoft has made and how it's paying off, looking to see how it can improve, the slivers of hope on the horizon, and why it isn't dead yet. I will do an entire ARM state of the Architecture eventually (it's inevitable), but this is a focus on WoA. WoA has had an extremely troubled past but the current state of it is overall improving and marginally bright, so without further argument let's get into it.

  

The Idea
--------

  

So, the year 2019 marked the biggest year for WoA with the introduction of the 8CX, 8C, and 7C Snapdragon chipsets. This was the first chipsets from Qualcomm made specifically for laptops, specifically WoA. All former chipsets were either straight-up smartphone chips (Snapdragon 835), or a hybrid chip such as the Snapdragon 850, either way both were substantially inferior to their intel counterparts. They had incredible battery life, 17-20 hours were possible, performance and app compatibility was the real tailback; they were so underpowered no one dared to develop apps for what couldbe seen as a doomed experiment. The 8CX was the chip that made everyone turn around on WoA, the 8CX offered the benefits of ARM with performance that matched an 8th-gen core i5 and gen 2 to a 10th-gen core i5.

  

[![](https://lh3.googleusercontent.com/-UqmkmfCQL2o/X8AVSg_JsqI/AAAAAAAALkQ/fySMkkalglIj8hkKu5nK6QqPkJFn_b45gCNcBGAsYHQ/w640-h364/image.png)](https://lh3.googleusercontent.com/-UqmkmfCQL2o/X8AVSg_JsqI/AAAAAAAALkQ/fySMkkalglIj8hkKu5nK6QqPkJFn_b45gCNcBGAsYHQ/image.png)

Source: Qualcomm

  
  

  

The GPU was also finally something that roasted intel UHD and matched intel Iris, althoughit's been surpassed by Xe (the successor to intel's integrated GPU's). It had the choice for LTE and eventually 5G (low-band not high-band), the whole point of this chipset was to keep the efficiency of the former chipsets while bringing performance to WoA. The very idea of WoA was to bring always connected, efficient, powerful, and lightweight chipsets to windows. Then the 8CX gen 2 came out in 2020, it brought more efficiency with little performance gains, it also brought an "improved". GPU as well (well..kind of). It was mostly an update just for the sake of updates. In theory it sounded great.... until it wasn't.

  

  

WoA Today
---------

So, what is the state WoA right now? The main way apps should run are either optimized Windows apps, meaning their compiled for ARM64, web apps which are basically websites that behave like apps (better than you might think). Of course, not every app is optimized for ARM, in fact most aren't, that's why most apps might have to run in emulation, that emulation is strapped to 32-bit (more on that later). That's the less-than-ideal app situation, there are several devices right now that are using WoA with most of the running the 8CX and only some running gen 2. In day-to-day use reviewer saw how useful LTE was, they also saw how powerful the web was as an app platform.

  

[![](https://lh3.googleusercontent.com/-2z-wEVglmLc/X8AXOZ6E-zI/AAAAAAAALkc/bqP5Z0fbUqwmuMhiIxN0xFYylakcjJ4IgCNcBGAsYHQ/w640-h334/image.png)](https://lh3.googleusercontent.com/-2z-wEVglmLc/X8AXOZ6E-zI/AAAAAAAALkc/bqP5Z0fbUqwmuMhiIxN0xFYylakcjJ4IgCNcBGAsYHQ/image.png)

Source: Tecnoblog

  
  

  

Many still lamented how most Apps had to run in emulation and that emulation cost the platform, photoshop for example still wasn't able run well enough for daily use. The experience overall has been smooth, but intel and AMD still overpower the 8CX. It does live up to the other pillars of WoA, battery life was exceptionally good at 10-15 hours for some; but 11th gen has brought 14-hour battery life to the mainstream. Unlike the M1 the 8CX is still working on Kyro cores made for an era where 14-hour battery life was special. The always-connected part of the 8CX is what really sells the vision of WoA and the 8CX delivers.

  

  

[![](https://lh3.googleusercontent.com/-n7ygQ2mpr1w/X8AXpvIvPlI/AAAAAAAALkk/0LhoeYhbBykyslMfxlKPhREYsFq7WJyYgCNcBGAsYHQ/w640-h354/image.png)](https://lh3.googleusercontent.com/-n7ygQ2mpr1w/X8AXpvIvPlI/AAAAAAAALkk/0LhoeYhbBykyslMfxlKPhREYsFq7WJyYgCNcBGAsYHQ/image.png)

Source: Qualcomm

  

Many reported high-speed, reliable, LTE in most zones, I genuinely would value having LTE on my device especially since most of my work relies on a connection to the internet. In summary, WoA is doing ok but app support is slow, and many are losing hope, the chips are speedy but when under heavy stress due to emulation the performance crumbles (especially since none of the devices have fans to cool the chipsets, a marquee feature of WoA to make thinner devices). WoA has potential but it needs more power and app support to take advantage of it.

Hope for WoA
------------

There is hope on the horizon, at the Surface Pro X launch adobe promised to update their creative cloud apps such as Photoshop and Lightroom. This week we saw signs of progress with a beta of Photoshop being released, it's not much but some progress is better than no progress, and it shows that adobe might be serious about WoA. As we've seen before Adobe has burned companies on promises before, their also notoriously slow to update apps, for now progress has been made but the full versions likely won't come until later.

  

At Microsoft build 2020 Microsoft announced 2 things that offer hope to change WoA for the better. The first is the app assured program, this program has been out since 2018 to help developers work past and report issues with Windows that hinder compatibility with apps. That program is now expanding to ARM, now developers can get support from Microsoft to make their ARM apps work with Windows, this is huge for developers struggling to port their app to ARM. Unlike apps made for Mac, Android, and iOS, Windows apps are made with a variety of frameworks, languages, and tools. This helps a wider array of developers to port their apps to ARM. Now no matter what there will always be apps that won't update, that's why this next part of news is also important. Also, at build, Microsoft announced support for 64-bit app emulation, as mentioned beforehand only 32-bit apps have support for emulation. As ARM processors get more powerful the emulation layer has less impact, the new 64-bit support expands the opportunity for WoA and shows hope for the platform.

  

WoA still matters and Microsoft is still in the game, WoA needs improvements but hope is on the horizon, right now WoA is in shambles but soon it may be more important than you think.