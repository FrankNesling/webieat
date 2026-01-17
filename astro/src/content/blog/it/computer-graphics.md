---
title: "Computer Graphics"
description: ""
pubDate: 2026-01-04
lastEdit: 2026-01-14
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

### uniform

Constants for one draw call, best example is current time. Both in fragment and vertex shader. Useful to pass constants to compiled shaders without the need to recompile the shader.

### attribute

Only in vertex shader. Data that differs per vertex.

### varying

Data from vertex shader to fragment shader.

## Fragment

Smallest elements of rasterization, with final visible fragments become pixels on the screen.

Each pixel can initially have several fragments.

## Rasterization

Split a primitive (usually triangle) into fragments.

## Graphics Pipeline

The GPU's job is to determine the final pixel colors. 

1.) Vertex shader: Transform vertices into the screen space.

2.) Primitive Assembly: Connect vertices into shapes (usually triangles).

3.) Rasterization: Convert the shapes into fragments (candidate pixels).

4.) Fragment shader: Determine final color of fragment.

5.) Depth test (opaque): Find for each pixel the closest opaque fragment.

6.) Write to frame buffer: Store the color of the closest opaque fragment in the corresponding pixel in the frame buffer. Pixels without a fragment get the background color.

7.) Alpha blending (transparent): Blend transparent fragments (even further behind ones) for each pixel with the exisiting color in the frame buffer and update the frame buffer.

8.) Display: The final frame buffer is served onto the screen.

## Material

A reusable set of shaders.

## Draw Call

A call to the GPU from the CPU which a specified shader and a state. One frame can have several draw calls. The later draw calls might overwrite previous draw call results in the frame buffer.

First opaque meshes, then transparent ones. The transparent ones need to be sorted back to front, otherwise the final alpha blended color is incorrect.

## Rendering

The process to create one frame.

## Frame

The final result, ie. each pixel has a color.

## Face

Usually a triangle consisting of three vertices.

## Texture

An image applied on a surface.

## UV-Coordinates

Maps a vertex to its texture coordinate.

## Mesh

A collection of vertices and faces to build a 3D model.

## Z-Buffer

Saves depth of closest (to screen) fragment for each pixel (z-buffer dimension = screen resolution), computed by GPU. Transparent fragments are usually skipped. If pixel has no fragment, sets it to infinity.

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

Frame buffer is cleared at the start of each frame.

## Coordinate systems

**Local/Object**: Coordinates determine the position of the vertices in regard to the object's origin

**World**: Coordinate determines where the local origin of the object is placed in the world

**View**: Coordinate determines the origin of an object relative to the camera, when the camera is in the origin

**Projection**: Coordinate determines a 4D vertex in clip space

## Spaces & Matrices

**Local space** w. World Matrix (one for each object) => World space (3D)

**World space** w. View Matrix (one for each camera) => View/Camera space (3D)

**View space** w. Projection Matrix  (one for each camere) => Clip space (4D)

**Clip space** w. some transform (NDC, Divide) => Screen space (2D)

## DirectX

Tools to communicate with graphic cards. Focus on Windows, in contrast to OpenGL's cross platform.

## 3dfx Voodoo graphics

Voodo graphic modules by the company 3dfx were popular 3D accelerators in the 1990s.

## 3D acceleration

Specialized hardware to perform 3D computations faster than using the CPU alone.

## CUDA

Communicate to GPU for many parallel calculations (eg. Machine Learning), but not for graphics rendering.

## Vulkan

Same as OpenGL, just lower level (memory management, etc.).

## OpenGL

Cross-platform API specification to communicate with the GPU, for graphics, created by the Khronos Group. Every graphics card vendor has their own implementation of OpenGL.

## GLSL (OpenGL Shading Language)

The programming language for the shaders used by OpenGL.

## Sprite

A sprite maps image data (texture or parts of it) to a screen position.

## Graphics Memory (VRAM)

Saves images or textures, sprites, color palettes and often the frame buffer.