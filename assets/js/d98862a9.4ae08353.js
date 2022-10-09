"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[263],{829:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var e=a(7462),r=(a(7294),a(3905)),o=a(814);const s={title:"Swap two numbers"},p=void 0,i={unversionedId:"swap",id:"swap",title:"Swap two numbers",description:"Subroutine to swap two integers:",source:"@site/docs/swap.mdx",sourceDirName:".",slug:"/swap",permalink:"/fortran/swap",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/swap.mdx",tags:[],version:"current",frontMatter:{title:"Swap two numbers"},sidebar:"docs",previous:{title:"Coding practice",permalink:"/fortran/category/coding-practice"},next:{title:"Absolute path",permalink:"/fortran/abs-path"}},c={},u=[],w={toc:u};function m(t){let{components:n,...a}=t;return(0,r.kt)("wrapper",(0,e.Z)({},w,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subroutine to swap two integers:"),(0,r.kt)(o.Z,{language:"fortran",title:"src/24_swap.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'PROGRAM MAIN\n    IMPLICIT NONE\n\n    INTEGER a, b\n\n    PRINT "(a,$)", "Enter two integers (separated by space or comma): "\n    READ *, a, b\n\n    CALL swap(a, b)\n\n    PRINT *, "After swap: ", a, b\n\nCONTAINS\n\n    SUBROUTINE swap(a, b)\n        INTEGER, INTENT(IN OUT) :: a, b\n        INTEGER tmp\n\n        tmp = a\n        a = b\n        b = tmp\n    END SUBROUTINE swap\nEND\n'))}m.isMDXComponent=!0}}]);