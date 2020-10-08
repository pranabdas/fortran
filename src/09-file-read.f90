!==============================================================================
! Program : Read data from file 
! Author  : Pranab Das (Twitter: @pranab_das)
! Version : 20201008
!==============================================================================
PROGRAM file_read
      IMPLICIT NONE

      INTEGER :: ii, data(10)

      OPEN(unit=1, file='output.dat', status='old')
            DO ii = 1, 10
                  READ(1, '(i4)') data(ii)
            END DO
      CLOSE(unit=1)

      DO ii = 1, 10
            PRINT '(i3)', data(ii)
      END DO
END PROGRAM file_read
