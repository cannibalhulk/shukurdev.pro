---
external: false
title: "Extended markdown style guide"
description: "In addition to supporting all basic Markdoc syntax, this template also supports extended markdown syntax to render custom components."
date: 2022-11-01
ogImageAbsoluteUrl: "https://thumbs.dreamstime.com/b/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-sd-%D0%B8-d-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%B2%D0%B5%D0%BD%D0%B7%D0%B5%D0%BB%D1%8F-sdlinked-%D0%BF%D1%80%D0%BE%D0%BF%D0%B8%D1%81%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D0%BA%D0%B2%D1%8B-189367832.jpg"
---

This blog's markdown is powered by [Markdoc](https://markdoc.dev/). In addition to supporting all basic markdown syntax, this blog also supports extended syntax to render custom components that are not conventionally available via basic markdown. This post is an example to showcase all available extended markdown syntax.

## YouTube Video

You can embed YouTube videos in your blog posts.

{% youtube url="https://www.youtube.com/embed/dQw4w9WgXcQ" label="Everything is awesome - Lego movie song" /%}

## Tweet

You can embed tweets in your blog posts.

{% tweet url="https://twitter.com/flexdinesh/status/1605685194312122370" /%}

## CodePen

You can embed codepens in your blog posts.

{% codepen url="https://codepen.io/ruphaa/pen/eYJqjgq" title="Ecosystem - Pen in CSS by Ruphaa" /%}

## GitHub Gist

You can embed GitHub gists in your blog posts.

{% githubgist id="d96064c9c4ef2e8ef71c90a10ffcf3b2" /%}

## Lesser Known HTML Elements

### abbr

{% abbr title="Graphics Interchange Format" %}GIF{% /abbr %} is a bitmap image format.

### sub

H{% sub %}2{% /sub %}O

### sup

X{% sup %}n{% /sup %} + Y{% sup %}n{% /sup %} = Z{% sup %}n{% /sup %}

### kbd

Press {% kbd %}{% kbd %}CTRL{% /kbd %}+{% kbd %}ALT{% /kbd %}+{% kbd %}Delete{% /kbd %}{% /kbd %} to end the session.

### mark

Most {% mark %}salamanders{% /mark %} are nocturnal, and hunt for insects, worms, and other small creatures.
