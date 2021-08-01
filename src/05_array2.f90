PROGRAM array2
    IMPLICIT NONE

    INTEGER, DIMENSION(10) :: vec
    INTEGER :: ii

    vec = [(ii, ii = 1, 10)]

    DO ii = 1, SIZE(vec)
      PRINT '(i2)', vec(ii)
    ENDDO

END PROGRAM array2
