PROGRAM function_table

  USE function_module
  IMPLICIT NONE
  REAL :: x
  INTEGER :: i

  DO i = 0, power
    x = 10**i
    PRINT "(f8.1, f8.4)", x, f(x)
  END DO
END PROGRAM function_table
