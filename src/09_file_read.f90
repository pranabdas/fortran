! Program : Read data from file

PROGRAM file_read
  IMPLICIT NONE

  INTEGER :: ii, data(10)

  OPEN(unit=10, file='output.dat', status='old')
    DO ii = 1, 10
      READ(1, '(i4)') data(ii)
    END DO
  CLOSE(unit=10)

  DO ii = 1, 10
    PRINT '(i3)', data(ii)
  END DO
END PROGRAM file_read
