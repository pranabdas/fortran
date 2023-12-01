"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[6],{3774:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>j,frontMatter:()=>m,metadata:()=>h,toc:()=>x});var a=n(5893),r=n(1151),t=n(9286);const l='MODULE add_module\n  IMPLICIT none\n  PRIVATE\n\n  REAL :: input1, input2, total\n\n  PUBLIC :: read_inputs, add_numbers, print_result\n\nCONTAINS\n\n  SUBROUTINE read_inputs()\n    PRINT "(a,$)", "Input1 = "\n    READ *, input1\n\n    PRINT "(a,$)", "Input2 = "\n    READ *, input2\n  END SUBROUTINE read_inputs\n\n  SUBROUTINE add_numbers()\n    total = input1 + input2\n  END SUBROUTINE add_numbers\n\n  SUBROUTINE print_result\n    PRINT *, input1, " + ", input2, " = ", total\n  END SUBROUTINE print_result\nEND MODULE add_module\n',i="PROGRAM add\n  USE add_module\n  IMPLICIT none\n\n  CALL read_inputs()\n  CALL add_numbers()\n  CALL print_result()\nEND PROGRAM add\n",c="MODULE function_module\n  IMPLICIT NONE\n  PRIVATE\n\n  INTEGER, PARAMETER, PUBLIC :: power = 5\n  PUBLIC :: f\n\n  CONTAINS\n\n  FUNCTION f(x) RESULT(f_result)\n    REAL, INTENT(IN) :: x\n    REAL :: f_result\n\n! SELECTED_REAL_KIND(precision [, range])\n    INTEGER, PARAMETER :: kind_needed = selected_real_kind(power + 1)\n\n    f_result = (1 + 1 / REAL(x, kind_needed)) ** x\n  END FUNCTION f\nEND MODULE function_module\n",d='PROGRAM function_table\n\n  USE function_module\n  IMPLICIT NONE\n  REAL :: x\n  INTEGER :: i\n\n  DO i = 0, power\n    x = 10**i\n    PRINT "(f8.1, f8.4)", x, f(x)\n  END DO\nEND PROGRAM function_table\n',m={title:"Procedures"},o=void 0,h={id:"procedures",title:"Procedures",description:"There are two types of procedures in Fortran: subroutines and functions. All",source:"@site/docs/procedures.mdx",sourceDirName:".",slug:"/procedures",permalink:"/fortran/procedures",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/procedures.mdx",tags:[],version:"current",frontMatter:{title:"Procedures"},sidebar:"docs",previous:{title:"Modules",permalink:"/fortran/modules"},next:{title:"Complex number",permalink:"/fortran/complex"}},p={},x=[{value:"Subroutine",id:"subroutine",level:2},{value:"Function",id:"function",level:2},{value:"Pure procedures and side effects",id:"pure-procedures-and-side-effects",level:2},{value:"Interface blocks",id:"interface-blocks",level:2}];function u(e){const s={annotation:"annotation",code:"code",h2:"h2",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["There are two types of procedures in Fortran: subroutines and functions. All\nprocedures should be placed in a module or after the ",(0,a.jsx)(s.code,{children:"contains"})," keyword in a\nmain program."]}),"\n",(0,a.jsx)(s.h2,{id:"subroutine",children:"Subroutine"}),"\n",(0,a.jsx)(s.p,{children:"First we write the subroutines in a module:"}),"\n","\n",(0,a.jsx)(t.Z,{language:"fortran",title:"src/12_add_module.f90",showLineNumbers:!0,children:l}),"\n",(0,a.jsx)(s.p,{children:"Now write our program:"}),"\n","\n",(0,a.jsx)(t.Z,{language:"fortran",title:"src/12_add.f90",showLineNumbers:!0,children:i}),"\n",(0,a.jsx)(s.p,{children:"Compile and execute:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"gfortran -c 12_add_module.f90\ngfortran 12_add.f90 12_add_module.o\n./a.out\n"})}),"\n",(0,a.jsx)(s.h2,{id:"function",children:"Function"}),"\n",(0,a.jsxs)(s.p,{children:["We want to print a table of ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"x"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," vs ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," where:"]}),"\n",(0,a.jsx)(s.span,{className:"katex-display",children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsxs)(s.msup,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{fence:"true",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsxs)(s.mfrac,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mi,{children:"x"})]}),(0,a.jsx)(s.mo,{fence:"true",children:")"})]}),(0,a.jsx)(s.mi,{children:"x"})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x) = \\left(1 + \\frac{1}{x}\\right)^x"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"2.4543em",verticalAlign:"-0.95em"}}),(0,a.jsxs)(s.span,{className:"minner",children:[(0,a.jsxs)(s.span,{className:"minner",children:[(0,a.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,a.jsx)(s.span,{className:"delimsizing size3",children:"("})}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(s.span,{className:"mfrac",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsxs)(s.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,a.jsxs)(s.span,{style:{top:"-2.314em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"})})]}),(0,a.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(s.span,{style:{top:"-3.677em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsx)(s.span,{className:"mord",children:"1"})})]})]}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.686em"},children:(0,a.jsx)(s.span,{})})})]})}),(0,a.jsx)(s.span,{className:"mclose nulldelimiter"})]}),(0,a.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,a.jsx)(s.span,{className:"delimsizing size3",children:")"})})]}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"1.5043em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.9029em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})})]})})})})})]})]})]})]})}),"\n","\n",(0,a.jsx)(t.Z,{language:"fortran",title:"src/13_function_module.f90",showLineNumbers:!0,children:c}),"\n","\n","\n",(0,a.jsx)(t.Z,{language:"fortran",title:"src/13_function_table.f90",showLineNumbers:!0,children:d}),"\n",(0,a.jsx)(s.p,{children:"Sample output:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-fortran",children:"     1.0  2.0000\n    10.0  2.5937\n   100.0  2.7048\n  1000.0  2.7171\n 10000.0  2.7186\n100000.0  2.7220\n"})}),"\n",(0,a.jsx)(s.p,{children:"In contrast to subroutines, functions must provide a return value."}),"\n",(0,a.jsx)(s.h2,{id:"pure-procedures-and-side-effects",children:"Pure procedures and side effects"}),"\n",(0,a.jsxs)(s.p,{children:["Side effects are the change in status of a program when a procedure is executed\nother than computing a value to return, such as changing a variable declared in\nthe program or module above the ",(0,a.jsx)(s.code,{children:"contains"})," statement."]}),"\n",(0,a.jsxs)(s.p,{children:["One can indicate whether a function or subroutine is pure or has side effects by\nusing the keywords ",(0,a.jsx)(s.code,{children:"pure"})," and ",(0,a.jsx)(s.code,{children:"impure"}),", respectively."]}),"\n",(0,a.jsx)(s.h2,{id:"interface-blocks",children:"Interface blocks"}),"\n",(0,a.jsx)(s.p,{children:"Interface block is used to provide necessary information to the calling program\nwhether the call is correct. It basically consists of the procedure without the\nexecutable code, and declaration of local variables."})]})}function j(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);