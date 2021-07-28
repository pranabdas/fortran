! Program : Calculate the circumference of a circle given the radius.

PROGRAM circ
  IMPLICIT NONE

  REAL :: r, circum
  REAL, PARAMETER :: pi = 3.14159

  WRITE(*, "(a)", advance='NO') "Enter radius of the circle: "
  READ *, r

  circum = 2 * pi * r
  PRINT *, "Circumference of the circle = ", circum
END PROGRAM circ
