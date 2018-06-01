---
title: MSc - Logo & Lego Mindstorms
thumbnail: /img/lego/slide2.png
color: grey
thumbnails2:
  - /img/lego/javacc.jpg
  - /img/lego/lego2.png
  - /img/lego/lego3.png
  - /img/lego/parsetree2.png
  - /img/lego/robot.jpg
  - /img/lego/slide2.png
  - /img/lego/slide4.png
  - /img/lego/slide6.png
  - /img/lego/wire.png
date: "2018-01-15"
---

I completed an MSc in Software Engineering in 2010 and my final-year project was titled "A Logo programming environment for Lego Mindstorms&trade; robots". I made a Java web application for students to use to program a robot to execute Logo (Turtle Maths).

Turtle Math&#8217; is a simple language which has been used in schools for decades to help introduce children to the concepts of computer programming. On a normal computer, &#8217;fd 10&#8217; moves the turtle forward 10 units and rpt 4 [fd 10 rt 90] draws a square.

> A Logo turtle has only a location on screen and an orientation&hellip;Indeed, the Turtle is like a person: "I am here and I am facing north..." And from these similarities comes the Turtle&#8217;s special ability to serve as a representative of formal mathematics for a child.
>
> <cite>Seymour Papert, inventor of Logo and consultant for Lego Mindstorms&trade; robots</cite>


My application allowed a list of users to share one robot, to write Logo and execute the commands in a Java Swing GUI. When ready, the user in charge of the robot could execute the commands on the robot and it would move along the ground, drawing geometric shapes as it goes.

 * Logo interpreter written using JavaCC to generate the parser
 * GUI built with Java Swing and the Java port of PureMVC
 * Lego Mindstorms robot re-flashed with Lejos (Tiny Java VM)
 * Sockets and bluetooth

<a href="/img/logo/ss10.png"><img src="/img/lego/javacc.jpg" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/lego2.png" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/lego3.png" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/parsetree2.png" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/robot.jpg" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/slide2.png" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/slide4.png" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/slide6.png" style="width: 32%;"/></a>
<a href="/img/logo/ss10.png"><img src="/img/lego/wire.png" style="width: 32%;"/></a>



All source code (Java) is available here, in 6 separate NetBeans projects for the Logo interpreter, front end, back end, libraries and code to run on the robot itself.

The final project report (pdf) is available here

MSc dissertation
src on github
