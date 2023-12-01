"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[369],{2537:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>N,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=r(5893),t=r(1151),u=r(9286);const s='! Calculate factorial\n!      | n(n -1)  n >= 1 \n! n! = |\n!      | 1        n = 0\nPROGRAM recursive_subroutine\n    IMPLICIT NONE\n    INTEGER :: input, output\n\n    PRINT *, "This program calculates factorial:"\n    PRINT \'(a,$)\', "Input = "\n    READ *, input\n\n    CALL factorial(input, output)\n\n    PRINT *, input, "! = ", output\n\nCONTAINS\n    RECURSIVE SUBROUTINE factorial(n, result)\n        INTEGER, INTENT(IN) :: n\n        INTEGER, INTENT(OUT) :: result\n        INTEGER :: tmp\n\n        IF (n >= 1) THEN\n            CALL factorial(n-1, tmp)\n            result = n * tmp\n        ELSE\n            result = 1\n        END IF\n    END SUBROUTINE factorial\nEND PROGRAM recursive_subroutine\n',c='! Fibonacci series\n! F(0) = 0\n! F(1) = 1\n! F(n) = F(n-1) + F(n-2)  for n > 1\nPROGRAM recursive_function\n    IMPLICIT NONE\n    INTEGER :: lim, i\n\n    PRINT *, "This program calculates fibonacci series:"\n    PRINT \'(a,$)\', "Limit = "\n    READ *, lim\n\n    DO i = 0, lim\n        PRINT *, "Fib(", i, ") = ", fibonacci(i)\n    END DO\n\nCONTAINS\n    RECURSIVE FUNCTION fibonacci(n) RESULT(output)\n        INTEGER, INTENT(IN) :: n\n        INTEGER :: output\n\n        IF (n > 1) THEN\n            output = fibonacci(n - 1) + fibonacci(n - 2)\n        ELSE IF (n == 1) THEN\n            output = 1\n        ELSE\n            output = 0\n        END IF\n    END FUNCTION fibonacci\nEND PROGRAM recursive_function\n',o={title:"Recursion"},a=void 0,l={id:"recursion",title:"Recursion",description:"Ordinary FORTRAN procedures (subroutine and function) are not recursive, i.e.,",source:"@site/docs/recursion.mdx",sourceDirName:".",slug:"/recursion",permalink:"/fortran/recursion",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/recursion.mdx",tags:[],version:"current",frontMatter:{title:"Recursion"},sidebar:"docs",previous:{title:"Complex number",permalink:"/fortran/complex"},next:{title:"Custom types",permalink:"/fortran/types"}},N={},p=[{value:"Recursive subroutine",id:"recursive-subroutine",level:2},{value:"Recursive function",id:"recursive-function",level:2}];function E(n){const e={code:"code",h2:"h2",p:"p",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Ordinary FORTRAN procedures (subroutine and function) are not recursive, i.e.,\nthey cannot invoke themselves in their body. We can use the ",(0,i.jsx)(e.code,{children:"RECURSIVE"})," keyword\nto implement recursive procedures."]}),"\n",(0,i.jsx)(e.h2,{id:"recursive-subroutine",children:"Recursive subroutine"}),"\n",(0,i.jsx)(e.p,{children:"Calculate factorial using recursive subroutine:"}),"\n","\n",(0,i.jsx)(u.Z,{language:"fortran",title:"src/21_recursive_subroutine.f90",showLineNumbers:!0,children:s}),"\n",(0,i.jsx)(e.h2,{id:"recursive-function",children:"Recursive function"}),"\n",(0,i.jsx)(e.p,{children:"Calculate fibonacci series using recursive function:"}),"\n","\n","\n",(0,i.jsx)(u.Z,{language:"fortran",title:"src/21_recursive_function.f90",showLineNumbers:!0,children:c})]})}function f(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(E,{...n})}):E(n)}}}]);