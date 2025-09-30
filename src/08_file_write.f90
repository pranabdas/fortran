! Program : Write output to a file

PROGRAM file_write
  IMPLICIT NONE

  INTEGER :: ii

  OPEN(unit=10, file='output.dat', status='new')
    DO ii = 1, 10
      WRITE(1, '(i4)') ii*ii
    ENDDO
  CLOSE(unit=10)
END PROGRAM file_write
