---
title: 'Rosetta 2 Deep-Dive: How Apple did emulation the right way'
date: 2020-12-15T14:12:00.001-08:00
draft: false
url: /2020/12/rosetta-2-deep-dive-how-apple-did.html
tags: 
- Apple
---

 [![](https://1.bp.blogspot.com/-IvUkntNtMFY/X8Uq-C9YCnI/AAAAAAAALpo/cQ68ru1xOG07zoHu1e6-bVjsBwzUDjXlgCNcBGAsYHQ/s320/Rosetta_2.webp)](https://1.bp.blogspot.com/-IvUkntNtMFY/X8Uq-C9YCnI/AAAAAAAALpo/cQ68ru1xOG07zoHu1e6-bVjsBwzUDjXlgCNcBGAsYHQ/s1678/Rosetta_2.webp)

So, the M1 macs have been out in the world for about 2 and a 1/2 months and with it increased developers have optimized their apps for ARM64. However, processor transitions will always have incompatibilities with different apps and in the case of the M1 most intel Apps aren't optimized for ARM. The solution is emulation, emulation takes the x86 code and recompiles it into ARM so that the software can run on M1. The same happens for Windows on ARM devices that need to run non-native software but somehow there is a difference in the quality of the two systems. WoA is constantly struggling with emulation and when software is constantly being run in emulation battery life and performance take a huge plunge; the M1 handles non-native software fine without much of a hit on performance on battery life or performance. So, what is Apple's secret with Rosetta 2? Here's how Apple did emulation right. 

[![](https://lh3.googleusercontent.com/-6wlL2eKOjNY/X9kzswYqu8I/AAAAAAAAL8c/HUiSBy0LmLIuIKcc2nhPuMdRLF6UunCmACNcBGAsYHQ/w640-h426/image.png)](https://lh3.googleusercontent.com/-6wlL2eKOjNY/X9kzswYqu8I/AAAAAAAAL8c/HUiSBy0LmLIuIKcc2nhPuMdRLF6UunCmACNcBGAsYHQ/image.png)

Image Credit: The Verge

So, what is Rosetta 2? Rosetta 2 is the subsystem in the background to translate non-native apps into ARM code that M1 can run. Rosetta 2 starts working from the moment you run the app, here's an example: you download a certain app from the web, once downloaded and installed you open the app to sign in and start using it. The app in question is not ARM-native meaning Rosetta has to get involved, when you first run the app Rosetta 2 translates the entire app instead of translating the app on the fly. This makes the app ARM-native so that instead of running in emulation every time you run the app it runs the app as it would any other ARM-native app.  

  

Of course, Rosetta can translate on the fly for any code that was missed in the original recompile and for apps that simply can't be translated beforehand such as web browsers. This new way of emulation takes the pain out of emulation by not having to emulate anything 80% of the time. This is not without caveats, when you first run the app it will lag or pop up beachballs, basically it feels like an atom chip for the first 5 minutes or even first hours depending on how big the app is. It also doesn't support virtual machines and kernel extensions, now virtual machines are a huge blow to Mac developers because now that Boot Camp is gone there's really no way to run Windows on a Mac now, fortunately there should be some new VM software ready for M1 soon.  

  

Now I'm a Windows geek so I know next to nothing about Mac kernel extensions other than that they're basically a mac equivalent to Windows drivers, just like drivers they are of varying importance to different people. However, most people on Macs are pros using their machine for their work, I know as a fact that some developers rely on kernel extensions to develop their apps. It probably won't affect most people, but it will affect the pros, and this is more about the new security protocols in Big Sur and less about compatibility issues with M1. In fact, Big Sur's new security protocols are responsible for many errors with Rosetta and command line tools, among other things, it's part of the compromise of using an M1 Mac and slowly but surely apps will start to fill in the gaps that are currently being left behind by Rosetta 2. 

[![](https://lh3.googleusercontent.com/-zkHSBBoDqOI/X9kz4ruGhaI/AAAAAAAAL8g/JzIk8UlnCWsiurtw63rhPrzk0sVZVq9ugCNcBGAsYHQ/w640-h356/image.png)](https://lh3.googleusercontent.com/-zkHSBBoDqOI/X9kz4ruGhaI/AAAAAAAAL8g/JzIk8UlnCWsiurtw63rhPrzk0sVZVq9ugCNcBGAsYHQ/image.png)

Image Credit: The Verge

WoA has an emulation layer that translates code on the fly, this adds an extra strain on the processor that taxes performance with makes it draw more power that then affects battery life. Rosetta does translation that basically turns it into a native app that doesn't perform any different from the normal version. Rosetta is Apple's secret weapon that will make sure of a smooth transition for most people, and while the pros are sufferings their intel Macs should serve them fine in the time being. Although Rosetta is the best example of good emulation it's still a cautionary tale of how even the best processor transitions have their leaks and cracks, about how fragile our software ecosystem is. Windows and others should learn from the software masterpiece that is Rosetta 2.