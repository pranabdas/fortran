"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[135],{2993:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var o=t(7462),a=(t(7294),t(3905)),r=t(814);const l={title:"Loop"},i=void 0,p={unversionedId:"loop",id:"loop",title:"Loop",description:"DO Loop",source:"@site/docs/loop.mdx",sourceDirName:".",slug:"/loop",permalink:"/fortran/loop",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/loop.mdx",tags:[],version:"current",frontMatter:{title:"Loop"},sidebar:"docs",previous:{title:"Logical control",permalink:"/fortran/control"},next:{title:"File I/O",permalink:"/fortran/file"}},u={},s=[{value:"DO Loop",id:"do-loop",level:2},{value:"DO WHILE",id:"do-while",level:2}],c={toc:s};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"do-loop"},"DO Loop"),(0,a.kt)("p",null,"Calculate factorial:"),(0,a.kt)(r.Z,{language:"fortran",title:"src/07_factorial.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'! Program : Find factorial\n\nPROGRAM factorial\n  IMPLICIT NONE\n\n  INTEGER :: input, ii, output = 1\n\n  PRINT *, "Input = "\n  READ *, input\n\n  DO ii = 1, input\n    output = output * ii\n  ENDDO\n\n  PRINT *, input, "! = ", output\nEND PROGRAM factorial\n'),(0,a.kt)("p",null,"We can have a step size in a DO loop with a third parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fortran"},"DO i = 1, 100, 10\n  ! do something\nEND DO\n")),(0,a.kt)("p",null,"Exit a loop based on condition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fortran"},"DO i = 1, 10\n  CALL random_number(x)\n  IF (x > 0.5) EXIT\nEND DO\n")),(0,a.kt)("p",null,"Skip rest of current iteration with cycle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fortran"},"DO i = 1, 10\n  IF (iseven(i)) CYCLE\n  ! do something with the odd numbers\nEND DO\n")),(0,a.kt)("p",null,"Implied DO loops:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fortran"},"PRINT *, (i, i = 1, 10)\n")),(0,a.kt)("p",null,"You can iterate multiple expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fortran"},"PRINT *, (i, i**2, i = 0, 10)\n")),(0,a.kt)("p",null,"With nested loops:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fortran"},"PRINT *, ((i*j, i = 1, 10), j = 1, 10)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DO concurrent:")," if the iterations of a DO loop are independent, we can use the\nCONCURRENT keyword to indicate, the loop can be iterated in parallel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fortran"},"DO CONCURRENT (i = 1, 10)\n  ! do something\nEND DO\n")),(0,a.kt)("h2",{id:"do-while"},"DO WHILE"),(0,a.kt)(r.Z,{language:"fortran",title:"src/07_print_even_numbers.f90",showLineNumbers:!0,mdxType:"CodeBlock"},"PROGRAM even_numbers\n  IMPLICIT NONE\n\n  INTEGER :: num\n  num = 1\n\n  DO WHILE (num <= 10)\n    IF (MODULO(num, 2) == 0) THEN\n      PRINT *, num\n    END IF\n    num = num + 1\n  END DO\nEND PROGRAM even_numbers\n"))}d.isMDXComponent=!0}}]);