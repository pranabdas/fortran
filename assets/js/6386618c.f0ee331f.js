"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([["649"],{2964:function(e,n,r){r.r(n),r.d(n,{default:()=>_,frontMatter:()=>l,metadata:()=>t,assets:()=>s,toc:()=>m,contentTitle:()=>c});var t=JSON.parse('{"id":"monte-carlo-integration","title":"Area under the curve by Monte Carlo method","description":"","source":"@site/docs/monte-carlo-integration.mdx","sourceDirName":".","slug":"/monte-carlo-integration","permalink":"/fortran/monte-carlo-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/fortran/blob/main/docs/monte-carlo-integration.mdx","tags":[],"version":"current","frontMatter":{"title":"Area under the curve by Monte Carlo method","sidebar_label":"Monte Carlo integration"},"sidebar":"docs","previous":{"title":"Monte Carlo method","permalink":"/fortran/monte-carlo-pi"},"next":{"title":"Time","permalink":"/fortran/time"}}'),a=r("5893"),o=r("65"),i=r("5056");let l={title:"Area under the curve by Monte Carlo method",sidebar_label:"Monte Carlo integration"},c=void 0,s={},m=[];function u(e){return(0,a.jsx)(i.Z,{language:"fortran",title:"src/20_monte_carlo_integration.f90",showLineNumbers:!0,children:'! Monte carlo method of integration\n! calculate area under the curve y = x^2 within x limits [1, 3]\nPROGRAM area_under_curve\n    IMPLICIT NONE\n\n    INTEGER, PARAMETER :: iteration = 1000000\n    REAL :: x_lo = 1.0\n    REAL :: x_hi = 3.0\n    REAL :: x, y, y_lo = 0.0, y_hi, area, area_rect\n    INTEGER :: i, monte_area = 0\n\n    y_hi = x_hi ** 2\n\n    area_rect = y_hi * (x_hi - x_lo)\n\n    DO i = 1, iteration\n        CALL random_number(x)\n        CALL random_number(y)\n\n        x = x_lo + x * (x_hi - x_lo);\n        y = y * (y_hi - y_lo);\n\n        IF (y < x ** 2) THEN\n            monte_area = monte_area + 1;\n        END IF\n    END DO\n\n    area = area_rect * monte_area / iteration\n\n    PRINT *, "Area = ", area\n    PRINT *, "Analytical result = ", (27.0 - 1) / 3\n\nEND PROGRAM area_under_curve\n'})}function _(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);