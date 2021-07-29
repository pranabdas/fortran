! Caculate the area of sine curve using trapezoidal method

PROGRAM trapezoid
  IMPLICIT none

  INTRINSIC :: sin
  REAL :: a, b, h, area
  INTEGER :: i, n

  n = 100
  a = 0
  b = 3.14

  h = (b - a) / n

  area = 0.5 * (sin(a) + sin(b))

  DO i = 1, n-1
    area = area + sin(a + i*h)
  END DO

  area = h * area

  PRINT *, "Area = ", area

END PROGRAM trapezoid
