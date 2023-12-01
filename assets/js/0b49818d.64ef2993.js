"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[529],{8985:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>R,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(5893),r=t(1151),i=t(9286);const o='! calculate the distance between two points on earch/sphere given latitude\n! and longitude\n! haversine is defined as: hav(theta) = sin^2(theta/2) = (1 - cos(theta))/2\n! test: BNA(36.12,-86.67), LAX(33.94,-118.40), Distance 2889.6612 km\nPROGRAM haversine_formula\n    IMPLICIT NONE\n    INTEGER, PARAMETER :: DP = KIND(1.0D0)\n    REAL(DP), PARAMETER :: RADIUS_OF_EARTH = 6.3781D6\n\n    REAL(DP) :: lat1 = 0.0_DP\n    REAL(DP) :: lon1 = 0.0_DP\n    REAL(DP) :: lat2 = 0.0_DP\n    REAL(DP) :: lon2 = 0.0_DP\n    REAL(DP) :: a, dist\n\n    PRINT "(a,$)", "Latitude of point A = "\n    READ *, lat1\n    PRINT "(a,$)", "Longitude of point A = "\n    READ *, lon1\n    PRINT "(a,$)", "Latitude of point B = "\n    READ *, lat2\n    PRINT "(a,$)", "Longitude of point B = "\n    READ *, lon2\n\n    lat1 = deg2rad(lat1)\n    lon1 = deg2rad(lon1)\n    lat2 = deg2rad(lat2)\n    lon2 = deg2rad(lon2)\n\n    a = (SIN((lat1 - lat2)/2))**2 + COS(lat1) * COS(lat2) * &\n        (SIN((lon1 - lon2)/2))**2\n\n    dist = 2 * RADIUS_OF_EARTH * ASIN(SQRT(a))\n\n    PRINT \'(A,F12.4,A)\', \'Distance: \', dist / 1000,\' km\'\n\nCONTAINS\n    FUNCTION deg2rad(degree) RESULT(rad)\n        ! degrees to radians\n        REAL(KIND=KIND(0.0D0)), INTENT(IN) :: degree\n        REAL(KIND=KIND(0.0D0)), PARAMETER :: deg_to_rad = ATAN(1.0) / 45\n        REAL(KIND=KIND(0.0D0)) :: rad\n\n        rad = degree * deg_to_rad\n    END FUNCTION deg2rad\n\nEND PROGRAM haversine_formula\n',s={title:"Haversine formula"},d=void 0,l={id:"haversine",title:"Haversine formula",description:"Determine the distance between two places on earth given latitude and longitude.",source:"@site/docs/haversine.mdx",sourceDirName:".",slug:"/haversine",permalink:"/fortran/haversine",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/haversine.mdx",tags:[],version:"current",frontMatter:{title:"Haversine formula"},sidebar:"docs",previous:{title:"Numerical integration",permalink:"/fortran/integration"},next:{title:"Inner product",permalink:"/fortran/inner-product"}},u={},c=[];function D(n){const e={a:"a",p:"p",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Determine the distance between two places on earth given latitude and longitude.\nRead more about ",(0,a.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Haversine_formula",children:"haversine formula"})," in wikipedia page."]}),"\n","\n","\n",(0,a.jsx)(i.Z,{language:"fortran",title:"src/18_haversine_formula.f90",showLineNumbers:!0,children:o})]})}function R(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(D,{...n})}):D(n)}}}]);