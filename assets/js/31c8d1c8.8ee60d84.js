"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([["521"],{7045:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>o,default:()=>p,assets:()=>m,toc:()=>c,frontMatter:()=>d});var a=JSON.parse('{"id":"time","title":"Time","description":"Following example uses dateandtime and cup_time to find current date and","source":"@site/docs/time.mdx","sourceDirName":".","slug":"/time","permalink":"/fortran/time","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/fortran/blob/main/docs/time.mdx","tags":[],"version":"current","frontMatter":{"title":"Time"},"sidebar":"docs","previous":{"title":"Monte Carlo integration","permalink":"/fortran/monte-carlo-integration"},"next":{"title":"Argument parsing","permalink":"/fortran/arg-parsing"}}'),i=n("5893"),r=n("65"),s=n("5056");let d={title:"Time"},o=void 0,m={},c=[];function l(e){let t={code:"code",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Following example uses ",(0,i.jsx)(t.code,{children:"date_and_time"})," and ",(0,i.jsx)(t.code,{children:"cup_time"})," to find current date and\ntime, and determine program execution time."]}),"\n","\n",(0,i.jsx)(s.Z,{language:"fortran",title:"src/25_time.f90",showLineNumbers:!0,children:'PROGRAM MAIN\n    IMPLICIT NONE\n    INTEGER, PARAMETER :: n = 10000000\n    CHARACTER(LEN=8) :: date\n    REAL start_time, end_time\n    REAL(KIND=KIND(1.0D0)) :: test = 0.0D0\n    INTEGER i\n\n    CALL date_and_time(date=date)\n    PRINT *, "Timing report dated: ", date(1:4), "-", date(5:6), "-", date(7:8)\n\n    CALL cpu_time(start_time)\n\n    ! savage benchmark\n    DO i = 1, n\n        test = tan(atan(exp(log(sqrt(test * test))))) + 1.0D0;\n    END DO\n\n    CALL cpu_time(end_time)\n\n    PRINT *, "Time taken = ", end_time - start_time, "sec."\n    PRINT *, "Test = ", test\n    PRINT *, "Relative accuracy = ", (test - (n + 1)) / (n + 1)\nEND\n\n! Sample output:\n! Timing report dated: 2022-10-09\n! Time taken =   0.939146996     sec.\n! Test =    9999816.5167837571     \n! Relative accuracy =   -1.8448319779454493E-005\n'})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);