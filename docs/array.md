### Array 

```
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
```

Matrix multiplication:
```
PROGRAM matrix_mult
      IMPLICIT NONE

      INTEGER, DIMENSION(2, 3) :: matrix_a = reshape( (/ 1, 2, 3, &
                                                         4, 5, 6 /), &
                                                         shape(matrix_a), &
                                                         order=(/2,1/) )

      INTEGER, DIMENSION(3, 2) :: matrix_b = reshape( (/ 1, 2, &
                                                         3, 4, &
                                                         5, 6 /), &
                                                         shape(matrix_b), &
                                                         order=(/2,1/) )

      INTEGER, DIMENSION(2, 2) :: output
      INTEGER :: ii

      output = MATMUL(matrix_a, matrix_b)

      DO ii = 1, 2
            PRINT *, output(ii, :)
      END DO
END PROGRAM matrix_mult
```
