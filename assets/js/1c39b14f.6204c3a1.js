"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[888],{3947:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=i(7462),a=(i(7294),i(3905)),r=i(814);const o={title:"File Input / Output",sidebar_label:"File I/O"},l=void 0,d={unversionedId:"file",id:"file",title:"File Input / Output",description:"Here we will generate some data and write it to a file:",source:"@site/docs/file.mdx",sourceDirName:".",slug:"/file",permalink:"/fortran/file",draft:!1,editUrl:"https://github.com/pranabdas/fortran/blob/main/docs/file.mdx",tags:[],version:"current",frontMatter:{title:"File Input / Output",sidebar_label:"File I/O"},sidebar:"docs",previous:{title:"Data types",permalink:"/fortran/data-types"},next:{title:"Modules",permalink:"/fortran/modules"}},s={},u=[],f={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we will generate some data and write it to a file:"),(0,a.kt)(r.Z,{language:"fortran",title:"src/08_file_write.f90",showLineNumbers:!0,mdxType:"CodeBlock"},"! Program : Write output to a file\n\nPROGRAM file_write\n  IMPLICIT NONE\n\n  INTEGER :: ii\n\n  OPEN(unit=1, file='output.dat', status='new')\n    DO ii = 1, 10\n      WRITE(1, '(i4)') ii*ii\n    ENDDO\n  CLOSE(unit=1)\nEND PROGRAM file_write\n"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"unit=0, 5, and 6")," are reserved. Do not use them to identify files in\nyour programs.")),(0,a.kt)("p",null,"Reading from file: we will read the data from file that is generated in the\nabove example."),(0,a.kt)(r.Z,{language:"fortran",title:"src/09_file_read.f90",showLineNumbers:!0,mdxType:"CodeBlock"},"! Program : Read data from file\n\nPROGRAM file_read\n  IMPLICIT NONE\n\n  INTEGER :: ii, data(10)\n\n  OPEN(unit=1, file='output.dat', status='old')\n    DO ii = 1, 10\n      READ(1, '(i4)') data(ii)\n    END DO\n  CLOSE(unit=1)\n\n  DO ii = 1, 10\n    PRINT '(i3)', data(ii)\n  END DO\nEND PROGRAM file_read\n"))}p.isMDXComponent=!0}}]);