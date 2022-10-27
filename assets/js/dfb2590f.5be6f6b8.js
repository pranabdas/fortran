"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[318],{9890:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(814);const i={title:"Basics"},p=void 0,o={unversionedId:"basics",id:"basics",title:"Basics",description:"We will learn by doing. Let us start by writing a simple program that asks for",source:"@site/docs/basics.mdx",sourceDirName:".",slug:"/basics",permalink:"/fortran/basics",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/basics.mdx",tags:[],version:"current",frontMatter:{title:"Basics"},sidebar:"docs",previous:{title:"Setup",permalink:"/fortran/"},next:{title:"Array and Matrix",permalink:"/fortran/array"}},s={},m=[{value:"Names",id:"names",level:3},{value:"Types",id:"types",level:3},{value:"Variables",id:"variables",level:3},{value:"Constants",id:"constants",level:3},{value:"KIND type parameter",id:"kind-type-parameter",level:3},{value:"Implicit typing",id:"implicit-typing",level:3},{value:"Intrinsic functions",id:"intrinsic-functions",level:3},{value:"Mathematical functions",id:"mathematical-functions",level:3},{value:"Reading multiple inputs",id:"reading-multiple-inputs",level:3},{value:"Formatting output",id:"formatting-output",level:3}],u={toc:m};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will learn by doing. Let us start by writing a simple program that asks for\nsome user input, performs some arithmetic operations, and returns a result."),(0,r.kt)(l.Z,{language:"fortran",title:"src/01_add.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'! Program : Add two integer numbers\n\nPROGRAM add\n  IMPLICIT NONE\n\n  INTEGER :: a, b, output\n\n  PRINT *, "Input a ="\n  READ *, a\n\n  PRINT *, "Input b ="\n  READ *, b\n\n  output = a + b\n  PRINT*, "Output: ", a, "+", b, "=", output\nEND PROGRAM add\n'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variable names and keywords in FORTRAN are not case sensitive. You can write\nkeywords in both lowercase or uppercase. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"implicit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPLICIT"),"\nare the same. Older, f77 specification only allowed uppercase letters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PROGRAM name and file name are not related.")))),(0,r.kt)("p",null,"We store the above code in a file named: ",(0,r.kt)("inlineCode",{parentName:"p"},"01_add.f90"),". We compile and execute\nthe code as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gfortran 01_add.f90\n./a.out\n")),(0,r.kt)("p",null,"Now let's write another simple program that converts centimeter to inches:"),(0,r.kt)(l.Z,{language:"fortran",title:"src/02_cm2inch.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'! Program : Converting centimeter to inches\n\nPROGRAM cm2inch\n  IMPLICIT NONE\n\n  REAL :: cm, inch\n  PRINT "(a,$)", "Enter length in centimeter = "\n  READ *, cm\n\n  inch = cm / 2.54\n  PRINT *, "Length in inches = ", inch\nEND PROGRAM cm2inch\n'),(0,r.kt)("p",null,"Calculate the circumference of a circle given the diameter:"),(0,r.kt)(l.Z,{language:"fortran",title:"src/03_circ.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'! Program : Calculate the circumference of a circle given the radius.\n\nPROGRAM circ\n  IMPLICIT NONE\n\n  REAL :: r, circum\n  REAL, PARAMETER :: pi = 3.14159\n\n  WRITE(*, "(a)", advance=\'NO\') "Enter radius of the circle: "\n  READ *, r\n\n  circum = 2 * pi * r\n  PRINT *, "Circumference of the circle = ", circum\nEND PROGRAM circ\n'),(0,r.kt)("p",null,"Formatting output:"),(0,r.kt)(l.Z,{language:"fortran",title:"src/04_format.f90",showLineNumbers:!0,mdxType:"CodeBlock"},"! Program : Formatting output in Fortran\n\nPROGRAM format\n  IMPLICIT NONE\n\n  INTEGER :: no_of_students = 25\n  REAL :: result1, result2\n\n  result1 = SIN(1.23)\n  result2 = 1.234728 * EXP(12.0)\n\n  PRINT '(i4)', no_of_students    ! Interger with 4 spaces for it\n  PRINT '(f6.4)', result1         ! Real number with 6 spaces of\n                                  ! which 4 for the decimal part\n  PRINT '(e8.2)', result2         ! exponential with 2 spaces for\n                                  ! decimal part\nEND PROGRAM format\n"),(0,r.kt)("p",null,"Example outputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fortran"},'WRITE(*, "(I4)") 1234\n1234\n\nWRITE(*, "(I8)") 1234\n    1234\n\nWRITE(*, "(I8.6)") 1234\n  001234\n\nWRITE(*, "(F8.4)") pi\n  3.1416\n\nWRITE(*, "(E12.4)") pi\n  0.3142E+01\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A comment starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),". The continuation of a single statement to the next\nline is done by ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," at the end of previous line. If you need to break a very\nlong character string, use the concatenation operator ",(0,r.kt)("inlineCode",{parentName:"p"},"//"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-fortran"},'PRINT *, "My name is " // &\n  "Pranab."\n')),(0,r.kt)("p",{parentName:"admonition"},"A single statement can be at max 256 lines long. Also, you can separate multiple\nstatements in a line with semicolon (",(0,r.kt)("inlineCode",{parentName:"p"},";"),").")),(0,r.kt)("h3",{id:"names"},"Names"),(0,r.kt)("p",null,"The names must not be longer than 63 characters, must be composed of\nalphanumeric characters and underscores, first character must be a letter. Names\nare case insensitive."),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integer (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"-2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),")"),(0,r.kt)("li",{parentName:"ul"},"Real (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"3.14"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1.2E2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"2.3D-2"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"D")," indicates double precision.)"),(0,r.kt)("li",{parentName:"ul"},"Complex (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"2.0 - 1.5i"),")"),(0,r.kt)("li",{parentName:"ul"},"Logical (",(0,r.kt)("inlineCode",{parentName:"li"},".true."),", ",(0,r.kt)("inlineCode",{parentName:"li"},".false."),")"),(0,r.kt)("li",{parentName:"ul"},"Character: The length of a string can be specified by ",(0,r.kt)("inlineCode",{parentName:"li"},"len"),".")),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fortran"},"integer :: no_of_students\nreal :: radius, circumference\ncomplex :: cx\nlogical :: done\ncharacter(len=20) :: name\n")),(0,r.kt)("h3",{id:"constants"},"Constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fortran"},"real, parameter :: pi = 3.14159\n")),(0,r.kt)("h3",{id:"kind-type-parameter"},"KIND type parameter"),(0,r.kt)("p",null,"The KIND type parameters supported by GNU Fortran for the primitive data types\nare:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"INTEGER:")," 1, 2, 4, 8",(0,r.kt)("sup",null,"\u2020"),", 16",(0,r.kt)("sup",null,"\u2020")," (default 4",(0,r.kt)("sup",null,"\u2021"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LOGICAL:")," 1, 2, 4, 8",(0,r.kt)("sup",null,"\u2020"),", 16",(0,r.kt)("sup",null,"\u2020")," (default 4",(0,r.kt)("sup",null,"\u2021"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"REAL:")," 4, 8, 10",(0,r.kt)("sup",null,"\u2020"),", 16",(0,r.kt)("sup",null,"\u2020")," (default 4",(0,r.kt)("sup",null,"\xa7"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"COMPLEX:")," 4, 8, 10",(0,r.kt)("sup",null,"\u2020"),", 16",(0,r.kt)("sup",null,"\u2020")," (default 4",(0,r.kt)("sup",null,"\xa7"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DOUBLE PRECISION:")," 4, 8, 10",(0,r.kt)("sup",null,"\u2020"),", 16",(0,r.kt)("sup",null,"\u2020")," (default\n8",(0,r.kt)("sup",null,"\xa7"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CHARACTER:")," 1, 4 (default 1)"),(0,r.kt)("p",null,"\u2020 not available on all systems ",(0,r.kt)("br",null),"\n\u2021 unless ",(0,r.kt)("inlineCode",{parentName:"p"},"-fdefault-integer-8")," is used ",(0,r.kt)("br",null),"\n\xa7 unless ",(0,r.kt)("inlineCode",{parentName:"p"},"-fdefault-real-8")," is used ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"KIND")," value matches the storage size in bytes, except for ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPLEX")," where\nthe storage size is twice as much (or both real and imaginary part are a real\nvalue of the given size). It is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECTED_CHAR_KIND"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"SELECTED_INT_KIND")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECTED_REAL_KIND")," intrinsics or the ",(0,r.kt)("inlineCode",{parentName:"p"},"INT8"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INT16"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"INT32"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INT64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REAL32"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REAL64"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"REAL128")," parameters."),(0,r.kt)("p",null,"Examples of setting double precision:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fortran"},"REAL(KIND=KIND(0.0D0)), PARAMETER :: pi =  4 * ATAN(1.0D0)\n\n! or specify decimal precision and exponent range\nREAL(KIND=SELECTED_REAL_KIND(12, 200)), PARAMETER :: pi =  4 * ATAN(1.0D0)\nPRINT *, PRECISION(pi), RANGE(pi)\n\n! type conversion\nREAL(KIND=KIND(0.0D0)) :: x\nINTEGER :: y\ny = 1\nx = REAL(y, KIND=KIND(0.0D0))\n\n! integer with range -10^(12) to 10^(12)\nINTEGER(KIND=SELECTED_INT_KIND(12)) :: large_int\n")),(0,r.kt)("h3",{id:"implicit-typing"},"Implicit typing"),(0,r.kt)("p",null,"In Fortran variables need not to be declared beforehand, but this practice\nshould be avoided by ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPLICIT NONE")," at the top of program. If a variable is not\ndeclared, the first letter of its name determines its type. If the name starts\nwith i, j, k, l, m, n, it is considered integer, otherwise real."),(0,r.kt)("h3",{id:"intrinsic-functions"},"Intrinsic functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Functions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abs(x)"),(0,r.kt)("td",{parentName:"tr",align:null},"absolute value of a numerical argument")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complx(x, y)"),(0,r.kt)("td",{parentName:"tr",align:null},"converts to complex")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"floor(x)"),(0,r.kt)("td",{parentName:"tr",align:null},"greatest integer \u2264 x ",(0,r.kt)("inlineCode",{parentName:"td"},"floor(3.2)=3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"floor(-4.9)=-5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int(x)"),(0,r.kt)("td",{parentName:"tr",align:null},"converts to integer. ",(0,r.kt)("inlineCode",{parentName:"td"},"int(-4.9)=-4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int(0.2)=0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int(3.3)=3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nint(x ","[, ikind]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"rounds to nearest integer. Optional ",(0,r.kt)("inlineCode",{parentName:"td"},"ikind")," for precision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"real(x ","[, ikind]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"converts to real")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mod(a, p)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a - int(a/p)*p"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modulo(a,p)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a - floor(a/p)*p"))))),(0,r.kt)("h3",{id:"mathematical-functions"},"Mathematical functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Functions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sin"),(0,r.kt)("td",{parentName:"tr",align:null},"sine function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asin"),(0,r.kt)("td",{parentName:"tr",align:null},"inverse sine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinh"),(0,r.kt)("td",{parentName:"tr",align:null},"sine hyperbolic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cos"),(0,r.kt)("td",{parentName:"tr",align:null},"cosine function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acos"),(0,r.kt)("td",{parentName:"tr",align:null},"inverse cosine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosh"),(0,r.kt)("td",{parentName:"tr",align:null},"cos hyperbolic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tan"),(0,r.kt)("td",{parentName:"tr",align:null},"tangent function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atan"),(0,r.kt)("td",{parentName:"tr",align:null},"inverse tan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atan2"),(0,r.kt)("td",{parentName:"tr",align:null},"inverse tangent for complex numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tanh"),(0,r.kt)("td",{parentName:"tr",align:null},"tan hyperbolic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sqrt"),(0,r.kt)("td",{parentName:"tr",align:null},"square root")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exp"),(0,r.kt)("td",{parentName:"tr",align:null},"exponential")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log"),(0,r.kt)("td",{parentName:"tr",align:null},"natural logarithm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log10"),(0,r.kt)("td",{parentName:"tr",align:null},"common logarithm")))),(0,r.kt)("h3",{id:"reading-multiple-inputs"},"Reading multiple inputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fortran"},"INTEGER :: M, N\n\nPRINT '(A,$)', \"Enter matrix dimensions: \"\n! inputs must be separated by at least one blank character or comma \nREAD *, M, N\n")),(0,r.kt)("h3",{id:"formatting-output"},"Formatting output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fortran"},'PRINT "(f5.1, es9.1, a, i4)", 3.5, 1.4e4, " and ", 12\nPRINT "(2(i4))", 12, 8 ! same as "(i4, i4)" or "(2i4)"\n\n! line breaks\nPRINT "(a, /, a)", "first line", "second line" ! two line breaks: 2/\n\n! tab editor, second number will be printed in the position 10-13\nPRINT "(i4, t10, i4)", 3, 5\n')))}d.isMDXComponent=!0}}]);