---
path: https://github.com/Mallipudijaya/browseRecipe
title: Recipe App
date: 1635368278138
type: translation
technologies: 
    - Swift
    - Swift UI
    - Xcode
url: https://es.sli.dev
thumbnail: /projects/Swift.png
description: IOS Browser App

---
This project involved translating the official Slidev docs into Spanish and creating a guide for translators in other languages.
## Overview of the project

![](/projects/slidev.jpg)

## Problem Statement

Slidev is a powerful presentation tool for developers, but its documentation wasn't initially available in Spanish, limiting its reach.
## Target Audience

Spanish-speaking Slidev users, developers, and potential/existing translators in other languages.

## Goals and requirements

- Translate the Slidev documentation into Spanish to improve its accessibility for Spanish-speaking users.
- Create a guide for translators in other languages to maintain up-to-date translations.

## Process
- Reviewed the original English documentation and translated it into Spanish using Markdown.
- Ensured that technical terms and code examples were accurately translated and maintained their original meaning.
- Collaborated with the Slidev team to integrate the Spanish translation into the official documentation.
- Developed a comprehensive guide for translators in other languages, outlining best practices, tools, and tips for maintaining up-to-date translations.

## Challenges

### Avoiding machine translations
Languages, even if they share the same ancestors, do not always have 1:1 translations. This means that you usually have to rewrite the whole sentence. There are many ways to do this, but I often try to understand what the sentence is trying to say and rewrite it in my own words.

As I said in [the TRANSLATIONS guide](https://github.com/slidevjs/docs/blob/main/TRANSLATIONS.md):
> Translations don't have to be literal, but they should convey the same message. If you're not sure how to translate something, you can either leave it as is or use online tools like WordReference or Linguee to help you.


### Sometimes English is better
You can probably find a translation for most programming terms, but in a world where English is ubiquitous, using translated terms can actually lead to confusion or the feeling that it's been machine-translated. 

For example, Nuxt layouts could be translated as "plantillas de Nuxt". But they require a folder called `layouts`, and there's also a `<NuxtLayout />` component. It might be easier for the reader to understand what a "layout" is in Nuxt, and associate it with the existing folder structure and components. I think "Layouts of Nuxt" is the best option in this case.
