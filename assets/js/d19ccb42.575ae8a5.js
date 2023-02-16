"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[511],{7164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905)),s=t(814);const i='PROGRAM MAIN\n    IMPLICIT NONE\n\n    TYPE user ! if defined in external MODULE, use PUBLIC: TYPE, PUBLIC :: user\n        INTEGER id ! parameters can be initialized\n        CHARACTER(LEN=64) name\n        REAL age\n    END TYPE\n\n    ! extending type\n    TYPE, EXTENDS(user) :: user_extended\n        real :: salary\n    END TYPE user_extended\n\n    TYPE(user) new_user\n    ! declare an array of user\n    TYPE(user) user_catalog(10)\n    TYPE(user_extended) user_with_salary\n\n    new_user%id = 1;\n    new_user%name = "Albert Einstein"\n    new_user%age = 76.0\n    ! alternatively, new_user = user(1, "Albert Einstein", 76.0)\n\n    user_catalog(1) = new_user\n\n    PRINT *, "User ID: ", user_catalog(1)%id\n    PRINT *, "User name: ", user_catalog(1)%name\n    PRINT *, "Age: ", user_catalog(1)%age\n\n    user_with_salary = user_extended(1, "Albert Einstein", 76.0, 50000.0)\n    PRINT *, "Salary: ", user_with_salary%salary\n\nEND\n',a='PROGRAM MAIN\n    IMPLICIT NONE\n\n    ! define a base line type\n    TYPE :: line_type\n        REAL :: x_start, x_end, y_start, y_end\n    END TYPE line_type\n\n    ! extend the base line type\n    TYPE, EXTENDS(line_type) :: colored_line_type\n        INTEGER :: r, g, b ! each ranges 0-255\n    END TYPE colored_line_type\n\n    TYPE, EXTENDS(colored_line_type) :: vector_line_type\n        LOGICAL :: direction ! T if direction is start to end, F if reverse\n    END TYPE vector_line_type\n\n    ! CLASS keyword instead of TYPE\n    ! polymorphic objects are dynamic, must be declared with ALLOCATABLE or POINTER\n    CLASS(line_type), ALLOCATABLE :: colored_line, vector_line\n\n    ! notice that line has CLASS line_type, but still can be assigned colored_line_type\n    colored_line = colored_line_type(0.0, 1.0, 0.0, 1.0, 0, 0, 255)\n    \n    ! alternative way to assign\n    ! ALLOCATE(vector_line_type::vector_line)\n    ALLOCATE(vector_line, source=vector_line_type(0.0, 1.0, 0.0, 1.0, 0, 0, 255, .TRUE.))\n\n    ! accessing elements is bit tricky\n    SELECT TYPE(colored_line)\n        TYPE IS(line_type)\n            PRINT *, "X_start: ", colored_line%x_start\n        TYPE IS(colored_line_type)\n            PRINT *, "Color: ", colored_line%r, colored_line%g, colored_line%b\n        TYPE IS(vector_line_type)\n            PRINT *, "Is forward directed? ", colored_line%direction\n        CLASS DEFAULT\n            PRINT *, "Error: not sure what type it is."\n    END SELECT\n\n    ! re-allocate the same variable\n    ! DEALLOCATE(colored_line)\n    ! ALLOCATE(colored_line, source=vector_line_type(0.0, 1.0, 0.0, 1.0, 0, 0, 255, .TRUE.))\n\nEND\n',l={title:"Custom types"},d=void 0,c={unversionedId:"types",id:"types",title:"Custom types",description:"Custom data types",source:"@site/docs/types.mdx",sourceDirName:".",slug:"/types",permalink:"/fortran/types",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/types.mdx",tags:[],version:"current",frontMatter:{title:"Custom types"},sidebar:"docs",previous:{title:"Recursion",permalink:"/fortran/recursion"},next:{title:"Pointer",permalink:"/fortran/pointer"}},_={},p=[{value:"Custom data types",id:"custom-data-types",level:2},{value:"Polymorphism",id:"polymorphism",level:2}],u={toc:p},E="wrapper";function y(e){let{components:n,...t}=e;return(0,o.kt)(E,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"custom-data-types"},"Custom data types"),(0,o.kt)(s.Z,{language:"fortran",title:"src/23_custom_type.f90",showLineNumbers:!0,mdxType:"CodeBlock"},i),(0,o.kt)("h2",{id:"polymorphism"},"Polymorphism"),(0,o.kt)("p",null,"Example of polymorphic object:"),(0,o.kt)(s.Z,{language:"fortran",title:"src/23_polymorphism.f90",showLineNumbers:!0,mdxType:"CodeBlock"},a))}y.isMDXComponent=!0}}]);