! Program : Matrix multiplication

PROGRAM matrix_mult
  IMPLICIT NONE

  INTEGER, DIMENSION(2, 3) :: A = RESHAPE([1, 2, 3, &
                                           4, 5, 6], &
                                           shape(A), &
                                           order=[2, 1])

  INTEGER, DIMENSION(3, 2) :: B = RESHAPE([1, 2, &
                                           3, 4, &
                                           5, 6], &
                                           shape(B), &
                                           order=[2, 1])

  INTEGER, DIMENSION(2, 2) :: output
  INTEGER :: ii

  output = MATMUL(A, B)

  DO ii = 1, 2
    PRINT *, output(ii, :)
  END DO
END PROGRAM matrix_mult
