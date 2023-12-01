"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[210],{3131:(n,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>g,toc:()=>d});var e=r(5893),t=r(1151),s=r(9286);const m='PROGRAM MAIN\n    IMPLICIT NONE\n    INTEGER no_of_commands, i\n    CHARACTER(LEN=32) :: arg\n    REAL :: sum = 0.0, tmp\n\n    no_of_commands = command_argument_count()\n\n    PRINT *, "Number of arguments = ", no_of_commands\n\n    IF (no_of_commands < 2) THEN\n        PRINT "(a,/,a)", "This program needs at least 2 arguments.", &\n                 "Usage: program 4 3"\n        STOP\n    END IF\n\n    DO i = 1, no_of_commands\n        CALL get_command_argument(i, arg)\n        ! if single argument is expected, use get_command(arg)\n        ! IF (LEN_TRIM(arg) == 0) EXIT ! not required here\n\n        arg = TRIM(arg)\n        READ(arg,*) tmp ! read strings as real\n\n        sum = sum + tmp\n    END DO\n\n    PRINT *, "Total = ", sum\nEND\n',o={title:"Parsing command-line arguments",sidebar_label:"Argument parsing"},i=void 0,g={id:"arg-parsing",title:"Parsing command-line arguments",description:"We will use commandargumentcount and getcommandargument to parse command",source:"@site/docs/arg-parsing.mdx",sourceDirName:".",slug:"/arg-parsing",permalink:"/fortran/arg-parsing",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/arg-parsing.mdx",tags:[],version:"current",frontMatter:{title:"Parsing command-line arguments",sidebar_label:"Argument parsing"},sidebar:"docs",previous:{title:"Time",permalink:"/fortran/time"},next:{title:"External command",permalink:"/fortran/exec-command"}},c={},d=[];function u(n){const a={code:"code",p:"p",...(0,t.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(a.p,{children:["We will use ",(0,e.jsx)(a.code,{children:"command_argument_count"})," and ",(0,e.jsx)(a.code,{children:"get_command_argument"})," to parse command\nline arguments:"]}),"\n","\n","\n",(0,e.jsx)(s.Z,{language:"fortran",title:"src/26_arg_parsing.f90",showLineNumbers:!0,children:m})]})}function l(n={}){const{wrapper:a}={...(0,t.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(u,{...n})}):u(n)}}}]);