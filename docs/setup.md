---
title: Setup
slug: /
---
## Setting up Fortran environment
FORTRAN is often used in high performance scientific computing. I will be
working on UNIX/Linux for this tutorials. If you are on Windows 10, you may
consider using [WSL](https://docs.microsoft.com/en-us/windows/wsl/). We will be
using [gfortran](https://gcc.gnu.org/fortran/) to compile our programs. Install
gfortran in your computer.

On Ubuntu/Debian:
```bash
sudo apt install gcc gfortran
```

On macOS you can install using Homebrew:
```bash
brew install gcc
```

gfortran is part of gcc. You can use any text editor of your choice to write the
code. We will be using `.f90` file extension for our source code files. The
program can be compiled using:
```bash
gfortran source-file.f90
```

It will create a binary `a.out` in the same directory as the source code, which
can be executed by:
```bash
./a.out
```

If you would like to specify the name of the executable instead of default
`a.out`:
```bash
gfortran source-file.f90 -o XYapp
```
