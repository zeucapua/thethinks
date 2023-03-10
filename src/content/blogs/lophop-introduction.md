---
title: This is Lophop 
description: Learn about the technologies and the problems my newest project "Lophop" is meant to solve. 
publish_date: "2023-03-07"
---
## Coding is hard. Teaching is hard. Teaching code shouldn't.

Kids on computers is exciting. Seeing them create their first coding projects, programming characters
they can control, and having logic click in their heads. What isn't exciting is the setup required to
effectively teach. 

Multiple accounts on different websites, hoping that they could stay on one site, on task.
Would they remember their username and passwords for all their accounts? How can you check their
code without having them send or save it? 

Can you do all this for tens of students at a time, multiple classes a day, all year?

Lophop is here to make all of that easier. Focus on your students and their code. We'll handle the rest.

## What is Lophop?

Lophop is an all-in-one teaching application, designed with coding as a curriculum in mind. Manage students in
different clubs, with lesson planning and progress tracking. Students can log in as members as long as they
remember the secret code to enter. From here, you have control as to what tools and lessons are available.

## How is Lophop built?

Lophop is built with Open Source Software (OSS) and available for anyone to look through. The backend consists
of Railway as the host for the PostgreSQL databases, one for general user data and another for authentication,
powered by Authorizer alongside Redis. It connects to the application using Prisma ORM for maximum type-safety.
The website is built with Svelte (& SvelteKit) and hosted on Vercel.

## Why build Lophop?

I've been teaching coding for a few years now, mainly geared towards young students, with some who aren't
even in kindergarten and can't read yet. The websites and technologies I've used was fairly inadequate. 
On top of keeping track of student progress on a proprietary service, I'd also have to manage student accounts,
all of which can be defunct as the student leaves. That means emails, passwords, and accounts are left to rot
on services out of our control.

All of these also means that managing that student can be disorganized and haphazardly put together.
Minutes wasted on making sure they can type in website names, press the correct buttons, and having them
remember passwords. This is a lot to ask for a student who just wants to make video games. What do you think
will happen after all that and have them learn coding concepts? They lose interest or not have enough energy
to follow along.

## And so...

With the summer school season coming up, I figured it was high time to create something new. Lophop is here
as both a learning opportunity for me as a upcoming full stack web developer and an experiment to make
e-learning the best as it can be. This will be "battle tested" with the classes I'm teaching this summer,
with about 30 students in each class, all learning either electronics and/or Scratch, classes back to back for
one month.

## Thank you!

This blog will be continued with updates and "tutorials" on Lophop. I'll share what I've learned creating this
web application, whether that be feature fit or technical challenges. Either way, I hope you join me for a
wild ride and see this all unfold this summer.
