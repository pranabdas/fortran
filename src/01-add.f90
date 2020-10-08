!==============================================================================
! Program : Adding two integer numbers 
! Author  : Pranab Das (Twitter: @pranab_das)
! Version : 20200827
!==============================================================================
PROGRAM add
      IMPLICIT NONE

      INTEGER :: a, b, output
    
      PRINT *, "Input a="
      READ *, a
      PRINT *, "Input b="
      READ *, b
      
      output = a + b

      PRINT *, "Output:", a, "+", b, "=", output
END PROGRAM add
