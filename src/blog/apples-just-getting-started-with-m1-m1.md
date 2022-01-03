---
title: 'Apple''s just getting started with M1: M1 Deep-Dive'
date: 2020-11-19T11:53:00.004-08:00
draft: false
url: /2020/11/apples-just-getting-started-with-m1-m1.html
tags: 
- Apple
---

[![](https://1.bp.blogspot.com/-6F21GGaS8tI/X7WKsKk8ANI/AAAAAAAALcU/QItLS8jxLpA1EHdCT7mUS_KZvhWHcHEQQCNcBGAsYHQ/s320/Apple-MacBook-pro-M1-phonebunch.jpg)](https://1.bp.blogspot.com/-6F21GGaS8tI/X7WKsKk8ANI/AAAAAAAALcU/QItLS8jxLpA1EHdCT7mUS_KZvhWHcHEQQCNcBGAsYHQ/s1036/Apple-MacBook-pro-M1-phonebunch.jpg)

The reviews have gone live, the benchmarks have been run, and the M1 has been scrutinized and praised.  Now I want to look at how powerful M1 is and how Apple has secured its future with Rosetta 2, I'll touch on iOS apps on Mac but that's an entirely different article. With that being said let's get into the benchmarks and performance of the M1 macs.

  

I'll be focusing on the MacBook Air and MacBook Pro with Mac Mini having less importance (sorry 😉) but more than anything else I'll be focusing on the M1 chipset and its performance, heat, battery life, and graphics.  So,let's get started, the M1 has been benchmarked in most tests so far with all 3 machines, I'll start with the MacBook Pro and work my way down.  The MacBook Pro has been benchmarked by various publications and what they all have in common is that the M1 doesn't just stand up to intel its downright beats intel.  The M1 in single core performance has directly conquered the entirety on all macs ever sold.  Looking at this picture of all the benchmarks not even the behemoth that is the Mac Pro beats the M1 in Multi-Core, and that's intel's best desktop processor from the Xeon series, that really says a lot.

[![](https://lh3.googleusercontent.com/-15nUPPuyOpU/X7WRFTTrXEI/AAAAAAAALcs/ugDQ297HTw0557Bo7OydsUNTSaaINvMlACNcBGAsYHQ/w640-h422/image.png)](https://lh3.googleusercontent.com/-15nUPPuyOpU/X7WRFTTrXEI/AAAAAAAALcs/ugDQ297HTw0557Bo7OydsUNTSaaINvMlACNcBGAsYHQ/image.png)

Image Credit: Tom's guide  
  

  

This shows that Apple silicon is scalable, I think single-core says a lot about the silicon more than anything else because it shows what the baseline core can do.  Right now, it's showing the M1 running at 3.2 GHz and ramming into the current intel chipsets, of course it's unconfirmed since GeekBench could be wrong and without confirmation from Apple there's really no way to know, but the fact is that Apple's 1st-gen M1 runs at a frequency that high and still manages to stay cool (more on that later) and have great battery life. Now multi-core is a different story because no matter how good the individual chipset is, putting in more cores helps solve the problem. The M1 is an 8-core chipset that makes use of Apple's performance-efficiency architecture that splits the cores into the two camps evenly between the two roles to get the best from both worlds. 

  

[![](https://lh3.googleusercontent.com/-_v8Bk1U2IH8/X7WVRVUaApI/AAAAAAAALc8/TZFUz2aK1NQRiCav8PXFF7ai_NWp1mElwCNcBGAsYHQ/w640-h491/image.png)](https://lh3.googleusercontent.com/-_v8Bk1U2IH8/X7WVRVUaApI/AAAAAAAALc8/TZFUz2aK1NQRiCav8PXFF7ai_NWp1mElwCNcBGAsYHQ/image.png)

  
 

Here we see the Mac Pro take the cake but what's interesting is seeing the M1 in the middle of the pack, beating the 16-inch MacBook Pro and Mac Pro from 2013 whilst staying bellow the top-end iMac Pro from 2017. It's crazy to think that the M1 is beating the Xeon in the Mac Pro from 2013, its even crazier to see how the M1 beats the top-end MacBook Pro 16-inch, that is the top-level pro laptop Apple offers and the M1 beats it's core i9 that is, granted, 9th-gen. Looking at the performance against other intel macs shows that Apple silicon has the power to be scalable, keep in mind that this is the 1st-gen Apple silicon, meaning that this is the worst it's going to get, when you put that into perspective it's no wonder Apple switched. GeekBench isn't everything though and I also wanted to mention some tests developers did, one developer saw an improvement in unwrap speeds in Xcode, he saw 19.5s on his maxed-out MacBook Pro and 11.7s on the M1. For developers that speed is invaluable and really makes a difference, for the original article where I found this here's the link: https://www.theverge.com/2020/11/19/21574057/apple-m1-chips-laptop-performance-intel-qualcomm-competition.  

  
  

  

[![](https://lh3.googleusercontent.com/-XYaUtaUHQKA/X7WPY4jVegI/AAAAAAAALcg/Ca3GYczxVsMLLDtmMeB7GZgC3Zr4_Rd5QCNcBGAsYHQ/w640-h270/image.png)](https://lh3.googleusercontent.com/-XYaUtaUHQKA/X7WPY4jVegI/AAAAAAAALcg/Ca3GYczxVsMLLDtmMeB7GZgC3Zr4_Rd5QCNcBGAsYHQ/image.png)

Image Credit: The Verge  
  
Now all that performance means nothing if your legs are getting seared by heat, so how does the M1 perform without a fan, with a fan, and in a desktop environment (albeit smaller than normal Mac Mini). The M1 in the MacBook Air doesn't have a fan to lean on, but it still manages to perform well and always ramps down before getting anywhere near uncomfortable heat levels. The MacBook Air seems to throttle at a certain point but manages to hold its own for a good enough amount of time. However, The Verge saw in their testing (more on that in the graphics part) is that the MacBook Pro was able to sustain performance without a significant drop in performance. That'smost likely due to the fan, a cooling system allows the M1 to heat up and stay hot without exceeding the said thermal limits, that's huge for creative workloads that rely on sustain performance for exporting, editing, and uploading. The thing is that it takes a lot to make the fan come on, Nilay Patel of the Verge had to run the cinebench test on a look for over 10 minutes just to make the fan come on, now that's efficiency.  
  
  

[![](https://lh3.googleusercontent.com/-EdOoVfsJ89s/X7bIdDHSRHI/AAAAAAAALeY/hMBvs3ytA4EoGwCgiwmuzslVEDKu_qx_wCNcBGAsYHQ/image.png)](https://lh3.googleusercontent.com/-EdOoVfsJ89s/X7bIdDHSRHI/AAAAAAAALeY/hMBvs3ytA4EoGwCgiwmuzslVEDKu_qx_wCNcBGAsYHQ/image.png)

Image credit: The Verge  
  

  
 I experience this problem all the time with my Surface Pro 4, I finish editing, I go to export, and it runs for a few minutes, and then it slows to a crawl. Even with the fans at full blast it just slows down no matter what. The Mac Mini is different as well, it'sbasically the same situation as the MacBook Pro, but on overdrive. That's because the Mac Mini has a desktop enclosure and a desktop fan and heatsink, meaning that the M1 doesn't have the thermal limits met in the laptop enclosures of the MacBook's.   
   
Overall Apple did themselves a favor a focused on reducing heat while still maintaining performance, the reason Apple is able to do this is because they have practice with the iPad Pro, putting a wildly powerful chip that stays cool even under the most demanding workloads.  
   
Now let's talk about Graphics, the M1 doesn't rely on AMD or Nivida discrete graphics card on the new Macs, instead it uses its own integrated 7-8-Core GPU (Quick note: the entry-level MacBook Air has a 7-core GPU all other macs with M1 have 8 cores). Unlike the underperforming intel UHD or even intel Iris Apple has truly unleashed it's GPU on the Macs. I want to mention The Verge's test of gaming on this Mac, specifically the title Shadow of the tomb raider, while not exactly a game I would play it's still a perfectly effective way to test a Mac.

  

[![](https://lh3.googleusercontent.com/-8WvnQhRNHMY/X7azhTSGdHI/AAAAAAAALd8/YDBvqAplSbwVz8hTdG1J-ZxnMScQ4SF1gCNcBGAsYHQ/w640-h326/image.png)](https://lh3.googleusercontent.com/-8WvnQhRNHMY/X7azhTSGdHI/AAAAAAAALd8/YDBvqAplSbwVz8hTdG1J-ZxnMScQ4SF1gCNcBGAsYHQ/image.png)

Image credit: The Verge

  

In their review they mentioned how Tiger Lake 11th Gen scrambled to get to 30FPS at the lowest graphics preset, the M1 managed to get to 38FPS. It gets even better with their Adobe Premier Pro export test, here the M1 exported 4k video in 8 minutes 7 seconds. That's crazy, especially looking at an intel Ultrabook taking 10 minutes and 43 seconds, I do have my concerns because it's unclear whether that Ultrabook is 10th-gen or 11th-gen. Regardless, these tests prove that Apple can beat intel Xe, it also shows that Apple can make effective integrated GPU's, something I was concerned about before the event. One of the things they mentioned is that the game and all the adobe apps they used were running through Rosetta 2, meaning that all these tests were not optimized for ARM and they still beat intel in many cases. I love what Apple's doing with Rosetta so look out for a Rosetta deep-dive next week.

  

[![](https://lh3.googleusercontent.com/-LQXQWIAY3CI/X7a9jxcr6CI/AAAAAAAALeM/FMGij1dOD6wk5G4yPbaLpkOo8MEoRkbfgCNcBGAsYHQ/w640-h328/image.png)](https://lh3.googleusercontent.com/-LQXQWIAY3CI/X7a9jxcr6CI/AAAAAAAALeM/FMGij1dOD6wk5G4yPbaLpkOo8MEoRkbfgCNcBGAsYHQ/image.png)

  

  

The last pillar of Apple Silicon is battery life, and many have reported excellent battery life. One example I would like to quote from is from Rene Ritchie, an excellent YouTube analyst I encourage you to check out, he received his units and at once charged them up to 100% battery. Then he went ahead to run his benchmarks (his video is at the bottom of the Post), the benchmarks drained the battery to about 80%, he continued to use them. Overall, it lasted 2 1/2 days with mixed usage and one heavy load, that's the power of M1. The Verge also reported about 8 hours from the Air and 10 hours from the Pro, that's great battery life especially considering that most Apps were using Rosetta and that they were using Chrome instead of Safari. 

  

So, what's the verdict? The verdict is that the M1 is the best silicon Apple has ever made and the best silicon that's ever been inside a MacBook. It's processing power, graphics power, heat, and battery life make it a winner. We'll see how it holds up to the test of time but for now M1 is the perfect start to Apple silicon, and what really puts it into perspective is the fact that Apple is just getting started. The M1 is the first of its kind and it won't be the last, I can't wait to see better Pro-level chips and desktop-class chips to roam the iMacs and Mac Pro. Until then M1 is the chip Apple has released, and it's a winner. 

  

  

  

### Want to support the channel? You can Buy Me a coffee with the button below!

  

  

  

Here are the videos I mentioned in the article: