!==============================================================================
! Program : Calculate the circumference of a circle given the radius.
! Author  : Pranab Das (Twitter: @pranab_das)
! Version : 20201007
!==============================================================================
PROGRAM circ
    IMPLICIT NONE
    
    REAL :: r, circum
    REAL, PARAMETER :: pi = 3.14159

    WRITE(*, "(a)", advance='NO') "Enter radius of the circle: "
    READ *, r

    circum = 2 * pi * r

    PRINT *, "Circumference of the circle = ", circum
END PROGRAM circ
