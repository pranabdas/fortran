"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([["284"],{8578:function(s,e,n){n.r(e),n.d(e,{metadata:()=>a,contentTitle:()=>c,default:()=>p,assets:()=>m,toc:()=>h,frontMatter:()=>r});var a=JSON.parse('{"id":"hypotenuse","title":"Calculate hypotenuse: example of subroutine","description":"Hypotenuse can be calculated using following formula:","source":"@site/docs/hypotenuse.mdx","sourceDirName":".","slug":"/hypotenuse","permalink":"/fortran/hypotenuse","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/fortran/blob/main/docs/hypotenuse.mdx","tags":[],"version":"current","frontMatter":{"title":"Calculate hypotenuse: example of subroutine","sidebar_label":"Calculate hypotenuse"},"sidebar":"docs","previous":{"title":"Absolute path","permalink":"/fortran/abs-path"},"next":{"title":"Numerical integration","permalink":"/fortran/integration"}}'),t=n("5893"),l=n("65"),i=n("5056");let r={title:"Calculate hypotenuse: example of subroutine",sidebar_label:"Calculate hypotenuse"},c=void 0,m={},h=[];function o(s){let e={annotation:"annotation",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",msup:"msup",p:"p",path:"path",pre:"pre",semantics:"semantics",span:"span",svg:"svg",...(0,l.a)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Hypotenuse can be calculated using following formula:"}),"\n",(0,t.jsx)(e.span,{className:"katex-display",children:(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"c"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.msqrt,{children:(0,t.jsxs)(e.mrow,{children:[(0,t.jsxs)(e.msup,{children:[(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsx)(e.mn,{children:"2"})]}),(0,t.jsx)(e.mo,{children:"+"}),(0,t.jsxs)(e.msup,{children:[(0,t.jsx)(e.mi,{children:"b"}),(0,t.jsx)(e.mn,{children:"2"})]})]})})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"c = \\sqrt{a^2 + b^2}"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1.24em",verticalAlign:"-0.1777em"}}),(0,t.jsx)(e.span,{className:"mord sqrt",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsxs)(e.span,{className:"vlist",style:{height:"1.0623em"},children:[(0,t.jsxs)(e.span,{className:"svg-align",style:{top:"-3.2em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"3.2em"}}),(0,t.jsxs)(e.span,{className:"mord",style:{paddingLeft:"1em"},children:[(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsx)(e.span,{className:"vlist-t",children:(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.7401em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"+"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsx)(e.span,{className:"vlist-t",children:(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.7401em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]}),(0,t.jsxs)(e.span,{style:{top:"-3.0223em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"3.2em"}}),(0,t.jsx)(e.span,{className:"hide-tail",style:{minWidth:"1.02em",height:"1.28em"},children:(0,t.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice",children:(0,t.jsx)(e.path,{d:"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z"})})})]})]}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200B"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.1777em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})]})}),"\n","\n",(0,t.jsx)(i.Z,{language:"fortran",title:"src/16_hypotenuse_subroutine.f90",showLineNumbers:!0,children:"! Compile the subroutine: gfortran -c 16_hypotenuse_subroutine.f90\nSUBROUTINE calculate_hypotenuse(side_a, side_b, hypotenuse)\n    IMPLICIT NONE\n\n    ! declare the intent of dummy variables\n    REAL, INTENT(IN) :: side_a\n    REAL, INTENT(IN) :: side_b\n    REAL, INTENT(OUT) :: hypotenuse\n\n    REAL :: temp\n\n    temp = side_a * side_a + side_b * side_b\n    hypotenuse = SQRT(temp)\nEND SUBROUTINE calculate_hypotenuse\n"}),"\n",(0,t.jsx)(e.p,{children:"Compile the subroutine:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"gfortran -c 16_hypotenuse_subroutine.f90\n"})}),"\n","\n",(0,t.jsx)(i.Z,{language:"fortran",title:"src/16_hypotenuse_program.f90",showLineNumbers:!0,children:"! subroutine without module\n! gfortran -c 16_hypotenuse_subroutine.f90\n! gfortran 16_hypotenuse_program.f90 16_hypotenuse_subroutine.o\nPROGRAM hypotenuse\n    IMPLICIT NONE\n    REAL :: s1, s2, output\n\n    WRITE (*, *) 'Program to calculate hypotenuse of a right triangle'\n    WRITE (*, *) 'Enter length of side 1:'\n    READ (*, *) s1\n    WRITE (*, *) 'Enter length of side 2:'\n    READ (*, *) s2\n\n! notice subroutine call can update values in the calling environment\n    CALL calculate_hypotenuse(s1, s2, output)\n\n    WRITE (*, 99) output\n99  FORMAT('Hypotenuse = ', F10.4)\nEND PROGRAM hypotenuse\n"}),"\n",(0,t.jsx)(e.p,{children:"Compile main program:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"gfortran 16_hypotenuse_program.f90 16_hypotenuse_subroutine.o\n"})})]})}function p(s={}){let{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(o,{...s})}):o(s)}}}]);