---
title: Setting up Fortran
sidebar_label: Setup
slug: /
keywords: ["fortran programming", "scientific programming", "numerical programming", "numerical integration"]
---

FORTRAN is optimized for high performance scientific computing. I will be
working on UNIX/<wbr/>Linux machine for running codes. If you are on Windows,
you may consider using [WSL](https://docs.microsoft.com/en-us/windows/wsl/). We
will be using [gfortran](https://gcc.gnu.org/fortran/) compiler.

To install gcc and gfortran in Ubuntu/<wbr/>Debian:
```bash
sudo apt install gcc gfortran
```

On macOS you can install via Homebrew:
```bash
brew install gcc
```

gfortran is part of gcc. You can use any text editor of your choice to write
source codes. We will be using `.f90` file extension for our source code files.
The program can be compiled using:
```bash
gfortran source.f90
```

It will create a binary file named `a.out` in the same directory as the source
code, which can be executed by:
```bash
./a.out
```

If you would like to specify a name for the executable instead of default
`a.out`:
```bash
gfortran source.f90 -o XYapp
```

If you have dependent modules in separate source files, you need to compile the
modules first followed by main program with linking module `.o` file. More on
this on the [modules](./05-modules.mdx) section.

```bash
gfortran -c module.f90
gfortran main.f90 module.o
```
