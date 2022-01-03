---
title: 'Android 12 developer preview released: Why are we worried?'
date: 2021-02-23T13:34:00.004-08:00
draft: false
url: /2021/02/android-12-developer-preview-released.html
tags: 
- Wear OS and Android
- News
---

[![](https://1.bp.blogspot.com/-BUobeh5yVxk/YC2NCtLIAYI/AAAAAAAANG4/Lr5AvRB3icQ2nD24DRJ5OyU1n-3wMlMvgCNcBGAsYHQ/s320/PXL_20210217_212222600.PORTRAIT.jpg)](https://1.bp.blogspot.com/-BUobeh5yVxk/YC2NCtLIAYI/AAAAAAAANG4/Lr5AvRB3icQ2nD24DRJ5OyU1n-3wMlMvgCNcBGAsYHQ/s2048/PXL_20210217_212222600.PORTRAIT.jpg)

  

The Android 12 public developer preview is live and along with the leaks we have a ton of news to catch up on! Android 12 is set to bring UI changes, theming, and a new settings UI along with some widget changes. However, some have started to panic over the mockups that were leaked earlier had a lot of iOS flavor to it, however with the release of the preview I've decided to simply roundup the latest features added, the latest hands-ons (I can't run it myself), and my thoughts on the first release beta as we move towards the final release sometime in august or September. Quick note: The developer preview is exactly what it sounds like meaning that these are preliminary changes that may or may not come into Android 12, so take these features with a grain of salt because most of them won't ever see the light of day. Let's start with the smallest changes and work our way up.

  

  

See for yourself
----------------

So first here's some videos and links to help you get an idea of what's in the preview.  

  

  

  

  

> https://www.androidcentral.com/android-12-developer-preview-hands

https://www.androidcentral.com/android-12 

https://www.theverge.com/2021/2/19/22291296/android-12-developer-preview-ui-changes-widget-stacks-lock-screen-notifications

  

https://www.androidpolice.com/2021/02/19/android-12-dp1-has-its-own-hidden-take-on-widget-stacks/

  

https://www.theverge.com/2021/2/18/22288084/android-12-developer-preview-available-google-pixel

  

https://www.xda-developers.com/android-12/

  

Now, onto the features. 

Lightning round
---------------

Our first feature is support for new file formats and transcoding layers. In this case a new layer for transcoding HEVC video automatically in apps that don't support it, we also have AV1 image file format support, along with an API for drag-and-drop content. We also have support for the MPEG-H audio format, this is a spatial audio format that can do up to 24 channels of audio in the Android 12 preview. What this all means is that more apps will be able to take advantage of HEVC video without having to change much, it also means that Android may soon get better image quality and sizes thanks to a more modern image format, and it means support for higher quality spatial audio in MPEG-H format although of course this is a specialized format so you won't notice this right away. 

  

All these things are meant to test support for these formats and layers, so not all of these will make it to the final build but knowing that Google is working on it means that most of these will eventually come to Android. There's also sharing WI-FI with nearby share, nearby share is an Android version of Airdrop that's being used to share the WI-FI without having to go through the whole password struggle. Although you have been able to use QR code scanning to share the WI-FI the nearby share version looks like a nice wireless alternative.  

[![](https://lh3.googleusercontent.com/-8OQLPHdFM5w/YDV0WCjjBPI/AAAAAAAANLE/WbEXbj9o5qcotVHRPkhgmREGpK03EB53wCNcBGAsYHQ/w640-h426/image.png)](https://lh3.googleusercontent.com/-8OQLPHdFM5w/YDV0WCjjBPI/AAAAAAAANLE/WbEXbj9o5qcotVHRPkhgmREGpK03EB53wCNcBGAsYHQ/image.png)

Image Credit: Android Central 

  
  

  

UI
--

So, let's start with the stacked widgets, otherwise known in the flags as "expanded smart space", it's a new feature that allows people to see two widgets in each swipe, with this expanded stack taking up an extra row of apps. It might be the beginning of a more modern widget stack much like iOS's smart stack, at least their working on it. Another feature is the new screenshot UI that XDA developers seemed to find that enabled a preview of scrolling screenshots, a feature highly requested since Android 9 Pie. While editing the screenshot you can also now add emojis and text while marking up the screenshot with your normal ink tools, they can be found in addition to the normal ink tools in the edit panel of the screenshots.

  

[![](https://lh3.googleusercontent.com/-fEleNpauK3Q/YDV0OWNV-gI/AAAAAAAANLA/c6QKLWeh6M4u0X_asfBtJa4GMepTEgQPwCNcBGAsYHQ/w635-h640/image.png)](https://lh3.googleusercontent.com/-fEleNpauK3Q/YDV0OWNV-gI/AAAAAAAANLA/c6QKLWeh6M4u0X_asfBtJa4GMepTEgQPwCNcBGAsYHQ/image.png)

Image Credit: Android Central

  
  

  

 There are some changes in the notification UI with the edition of a snooze button, microphone and camera icons that show if your camera and/or microphone are on at any given time, and the notifications themselves are also different being bigger than usual due to more spacing in the text. 

[![](https://lh3.googleusercontent.com/-jCncNigHEyg/YDVz6H7X5ZI/AAAAAAAANK0/u7T8ftaATHkDocDbWNlDDS973KGgaj5VwCNcBGAsYHQ/w640-h426/image.png)](https://lh3.googleusercontent.com/-jCncNigHEyg/YDVz6H7X5ZI/AAAAAAAANK0/u7T8ftaATHkDocDbWNlDDS973KGgaj5VwCNcBGAsYHQ/image.png)

Image Credit: Android Central

  
 

[![](https://lh3.googleusercontent.com/-SwYmrenHCrU/YDVzwjrFXtI/AAAAAAAANKw/NdZ822MxG6cVOK57QYZci-UKiEJmFw6AACNcBGAsYHQ/w296-h640/image.png)](https://lh3.googleusercontent.com/-SwYmrenHCrU/YDVzwjrFXtI/AAAAAAAANKw/NdZ822MxG6cVOK57QYZci-UKiEJmFw6AACNcBGAsYHQ/image.png)

Image Credit: Android Authority   
  
  

  

There's also a subtle way to control apps that can pop up in the media center as well, particularly useful for some but not really for me. There's also wallpaper-based theming feature that was enabled behind some ADB commands, honestly this might be useful especially when having to manipulate the new themes that may come later. 

  

[![](https://lh3.googleusercontent.com/-AOBzhTw8XsQ/YDV0iFY_raI/AAAAAAAANLI/EMKYN628vN4JmF-6sb3predAOF5yxg3SwCNcBGAsYHQ/w296-h640/image.png)](https://lh3.googleusercontent.com/-AOBzhTw8XsQ/YDV0iFY_raI/AAAAAAAANLI/EMKYN628vN4JmF-6sb3predAOF5yxg3SwCNcBGAsYHQ/image.png)

Image Credit: XDA developers 

  
  

Rounded corners have also come to a new conversation widget, honestly, I feel that this might be the worse widget to come out of Android 12, it might be useful for some, but it would be wasted on me. 

  

Settings 
---------

Android 12 has a lot of features locked behind an ADB command flag; in this case you can enable a new settings interface codenamed "Silky home". It completely changes the layout of the settings panel, bringing bigger headers for better one-handed use, more streamlined lists, and smooth pastel colors. 

  

[![](https://lh3.googleusercontent.com/-ONvs8H0A_ck/YDVtlhO2aII/AAAAAAAANKc/QNl0c85fD3oCebRaKsllUtgz5YlWXBDHQCNcBGAsYHQ/w640-h426/image.png)](https://lh3.googleusercontent.com/-ONvs8H0A_ck/YDVtlhO2aII/AAAAAAAANKc/QNl0c85fD3oCebRaKsllUtgz5YlWXBDHQCNcBGAsYHQ/image.png)

Image Credit: Android central 

  

[![](https://lh3.googleusercontent.com/-m1ASdL0uzdY/YDVtuL_MpuI/AAAAAAAANKk/IjyLrDDXZhUd_ml6QHH6ohPGcDAVhvxlACNcBGAsYHQ/w640-h426/image.png)](https://lh3.googleusercontent.com/-m1ASdL0uzdY/YDVtuL_MpuI/AAAAAAAANKk/IjyLrDDXZhUd_ml6QHH6ohPGcDAVhvxlACNcBGAsYHQ/image.png)

Image Credit Android central 

  

It's massive and takes a lot of inspiration from One UI, its good in theory but the interface at this point is just too immature to really judge. However Silky home does seem to coincide with the other reports from XDA developers and the early leaks that suggest a huge UI overhaul as seen in the earlier section. It also adds in a new Safety and emergency tab to the settings menu, focused on all the emergency features such as "emergency SOS" that allows you to call 911 with 5 clicks of the power button in quick succession.

  

[![](https://lh3.googleusercontent.com/-TZWIQ9Kb--I/YDVteL8pulI/AAAAAAAANKY/khjcdzscVcgcpiVRlvB83QyWnK-rt1r0wCNcBGAsYHQ/w296-h640/image.png)](https://lh3.googleusercontent.com/-TZWIQ9Kb--I/YDVteL8pulI/AAAAAAAANKY/khjcdzscVcgcpiVRlvB83QyWnK-rt1r0wCNcBGAsYHQ/image.png)

Image credit: Android central. 

  
  

  

Honestly, silky home makes the most sense in the settings UI, it needs to be easier to find the settings you need most and overhauling the interface to make it easier one-handed is even better. It also clearly differentiates between the options and the header making sure you know exactly where you are in the settings app. However, itdoesn't feel right to just completely copy the main idea of the One UI settings interface, Samsung has their design and Google has their design, it overlapped many times but usually its Samsung stealing from Google. However, seeing Silky home in action makes me want to see Google flesh out this idea in other builds of Android 12, honestly it seems better than what we have now, but I feel that the ecosystem just isn't ready for that flatter pastel color and design that silky home seems to bring. I suppose the next builds will either calm or amp my tensions with Android 12 and silky home.

  

  

Final thoughts 
---------------

  

I'm not sure we have reason to worry with Android 12, it brings some nice under-the-hood updates, some cool UI updates, and an updated settings panel. There's really no need to panic about these new features because I feel like I'm overreacting to this developer preview, there is absolutely nothing permanent about this build and I can guarantee that 40% of the information in this article will not be included in the final builds. Android 12 can only improve upon this first release, and that's the snow cone on top that we all need to realize.

  

### Want to support the channel and Blog? You can Buy Me a coffee with the button below!