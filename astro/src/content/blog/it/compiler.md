---
title: "Compiler"
description: ""
pubDate: 2026-02-01
lastEdit: 2026-02-03
---

## Bytecode

Fast to generate engine-level low-level code like ADD, LOAD. It then can be JIT (just-in-time) compiled to actual machine code (specific to the machine). Bytecode can "run" everywhere where the engine exists.

## Phases of Compilation

Lexical Analysis -> split code into identifiers, literals and operators with Regex

Syntax Analysis (Parser) -> put into production rules (grammar), eg. build the parse tree or AST and check if syntax is valid

Semantic Analysis -> checks the parse tree by types, multiple variable declarations and more

Intermediate Code Generation -> splits expression into simpler expressions (eg. TAC -> at most 3 addresses)

Code Optimization -> different modes of optimization including dead code elimination or loop optimizations

Target Code Generation -> translates to assembly code

First four phases are called front-end (machine-independent, language-specific), last two are called back-end (machine-specific, language-independent).

## Three Address Code (TAC)

Intermediate Code that has expressions with at most 3 addresses (ids).

## Interpreter

The source code written in a high-level language (HLL) is translated into interpreter-specific bytecode. This bytecode is never compiled, but the interpreter is. So, a bytecode might include an ADD command, but the handling of this ADD command (by the interpreter) is compiled. In action, this mean, the interpreter runs and  if it gets as input an ADD, it then will run the compiled code section of the ADD handling.

## Abstract Syntax Tree (AST)

## Just-in-Time Compilation (JIT)

A JIT is a program that runs alongside an interpreter. When the interpreter detects frequently executed code or a potential speed-up, it compiles the code section, just-in-time, and runs the compiled section instead of the interpreter's handler

## Assembly

## LLVM

## GCC

## Intermediate Language (IL)

Bytecode for the engine to run. Used for interpreters or JIT compilation. Stored in a file and is machine-independent.

## Intermediate Represantation (IR)

Any form of the code that is needed for the final compilation. Could be an AST or the TAC. Used for compilers and not meant for execution, usually temporarily only saved in memory.

## Virtual Machine (VM)

In the context of programming languages, it is an environment that runs platform-independent and contains the necessities to have source code run on the machine. The Java Virtual Machine (JVM) is a famous example.