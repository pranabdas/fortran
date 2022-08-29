! Compile the subroutine:
! gfortran -c 15_hypotenuse_subroutine.f90
SUBROUTINE calculate_hypotenuse(side_a, side_b, hypotenuse)
   IMPLICIT NONE

   ! declare the intent of dummy variables
   REAL, INTENT(IN) :: side_a
   REAL, INTENT(IN) :: side_b
   REAL, INTENT(OUT) :: hypotenuse

   REAL :: temp

   temp = side_a * side_a + side_b * side_b
   hypotenuse = SQRT(temp)
END SUBROUTINE calculate_hypotenuse
