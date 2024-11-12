"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([["587"],{9377:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"modules","title":"Modules","description":"Large programs can be organized in separate modules and procedures. Here is an","source":"@site/docs/modules.mdx","sourceDirName":".","slug":"/modules","permalink":"/fortran/modules","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/fortran/blob/main/docs/modules.mdx","tags":[],"version":"current","frontMatter":{"title":"Modules"},"sidebar":"docs","previous":{"title":"Loop","permalink":"/fortran/loop"},"next":{"title":"Procedures","permalink":"/fortran/procedures"}}'),a=r("5893"),s=r("65"),l=r("5056");let i={title:"Modules"},d=void 0,t={},c=[{value:"USE keyword",id:"use-keyword",level:2}];function u(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Large programs can be organized in separate modules and procedures. Here is an\nexample. We store various mathematical and physical constants in a module named\n",(0,a.jsx)(n.code,{children:"constants_module"}),"."]}),"\n","\n",(0,a.jsx)(l.Z,{language:"fortran",title:"src/11_const_module.f90",showLineNumbers:!0,children:"MODULE const_module\n  IMPLICIT none\n  PRIVATE\n\n  REAL, PUBLIC, PARAMETER :: pi = 3.14159265\n  REAL, PUBLIC, PARAMETER :: e  = 2.71828182\n\nEND MODULE const_module\n"}),"\n",(0,a.jsx)(n.p,{children:"Now we write a program that uses the above module:"}),"\n","\n",(0,a.jsx)(l.Z,{language:"fortran",title:"src/11_circ_area.f90",showLineNumbers:!0,children:'PROGRAM circ_area\n  USE const_module\n  \n  IMPLICIT none\n\n  REAL :: rad = 5.0, area\n\n  area = pi*rad**2\n\n  PRINT *, "Area = ", area\nEND PROGRAM circ_area\n'}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"PRIVATE"})," keyword makes sure everything is private otherwise declared as\n",(0,a.jsx)(n.code,{children:"PUBLIC"}),". Private variables are accessible only to the module, while public\nvariables are accessible to the programs that uses it. There is also ",(0,a.jsx)(n.code,{children:"PROTECTED"}),"\nkeyword, which allows the variable to be accessible but the value cannot be\nmodified. Compile and run our module and program:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gfortran -c 11_const_module.f90\ngfortran 11_circ_area.f90 11_const_module.o\n./a.out\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["Modules need to be compiled before the program that uses it. If both are placed\nin the same source file, the module should come before the program. Once the\nmodule is compiled, it will create ",(0,a.jsx)(n.code,{children:".o"})," and ",(0,a.jsx)(n.code,{children:".mod"})," files. When we compile the\nprogram, we only need to provide the ",(0,a.jsx)(n.code,{children:".o"})," file for linking, the compiler will\nfind the ",(0,a.jsx)(n.code,{children:".mod"})," files. If the files are on a different directory, specify via\n",(0,a.jsx)(n.code,{children:"-I<dir>"})," option."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gfortran -I./ 11_circ_area.f90\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"use-keyword",children:"USE keyword"}),"\n",(0,a.jsx)(n.p,{children:"Rename a variable:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"use const_module, math_pi => pi\n"})}),"\n",(0,a.jsx)(n.p,{children:"Use only certain variables:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"use const_module, only : pi\nuse const_module, only : pi, e\n"})}),"\n",(0,a.jsx)(n.p,{children:"Last command is same as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"use const_module, only : pi\nuse const_module, only : e\n"})}),"\n",(0,a.jsx)(n.p,{children:"Use pi and rename e:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"use const_module, only : pi, log_base => e\n"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);