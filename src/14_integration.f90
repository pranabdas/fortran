PROGRAM integration
  USE integration_module
  IMPLICIT NONE
  INTRINSIC :: sin

  PRINT *, integral(sin, a=0.0, b=3.14159, n=1000)
END PROGRAM integration
