!==============================================================================
! Program : Array
! Author  : Pranab Das (Twitter: @pranab_das)
! Version : 20201007
!==============================================================================
PROGRAM array
      IMPLICIT NONE

      INTEGER :: vec(10)
      INTEGER :: ii

      OUTER_LOOP : DO ii = 1, 10
            vec(ii) = ii
      ENDDO OUTER_LOOP
      
      DO ii = 1, 10
            PRINT '(i2)', vec(ii)
      ENDDO
END PROGRAM array
