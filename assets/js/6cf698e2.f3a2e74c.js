"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[625],{5354:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return N},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(5710),i=["components"],p={title:"Logical expression and control",sidebar_label:"Logical control"},d=void 0,N={unversionedId:"control",id:"control",title:"Logical expression and control",description:"Operators | Meaning",source:"@site/docs/control.mdx",sourceDirName:".",slug:"/control",permalink:"/fortran/control",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/control.mdx",tags:[],version:"current",frontMatter:{title:"Logical expression and control",sidebar_label:"Logical control"},sidebar:"docs",previous:{title:"Array and Matrix",permalink:"/fortran/array"},next:{title:"Loop",permalink:"/fortran/loop"}},m={},u=[{value:"IF condition",id:"if-condition",level:3},{value:"Multi-way IFs",id:"multi-way-ifs",level:3},{value:"Select case",id:"select-case",level:3}],c={toc:u};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Operators"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".lt."),(0,o.kt)("td",{parentName:"tr",align:"left"},"less than")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".gt."),(0,o.kt)("td",{parentName:"tr",align:"left"},"greater than")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".le."),(0,o.kt)("td",{parentName:"tr",align:"left"},"less than or equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".ge."),(0,o.kt)("td",{parentName:"tr",align:"left"},"greater than or equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".eq."),(0,o.kt)("td",{parentName:"tr",align:"left"},"equals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".ne."),(0,o.kt)("td",{parentName:"tr",align:"left"},"not equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".and."),(0,o.kt)("td",{parentName:"tr",align:"left"},"and")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".or."),(0,o.kt)("td",{parentName:"tr",align:"left"},"or")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".not."),(0,o.kt)("td",{parentName:"tr",align:"left"},"not")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".xor."),(0,o.kt)("td",{parentName:"tr",align:"left"},'"exclusive" or')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".eqv."),(0,o.kt)("td",{parentName:"tr",align:"left"},"equivalent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},".neqv."),(0,o.kt)("td",{parentName:"tr",align:"left"},"not equivalent")))),(0,o.kt)("p",null,"F90 introduced following simplified notation for the relational operators:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Operators"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"<"),(0,o.kt)("td",{parentName:"tr",align:"left"},"less than")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"greater than")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"<="),(0,o.kt)("td",{parentName:"tr",align:"left"},"less than or equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},">="),(0,o.kt)("td",{parentName:"tr",align:"left"},"greater than or equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"=="),(0,o.kt)("td",{parentName:"tr",align:"left"},"equal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"/="),(0,o.kt)("td",{parentName:"tr",align:"left"},"not equal to")))),(0,o.kt)("h3",{id:"if-condition"},"IF condition"),(0,o.kt)("p",null,"Calculate square root of real positive numbers:"),(0,o.kt)(l.Z,{language:"fortran",title:"src/06_sq_root.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'! Program : Calculate square root\n\nPROGRAM sq_root\n  IMPLICIT NONE\n\n  REAL :: input, output\n\n  PRINT *, "Input = "\n  READ *, input\n\n  IF (input > 0) THEN\n    output = SQRT(input)\n    PRINT *, "Square root of ", input, "= ", output\n  ELSE\n    PRINT *, "Input must be positive real."\n  ENDIF\n\nEND PROGRAM sq_root\n'),(0,o.kt)("h3",{id:"multi-way-ifs"},"Multi-way IFs"),(0,o.kt)(l.Z,{language:"fortran",title:"src/06_multi_way_if.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'PROGRAM age_group\n  IMPLICIT NONE\n\n  INTEGER :: age\n  PRINT "(a,$)", "Enter your age: "\n  READ *, age\n\n  IF (age <= 0) THEN\n    PRINT *, "Error: please enter a positive integer age."\n    STOP\n  ELSE IF (age < 18) THEN\n    PRINT *, "You are not adult."\n  ELSE IF (age >= 18 .AND. age < 65) THEN\n    PRINT *, "You are adult."\n  ELSE\n    PRINT *, "You are senior."\n  END IF\nEND PROGRAM age_group\n'),(0,o.kt)("p",null,"Notice also the ",(0,o.kt)("inlineCode",{parentName:"p"},"STOP")," keyword in above example."),(0,o.kt)("h3",{id:"select-case"},"Select case"),(0,o.kt)(l.Z,{language:"fortran",title:"src/06_select_case.f90",showLineNumbers:!0,mdxType:"CodeBlock"},'PROGRAM age_select\n  IMPLICIT NONE\n\n  INTEGER :: age\n  PRINT "(a,$)", "Enter your age: "\n  READ *, age\n\n  SELECT CASE (age)\n  CASE DEFAULT\n    PRINT *, "You are not adult."\n  CASE(18:64)\n    PRINT *, "You are adult."\n  CASE(65:)\n    PRINT *, "You are senior."\n  END SELECT\nEND PROGRAM age_select\n'))}g.isMDXComponent=!0}}]);