### File Input/Output 

Here we will generate some data and write it to a file: 
```
PROGRAM file_write
      IMPLICIT NONE

      INTEGER :: ii

      OPEN(unit=1, file='output.dat', status='new')
            DO ii = 1, 10
                  WRITE(1, '(i4)') ii*ii
            ENDDO
      CLOSE(unit=1)
END PROGRAM file_write
```
Note that `unit=0, 5, and 6` are reserved. Do not use them to identify files in your programs. 

Reading from file: we will read the data from file that is generated in the above example. 
```
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
```
