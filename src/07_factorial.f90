! Program : Find factorial

PROGRAM factorial
  IMPLICIT NONE

  INTEGER :: input, ii, output = 1

  PRINT *, "Input = "
  READ *, input

  DO ii = 1, input
    output = output * ii
  ENDDO

  PRINT *, input, "! = ", output
END PROGRAM factorial
