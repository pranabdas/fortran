! Program : Calculate square root

PROGRAM sq_root
  IMPLICIT NONE

  REAL :: input, output

  PRINT *, "Input = "
  READ *, input

  IF (input > 0) THEN
    output = SQRT(input)
    PRINT *, "Square root of ", input, "= ", output
  ELSE
    PRINT *, "Input must be positive real."
  ENDIF

END PROGRAM sq_root
