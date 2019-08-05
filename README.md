# Vega Lite Getting Started

## Intro notes


### What is this?
This repository is only a set of exercises from Vega Lite webpage. I'm learning the concepts and the working logic of Vega Lite. 

Vega Lite is built on top of Vega and it on top of D3. Vega lite heart is a JSON schema that describes all things required by a specific graphic. It is based on the "Grammar of graphics" by Lelan Wilkinson. More @ http://www.roger-beecham.com/intro-visual-data-analysis/sessions/session_datavis.html

A graphic can be fully contained in that schema, that is interchangable and lightweight, and can be produced by machines. 

#### Key properties of the schema:
- data -> define the source of data, local or external
- transform -> create calculated fields
- mark -> type of visualization
- encoding -> map variables to x and y axis, add legend and colors