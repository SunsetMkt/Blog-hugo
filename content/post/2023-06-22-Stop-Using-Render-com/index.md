---
categories: Original
date: "2023-06-22T00:00:00Z"
tags:
  - PaaS
  - 产品评测
slug: Stop-Using-Render-com
title: Stop Using Render.com
---

TL;DR [Render](https://render.com/) is an immature PaaS platform with inappropriate account suspensions and customer service quality issues. I do not recommend using it.

## How it started?

On 2023/6/10, I found two of my applications disappeared without notifications, I thought this was a bug of Render or I deleted them but I just forgot. Then I checked my blueprints and found the blueprints of the two applications are still there. I clicked the "Deploy" button on the Blueprint page and found myself logged out and can not log in.

## My reactions

I sent an email to support@render.com immediately and also post this issue to Render Community, but my first post was blocked by
Akismet. After two days, I post again, and later that day, my post was unlisted by a staff without replying. 6 days after that, I post with the title "Unable to log in to Render account for a week" and urged Render Support to contact me. The same staff closed and unlisted my post, who also replied to my support email.

## Render's Reply on 2023/6/19

I quote, "This account has been blocked for violating our Acceptable Use Policy. If you believe this decision was a mistake, please review our Terms of Service and Acceptable Use Policy". I reviewed all of my deployed projects and found no harmful ones, so I replied for further instructions to unblock my account.

But no one replied.

## My defense on 2023/6/20

On most platforms, active tickets could be replied to in time, but not for Render. So I wrote my defense and post it to Render Community.

Original text:

---

Title: Account was blocked by mistake

After one week's waiting, finally, there's a staff to check my request. I was told that "This account has been blocked for violating our Acceptable Use Policy", but after I checked Render's ToS and Acceptable Use Policy, I believe that this is a mistake.

I've reviewed all of my deployed projects and found two projects that may cause this block: go-proxy-bingai (https://github.com/adams549659584/go-proxy-bingai) and NewBingGoGo-Web (https://github.com/jianjianai/NewBingGoGo-Web). I guess the keyword "proxy" in the project name may lead to misunderstanding and I've found reports of being blocked by deploying this project. The staff of Render may not check the project's source code before blocking users who deploy it.

go-proxy-bingai and NewBingGoGo-Web are the same (actually similar, this is a typo) projects, a third-party Bing Chat implement (typo, implementation). What they do is call Microsoft's API with Edge browser's UserAgent to get a chatting token, and connect to Microsoft's chatting server with websocket (at the client side of the web page or connects from the server side like using OpenAI API). There's no intentional proxy function built into the projects, even the server may request assets from Microsoft, this is because sometimes there are HTML cards in Bing Chat's response. There is not much difference between them with an OpenAI GPT chat web app and the latter is not a proxy or anything that violates ToS I guess.

I've seen people deploying these things on Vercel, Railway, and lots of PaaS, and none of them thinks this violates their ToS. Even if these projects break Render's ToS (actually not), there should be an email or notification saying "You should not do this again" like what we see on Railway or Vercel, not this bug-like behavior.

I'm willing to hear any ideas from Render's tech staff on this issue about how you define "violates ToS and Acceptable Use Policy" and the exact rule that causes my account blocking. If there's not a convincing explanation, it would be better to unblock my account.

P.S. Although Render blocks my account, not all of my projects are suspended, some of them still could be accessed via my custom domain. What a mess! Super unprofessional, I would say.

I've also sent this post to Render's support email, please feel free to contact me through this forum or mail. I hope you will take this matter seriously and provide me with a satisfactory solution.

---

Still, my email was not replied and my post disappeared (yes, not unlisted, just disappeared).

So I posted "My last post seems to be disappeared" on 2023/6/21, the same Render staff closed and unlisted my post, and also replied to my first ticket, that I quote, "We've told you of our decision and that still stands." When asked for the exact rule that causes this blocking, the staff replied, "We've provided you with a reason."

This should not be the proper way to deal with user requests, I guess.

During the process, I've found the staff in Render lacks motivation without pushing, is passive-aggressive towards blocked users, and never reads users' statements.

## Half-blocked account and security concerns

Though my account is blocked by Render, I was astonished to find that Render did not suspend all of my applications. One of them is still running and accessible from my custom domain. Even worse, my secret key is still in its environment variables. Now this leads to a question, are blocked users' data security still protected?

On 2023/6/22, the same Render staff replied to my post titled "Account Blocked but App’s still running and undeleted". I quote, "We will be resolving this later today."

On 2023/6/23, the application is suspended, but not deleted. Not sure if the environment variables are still there. Staff's reply is "The custom domain may still be active pointing at our service but it is our proxy that is responding since the domain is still pointing at us".

## Lacks notification and feedback

In most modern PaaS, if your project is potentially harmful, the platform will pop up a warning to tell you, "You are not allowed to deploy this", like what we could see on Railway or Heroku.

In Render, this is different.

If Render thinks what you deploy is harmful, it blocks your account immediately and without notification, even no message saying "You are blocked", just leaves you out of the account. When you try to log in, it redirects you to the login page again. That's all they do.

If you search for the Render Community for "Render dashboard keeps redirecting me to login form" or "Can not login", you will find some posts saying that they are meeting this problem. And if we consider those unlisted posts, that would be a considerable amount, and some of them are even not replied to after 30 days. As a reference, if we search "blocked" on Vercel Community, you will find those posts are replied to and solved on the same day. This created a stark contrast between Render and its competitors.

## Conclusion

I've tried not to be mean or rude, but the offense I experienced during contacting Render Support makes me very angry and unsatisfied. I've never seen any development platform has such poor service.

Render's service and staffs are still immature and unprofessional. Although free deployment is its current advantage, who knows if it will change in the future like what happened to Heroku?

## Fairness Commitment

I promise that in this document, I have not intentionally omitted any facts that may be unfavorable to myself, and I have accurately described the actions of both Render employees and myself.
