!==============================================================================
! Program : Calculate square root
! Author  : Pranab Das (Twitter: @pranab_das)
! Version : 20201007
!==============================================================================
PROGRAM sq_root
      IMPLICIT NONE

      REAL :: input, output

      PRINT *, "Input = "
      READ *, input

      IF (input .GE. 0) THEN
          output = SQRT(input)
          PRINT *, "Square root of ", input, "= ", output
      ELSE
          PRINT *, "Input must be positive real."
      ENDIF
END PROGRAM sq_root
