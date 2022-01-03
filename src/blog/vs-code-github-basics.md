---
title: 'How to upload code to GitHub with VS Code: a dive into Git'
date: 2021-01-06T07:28:00.213-08:00
draft: false
url: /2021/01/vs-code-github-basics.html
tags: 
- Coding and development
---

  

[![](https://1.bp.blogspot.com/--jI_4Grzjuw/X_XXG9roQSI/AAAAAAAAMWc/QL50OElJ0xMJ8rXPjqlPYYuOMcjSbSw-QCNcBGAsYHQ/s320/GitHub%2BLogo.jpeg)](https://1.bp.blogspot.com/--jI_4Grzjuw/X_XXG9roQSI/AAAAAAAAMWc/QL50OElJ0xMJ8rXPjqlPYYuOMcjSbSw-QCNcBGAsYHQ/s428/GitHub%2BLogo.jpeg)

  

Today I wanted to make a how-to about GitHub and VS Code, version control is one of the hardest things for a beginner to learn, and this guide is for the beginners using VS Code. Offering to help them to understand how to upload their projects to GitHub and maintain it with commits, branches, and push + pull. 

  

So, what is Git? Git is a version control system, version control is the idea of having a stable codebase and making changes via commits, and keeping changes in their zone via branches, then incorporating those changes by merging the feature branches with the main branch. Repositories are the homes of the code, branches, and everything else. 

  

GitHub is a place to upload your code to share, collaborate, and release code to the world. It's remarkably similar to Git except GitHub is one of the most popular online clients for git, making it one of the best places to host, and upload code. For a better explanation of both concepts here's a link to an article that helped me:

  

[https://www.freecodecamp.org/news/what-is-github-what-is-git-and-how-to-use-these-developer-tools/](https://www.freecodecamp.org/news/what-is-github-what-is-git-and-how-to-use-these-developer-tools/)

  

With that out of the way let's start uploading to GitHub with VS Code!

  

[![](https://lh3.googleusercontent.com/-dzxFijwxzq4/X_XZj0vEjpI/AAAAAAAAMW0/s7qS0XWyOFkuA3h_OKoHg3VwRQtd3DtjACNcBGAsYHQ/w640-h410/image.png)](https://lh3.googleusercontent.com/-dzxFijwxzq4/X_XZj0vEjpI/AAAAAAAAMW0/s7qS0XWyOFkuA3h_OKoHg3VwRQtd3DtjACNcBGAsYHQ/image.png)

  

  

First, open the folder that holds your code, in this case I put basic Html and CSS. For a guide on making files in VS Code here's a link to my guide: 

[https://bentechcode.blogspot.com/2020/04/how-to-make-files-and-get-started-in.html](https://bentechcode.blogspot.com/2020/04/how-to-make-files-and-get-started-in.html)

  

[![](https://lh3.googleusercontent.com/-SnkSUyEvRzE/X_XaGsPUlqI/AAAAAAAAMXA/4qRxPpuJYsw-RgXVMdxtZeLJUcSjqauIACNcBGAsYHQ/w640-h408/image.png)](https://lh3.googleusercontent.com/-SnkSUyEvRzE/X_XaGsPUlqI/AAAAAAAAMXA/4qRxPpuJYsw-RgXVMdxtZeLJUcSjqauIACNcBGAsYHQ/image.png)

  

Once the File is opened and your code is available head over to the Git logo, then follow the instructions to download Git, the local client, the link provided by VS Code will walk you through it, I already have it installed so I don't need to worry. With that being said and done go ahead and click on the Git Icon and see the menu. Make sure you close your instance of VS Code after installing Git to make sure it installs correctly.

  

[![](https://lh3.googleusercontent.com/-ZwRtzKlJENc/X_XhlzxH6OI/AAAAAAAAMXM/ry2I7bwsAKkdjqoytd7XpKuvq91L63oXACNcBGAsYHQ/w640-h408/image.png)](https://lh3.googleusercontent.com/-ZwRtzKlJENc/X_XhlzxH6OI/AAAAAAAAMXM/ry2I7bwsAKkdjqoytd7XpKuvq91L63oXACNcBGAsYHQ/image.png)

  

Above is how it should look like after you've rebooted VS code, the "Publish to GitHub" option is what we are going for in this guide. You can also make a local repository if you wish. However, something I didn't mention is that using VS code allows you to keep some changes local and later push the local commits to GitHub at your leisure, as we'll see later.

  

[![](https://lh3.googleusercontent.com/-MIxmUjo6gMM/X_Xismj6WVI/AAAAAAAAMXU/lP9h3iRs-OAQw936x5SMvhzzBj5DDpRaACNcBGAsYHQ/w640-h408/image.png)](https://lh3.googleusercontent.com/-MIxmUjo6gMM/X_Xismj6WVI/AAAAAAAAMXU/lP9h3iRs-OAQw936x5SMvhzzBj5DDpRaACNcBGAsYHQ/image.png)

  

Once you put the proper name for your repository decide whether you want the repository to be private or public and then press the "enter" on your keyboard. Another pop-up will appear asking you to click the checkboxes on what files you want to add to the repository from the original folder, do that and then press the "enter" key on your keyboard again. 

  

[![](https://lh3.googleusercontent.com/-uEJmvfyesHw/X_XjbdboGDI/AAAAAAAAMXo/zm6Y5kjy62QotXQmxokFfJRlUJnQmXrsACNcBGAsYHQ/w640-h412/image.png)](https://lh3.googleusercontent.com/-uEJmvfyesHw/X_XjbdboGDI/AAAAAAAAMXo/zm6Y5kjy62QotXQmxokFfJRlUJnQmXrsACNcBGAsYHQ/image.png)

  

  
You should see a little status bar telling you the upload status on GitHub! The Repository is now live on GitHub and it even includes a button to check it on the web! Now when you get back to the code you can see in the Git panel that there's some changes. Now it says changes and there are various tools above. The + button on each change is to stage the changes, once staged you can commit changes to the local repo.

  

  

[![](https://lh3.googleusercontent.com/-8aaUtsMtrFk/X_XkOcLf6lI/AAAAAAAAMXw/mkAYXUsokFoWE9s6gKz2Hyqe3oemp2gCwCNcBGAsYHQ/w640-h408/image.png)](https://lh3.googleusercontent.com/-8aaUtsMtrFk/X_XkOcLf6lI/AAAAAAAAMXw/mkAYXUsokFoWE9s6gKz2Hyqe3oemp2gCwCNcBGAsYHQ/image.png)

  

Here, I changed some text in my HTML and I want to make sure it's saved in Git and GitHub, here I press + to stage the changes and then press the checkmark to commit. 

  

[![](https://lh3.googleusercontent.com/-77FsG9DCqtU/X_XkZGEyLGI/AAAAAAAAMX0/2ebSrehRE4oScJzFMpbqJjze3ur0vPRowCNcBGAsYHQ/w640-h408/image.png)](https://lh3.googleusercontent.com/-77FsG9DCqtU/X_XkZGEyLGI/AAAAAAAAMX0/2ebSrehRE4oScJzFMpbqJjze3ur0vPRowCNcBGAsYHQ/image.png)

  

Make sure you add a Commit message to each commit, that way you can track the changes and remember why you made those changes. In this case I would say "added text to HTML <h1> tag and fixed typo". Make sure it's descriptive and short! Press the "enter" key on your keyboard to make the commit.

  

[![](https://lh3.googleusercontent.com/-6k86-x74H-s/X_XkpoxcHqI/AAAAAAAAMYA/ee_Q7z6kdhs8arP6H9att9lpM5L1gVYygCNcBGAsYHQ/w640-h408/image.png)](https://lh3.googleusercontent.com/-6k86-x74H-s/X_XkpoxcHqI/AAAAAAAAMYA/ee_Q7z6kdhs8arP6H9att9lpM5L1gVYygCNcBGAsYHQ/image.png)

  

  

Then my friends ask why there's a typo in the code on GitHub, as we can see there's no change on the GitHub repo. This means I forgot to push the commit and changes to the GitHub repository: Let's Fix that!

  

  

[![](https://lh3.googleusercontent.com/-iXiLvVLnAL0/X_XjDswowiI/AAAAAAAAMXg/3T__3VPMPB0Ni9v7-orPawpjXk-dt35nACNcBGAsYHQ/w640-h340/image.png)](https://lh3.googleusercontent.com/-iXiLvVLnAL0/X_XjDswowiI/AAAAAAAAMXg/3T__3VPMPB0Ni9v7-orPawpjXk-dt35nACNcBGAsYHQ/image.png)

  

 So,let's head over to the Git panel in VS Code and go to the three-dot menu on the side and press on "push". The push is a command that VS Code provides a button for, the button pushes all commits, branches, and changes made on the local repository to public and online repository on GitHub.  

  

[![](https://lh3.googleusercontent.com/-RzAeAX4ClEQ/X_XlFg40_dI/AAAAAAAAMYI/FdDiGCXvhekzGr7TPaR6eWIL0eZDF2CBgCNcBGAsYHQ/w640-h410/image.png)](https://lh3.googleusercontent.com/-RzAeAX4ClEQ/X_XlFg40_dI/AAAAAAAAMYI/FdDiGCXvhekzGr7TPaR6eWIL0eZDF2CBgCNcBGAsYHQ/image.png)

  
Now let's say my friend is helping me with the webpage and he added an extra line of HTML, I need to work with that updated version of the code, what can I do? I can use the Git "pull" element in the same three dot menu that push was found in. Pull is self-descriptive; it pulls the latest changes made to the files by contributors and can be extremely useful when coding with others.

  

[![](https://lh3.googleusercontent.com/--MWVijcUlMg/X_Xp4yVHQ4I/AAAAAAAAMYg/7Rp1vToAt6wHiBvTq2qumZAW6Y7B9crqwCNcBGAsYHQ/image.png)](https://lh3.googleusercontent.com/--MWVijcUlMg/X_Xp4yVHQ4I/AAAAAAAAMYg/7Rp1vToAt6wHiBvTq2qumZAW6Y7B9crqwCNcBGAsYHQ/image.png)

  
Now let's say we want to experiment with some new code, but we don't want to accidentally harm the original code. I can create a new branch to serve as an experimental branch where I can test the new code while the original stays safe. To do that press the "main" otherwise known as "branch" button that allows you to switch through branches and make a new branch whenever you want.  
  

[![](https://lh3.googleusercontent.com/-s-7naZ4cio0/X_XqyiSb0AI/AAAAAAAAMYs/87tI5SKNEdQ19WZtu3ukCvkmQ8M8ZjqiwCNcBGAsYHQ/w640-h408/image.png)](https://lh3.googleusercontent.com/-s-7naZ4cio0/X_XqyiSb0AI/AAAAAAAAMYs/87tI5SKNEdQ19WZtu3ukCvkmQ8M8ZjqiwCNcBGAsYHQ/image.png)

  
I'll go ahead and type the name of my branch and then press enter on the option to "create new branch", then whenever I want to switch branches I can simply click on "main" to go back to the main branch.   
  

[![](https://lh3.googleusercontent.com/-_lw0VpmZgpw/X_Xno_cgJnI/AAAAAAAAMYU/vw6XsB79Bwo1YfHLBAICWsM0zvxKBY8JgCNcBGAsYHQ/w640-h326/image.png)](https://lh3.googleusercontent.com/-_lw0VpmZgpw/X_Xno_cgJnI/AAAAAAAAMYU/vw6XsB79Bwo1YfHLBAICWsM0zvxKBY8JgCNcBGAsYHQ/image.png)

  
Now we see the repository complete with a commit, branch, and all our code. The code we wrote in VS code can be pushed, pulled, and edited by others. VS code has some of the best Git and GitHub integration in any code editor and I hope this guide has helped shown to make a repository to share your code and ideas with the world. 

  

  

Best, BenTechCoder

  

### Want to support the channel and Blog? You can Buy Me a coffee with the button below!