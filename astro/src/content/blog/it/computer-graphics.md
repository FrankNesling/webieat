---
title: "Computer Graphics"
description: ""
pubDate: 2026-01-04
lastEdit: 2026-01-04
---

## Shader

A program that is exectued on the GPU.

Usually either Vertex oder Fragment shader.

## Vertex shader

Transforms the vertices (scale, rotate, translate) and passes attributes (eg. color) to the next stage.

Executed per vertex.

## Fragment shader

Determines the final color based on texture, lightning and other effects.

Executed per fragment.

## Fragment

Smallest elements of rasterization, with final visible fragments become pixels on the screen.

## Graphics Pipeline

1.) Vertex shader 

2.) Primitive Assembly: Connect vertices into shapes (usually triangles)

3.) Rasterization: Convert the shapes into fragments

4.) Fragment shader

5.) Depth test: Find for each pixel the closest fragment

6.) Alpha blending

7.) Write to frame buffer

## Material

A reusable set of shaders.

## Draw Call

A call to the GPU from the CPU.

## Face

Usually a triangle consisting of three vertices.

## Texture

An image applied on a surface.

## UV-Coordinates

Maps a vertex to its texture coordinate.

## Mesh

A collection of vertices and faces to build a 3D model.

## Z-Buffer

Saves depth of closest (to screen) fragment for each pixel (z-buffer dimension = screen resolution), computed by GPU.

## Z-Prepass or Depth-Pre-Pass

Calculates Z-Buffer before expensive calculations (eg. lightning), so fragment shader only runs on one fragment per pixel.

## Alpha Value

Transparency of a fragment (0 = fully transparent, 1 = fully opaque). Computed based on transparent colors or textures in earlier stages.

## Alpha Index

Back-to-front sorting for transparent meshes, ensuring correct blending when fragments of those meshes have the same depth on the same pixel.

## Alpha blending

Combines a transparent fragment's color with the colors of the fragments behind it on the same pixel.

## VRAM (Video Random Access Memory)

Similar to RAM, just for GPU.

## Frame buffer

Final array of pixel colors to be displayed on the screen (dimension = screen resolution).

