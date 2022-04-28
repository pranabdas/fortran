"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[826],{7799:function(t,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return _}});var e=a(7462),r=a(3366),p=(a(7294),a(3905)),i=a(5710),o=["components"],s={title:"Function: Get absolute path",sidebar_label:"Absolute path"},u=void 0,h={unversionedId:"abs-path",id:"abs-path",title:"Function: Get absolute path",description:"Here is a function to convert filenames to their absolute path:",source:"@site/docs/abs-path.mdx",sourceDirName:".",slug:"/abs-path",permalink:"/fortran/abs-path",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/abs-path.mdx",tags:[],version:"current",frontMatter:{title:"Function: Get absolute path",sidebar_label:"Absolute path"},sidebar:"docs",previous:{title:"Coding practice",permalink:"/fortran/category/coding-practice"},next:{title:"Numerical integration",permalink:"/fortran/integration"}},c={},_=[],b={toc:_};function l(t){var n=t.components,a=(0,r.Z)(t,o);return(0,p.kt)("wrapper",(0,e.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Here is a function to convert filenames to their absolute path:"),(0,p.kt)(i.Z,{language:"fortran",title:"src/15_get_abs_path.f90",showLineNumbers:!0,mdxType:"CodeBlock"},"PROGRAM print_abs_path\n  IMPLICIT NONE\n\n  CHARACTER(LEN=128) :: input_path, abs_path, get_abs_path\n\n  PRINT \"(a,$)\", 'Enter file name: '\n  READ (*,\"(a128)\") input_path\n\n  abs_path = get_abs_path(input_path)\n  PRINT *, 'Absolute PATH: ', abs_path\nEND PROGRAM print_abs_path\n\nCHARACTER(LEN=128) FUNCTION get_abs_path(input_path)\n  IMPLICIT NONE\n\n  CHARACTER(LEN=128), INTENT(IN) :: input_path\n  CHARACTER(LEN=128) :: PREFIX\n\n  IF (input_path(1:1) == '/' ) THEN\n    get_abs_path = input_path\n\n  ELSE IF (input_path(1:2) == '~/' ) THEN\n    CALL GETENV('HOME', PREFIX)\n    get_abs_path = PREFIX(:LNBLNK(PREFIX)) // input_path(2:LNBLNK(input_path))\n\n  ELSE\n    CALL GETCWD(PREFIX)\n    get_abs_path = PREFIX(:LNBLNK(PREFIX)) // '/' // input_path(:LNBLNK(input_path))\n  ENDIF\n\n  RETURN\nEND FUNCTION get_abs_path\n"))}l.isMDXComponent=!0}}]);