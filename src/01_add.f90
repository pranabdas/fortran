! Program : Add two integer numbers

PROGRAM add
  IMPLICIT NONE

  INTEGER :: a, b, output

  PRINT *, "Input a ="
  READ *, a

  PRINT *, "Input b ="
  READ *, b

  output = a + b
  PRINT*, "Output: ", a, "+", b, "=", output
END PROGRAM add
