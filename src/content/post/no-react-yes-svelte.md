---
title: Stop Learning with React. Start with Svelte Instead.
description: The title says it. The blog will explain it.
date: "2023-07-02"
draft: true
---

// picture of tweet

I wrote a tweet before heading to sleep. It was about how, in my opinion, that new web
developers should stop learning using React and instead learn with Svelte. I knew that Tech
Twitter has a bit of a weird relationship with React right now, and the fact that I forgot
about that context made waking up to way too many likes and comments about my tweet both
exciting and dreadful.

Tweets are inheritly awful at providing context and nuance, so maybe there was some 
misinterpretation of my intentions. With that said, let's talk about what the critics in the 
comments are saying and why I'm opposed to their arguments, but also why I understand their
frustration and what we can do about it all.

## What is everyone saying?

There are basically a few common sentiments in the comments and quote tweets: that you should
learn HTML, CSS, and JS first; and React is better to learn due to bigger community, library
ecosystem, and job opportunities.

### "Learn HTML, CSS, and JS before a JS Framework!"

I've taught web development to beginners a few times, and I've always started with Javascript
and moving onto HTML and CSS. This isn't a bad approach per se; learning the essentials of the 
languages are important. The problem comes with how the web ecosystem is today, where knowing
those isn't enough to make a website anymore. All three are inheritly intertwined when creating
web applications. "Learning" HTML and CSS are a waste of time as they are more for layouts and 
templating how the site looks, and when starting with coding, you're goal should be to create
practical applications. That said, learning Javascript with the *help* of HTML and CSS to 
display your results is a good idea to get used to the language's quirks as well as finding out
how to communicate with the browser's API and the internet in general.

Now let's talk about Javascript frameworks like React and Svelte. UI (user interface) frameworks
bundle HTML, CSS, and Javascript into components with a proprietary templating system. This way,
coders are able to focus on the function of each individual element on the page with abstractions
that makes the tedious work of connecting the big 3 languages painless. Long story short, 
UI frameworks are used for its abstractions and production advantages (like compiling, rendering,
etc.) and we should use that for our advantage as beginners.

The most important thing to learn about web development is Javascript and how it interacts with
the browser. Concepts like asynchronous code and working with APIs are more valuable to a new
web developer than how Javascript interfaces with HTML and CSS, so let's remove that from
your priorities and use a UI framework to do that for you. And if anything, you can learn more
about semantic/accessibility HTML and CSS extensions like Sass and Less in the future once you 
get the hang of Javascript.

### "Why Svelte over React?"

Before we get into this, please know that I don't ***hate*** React. React is a great,
battle-tested framework used in production from the smallest side projects to the biggest
companies across the world. But I have my reasons for Svelte, other than being a big fan lol.

Those in the replies for "pro-React" have two arguments: React has a bigger community for 
support, libraries and packages; and that it's better to learn for more job opportunities. I'll
leave the second argument aside (since I got a lot of thoughts on that), so let's focus on the 
first.

In my opinion, I think this is React's crutch. An example to look at is the fabled
create-react-app (CRA), made by Facebook, now Meta. It was created towards the start of React's 
journey, when bundling was hard, and making sure everything work across all browsers was iffy
at best. Polyfill (or the act of adding code to make a feature compatible) was important to 
the early days. But if you've been in the space for a minute, you might know that people are 
starting to recommend against CRA due to its heavy bloat and its toxic base that expects 
maintainers to polyfill for every package they want to add, even if not appropriate (see 
Github issue of people wanting to polyfill a crypto package into the frontend?).

Now wait a minute, we're talking about React, not CRA, so why bring it up? Well it points to
this notion that a large community to rely on is good for beginners and packages are there to 
make life easy. And you know what, that's true. The problem is that now you're making new
developers rely on packages. Most of those who used CRA and talking about supporting every 
package are relying on maintainers and library authors to do their work for them, not just in 
their UI and meta framework, but with their site's functionality as well.

Let's not even get started on the current "drama" around Next.js 13, React canary, and React
Server Components, which is being thoroughly debated on Tech Twitter, surrounding in its 
"instability" and edge case errors while being pushed onto developers to use in production.

Svelte's strengths lie in its dedicated community and its ease of use, and that's what we need
for new web developers. Beginners need not learn hooks like useEffect and creating their own
for reactivity, as well as other React "foot-guns"; rather they get to focus on composability 
and creating functionality in their applications. Moreover, the lack of packages forces
developers to make the features they want on their own. No relying on existing tooling and 
services. Instead, they are forced to learn how to interact with the web and their framework
of choice. If there's a library niche to be made, create it.

// add more

## "Learn Svelte... unless you want a Job."

I despise this notion, but I know that my opinion is one of privilege. So let's head this off 
at the start. 

> Yes, if you want a job quickly, learning React is better as the industry has a larger pool of 
React developer opportunities than for Svelte.

If you're goal is to be a UI developer that creates features and buttons in an existing codebase
without needing to extend further from your team's sprint to do list, then yes, most of the jobs
for React will be available to you. However, if you actually want to make your own product from
scratch as a beginner, Svelte will get you further faster.

Frameworks are subject to change, and so all we can ask for beginners is to teach them how to
learn and pick up the fundamentals easily with tooling that helps them move faster. Svelte allows
developers to learn how to work with components and Javascript libraries without the need to
create their own reactivity functions and state management. 

Like seriously, the fact that [usehooks.com](https://usehooks.com) exists is mind boggling, 
especially if you're new to React, where hooks are the norm to handle everthing.

// something about Svelte as a platform to leap into more complex frameworks like React to
learn about how to work with frameworks in general, learn how to learn coding, and then 
moving onto established tooling to get a job without putting unnecessary blockers at the 
beginning of your journey
