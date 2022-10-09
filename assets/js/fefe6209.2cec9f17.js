"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[410],{6858:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>N,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),r=(t(7294),t(3905)),m=t(814);const s={title:"Determine value of pi by Monte Carlo method",sidebar_label:"Monte Carlo method"},o=void 0,i={unversionedId:"monte-carlo-pi",id:"monte-carlo-pi",title:"Determine value of pi by Monte Carlo method",description:"We will approximate value of $\\pi$ by Monte Carlo method. We will generate",source:"@site/docs/monte-carlo-pi.mdx",sourceDirName:".",slug:"/monte-carlo-pi",permalink:"/fortran/monte-carlo-pi",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/monte-carlo-pi.mdx",tags:[],version:"current",frontMatter:{title:"Determine value of pi by Monte Carlo method",sidebar_label:"Monte Carlo method"},sidebar:"docs",previous:{title:"Inner product",permalink:"/fortran/inner-product"},next:{title:"Monte Carlo integration",permalink:"/fortran/monte-carlo-integration"}},p={},l=[],c={toc:l};function N(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will approximate value of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))," by Monte Carlo method. We will generate\nrandom number in a square of radius 2 unit; x = (-1, 1) and y = (-1, 1). We will\ncount how many points are inside the circle of radius 1 unit. Area of the square\n= 4 square unit, while the are of circle is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))," (unit radius circle). Use this\nratio to approximate the value of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"))))),"."),(0,r.kt)(m.Z,{language:"fortran",title:"src/20_monte_carlo_pi.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'PROGRAM pi\n    IMPLICIT NONE\n    \n    INTEGER, PARAMETER :: iteration = 1000000\n    REAL :: x, y\n    REAL :: x_lo = -1.0\n    REAL :: x_hi = 1.0\n    REAL :: y_lo = -1.0\n    REAL :: y_hi = 1.0\n    INTEGER :: i, monte_area = 0\n\n    DO i = 1, iteration\n        CALL random_number(x)\n        CALL random_number(y)\n\n        x = x_lo + x * (x_hi - x_lo);\n        y = y_lo + y * (y_hi - y_lo);\n\n        IF (x * x + y * y < 1) THEN\n            monte_area = monte_area + 1;\n        END IF\n    END DO\n\n    PRINT *, "pi = ", 4.0 * monte_area / iteration\n\n    PRINT *, "relative error = ", abs(1.0 * monte_area / iteration &\n            - ATAN(1.0D0)) / ATAN(1.0D0)\n\nEND PROGRAM pi\n'))}N.isMDXComponent=!0}}]);