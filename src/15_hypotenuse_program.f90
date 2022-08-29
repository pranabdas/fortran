! subroutine without module
! gfortran -c 15_hypotenuse_subroutine.f90
! gfortran 15_hypotenuse_program.f90 15_hypotenuse_subroutine.o
PROGRAM hypotenuse
   IMPLICIT NONE
   REAL :: s1, s2, output

   WRITE (*, *) 'Program to calculate hypotenuse of a right triangle'
   WRITE (*, *) 'Enter length of side 1:'
   READ (*, *) s1
   WRITE (*, *) 'Enter length of side 2:'
   READ (*, *) s2

   CALL calculate_hypotenuse(s1, s2, output)

   WRITE (*, 99) output
99 FORMAT('Hypotenuse = ', F10.4)
END PROGRAM hypotenuse
