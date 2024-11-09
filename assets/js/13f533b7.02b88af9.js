"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([["47"],{9996:function(n,r,t){t.r(r),t.d(r,{metadata:()=>e,contentTitle:()=>c,default:()=>p,assets:()=>s,toc:()=>d,frontMatter:()=>l});var e=JSON.parse('{"id":"inner-product","title":"Inner product: dynamic array allocation","description":"Example of dynamic array allocation:","source":"@site/docs/inner-product.mdx","sourceDirName":".","slug":"/inner-product","permalink":"/fortran/inner-product","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/fortran/blob/main/docs/inner-product.mdx","tags":[],"version":"current","frontMatter":{"title":"Inner product: dynamic array allocation","sidebar_label":"Inner product"},"sidebar":"docs","previous":{"title":"Haversine formula","permalink":"/fortran/haversine"},"next":{"title":"Monte Carlo method","permalink":"/fortran/monte-carlo-pi"}}'),a=t("5893"),o=t("65"),i=t("5056");let l={title:"Inner product: dynamic array allocation",sidebar_label:"Inner product"},c=void 0,s={},d=[];function u(n){let r={p:"p",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Example of dynamic array allocation:"}),"\n","\n",(0,a.jsx)(i.Z,{language:"fortran",title:"src/19_inner_product.f90",showLineNumbers:!0,children:"PROGRAM inner_product\n    IMPLICIT NONE\n\n    INTEGER length\n    REAL, DIMENSION(:), ALLOCATABLE :: a\n    REAL, DIMENSION(:), ALLOCATABLE :: b\n    INTEGER i\n    REAL :: sum = 0.0\n\n    PRINT \"(a,$)\", \"Enter length of vectors: \"\n    READ *, length\n\n    IF ( length < 1 ) then\n        PRINT *, \"Stopping: length must be positive definite.\"\n        STOP\n    END IF\n\n    ALLOCATE(a(length))\n    ALLOCATE(b(length))\n\n    PRINT *, \"Enter first array components:\"\n    DO i = 1, length\n        PRINT '(A,I4,A,$)', 'a[', i,'] = '\n        READ *, a(i)\n    END DO\n\n    PRINT *, \"Enter second array components:\"\n    DO i = 1, length\n        PRINT '(A,I4,A,$)', 'a[', i,'] = '\n        READ *, b(i)\n    END DO\n\n    DO i = 1, length\n        sum = sum + a(i) * b(i)\n    END DO\n\n    PRINT '(A,F8.4)', 'Inner product = ', sum\n\n    ! we can use in-built dot_product as well\n    PRINT '(A,F8.4)', \"Result using in-built dot_product = \", dot_product(a, b)\n\n    DEALLOCATE(a)\n    DEALLOCATE(b)\nEND PROGRAM inner_product\n"})]})}function p(n={}){let{wrapper:r}={...(0,o.a)(),...n.components};return r?(0,a.jsx)(r,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}}}]);