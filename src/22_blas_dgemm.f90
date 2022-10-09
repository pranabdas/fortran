PROGRAM MAIN
    IMPLICIT NONE

    DOUBLE PRECISION ALPHA, BETA
    INTEGER M, K, N, I, J
    PARAMETER (M=2, K=3, N=2)
    DOUBLE PRECISION A(M,K), B(K,N), C(M,N)

    ALPHA = 1.0 
    BETA = 0.0

    ! initialize matrices
    A(1,1) = 2.0
    A(1,2) = 3.0
    A(1,3) = 9.0
    A(2,1) = 0.0
    A(2,2) = 4.0
    A(2,3) = 1.0

    B(1,1) = 4.0
    B(1,2) = 1.0
    B(2,1) = 4.0
    B(2,2) = 5.0
    B(3,1) = 9.0
    B(3,2) = 6.0

    ! optionally initialize C matrix with zeros
    DO I = 1, M
        DO J = 1, N
          C(I,J) = 0.0
        END DO
    END DO

    CALL DGEMM('N','N', M, N, K, ALPHA, A, M, B, K, BETA, C, M)

    ! print matrix C
    DO I = 1, M
        DO J = 1, N
          PRINT *, "C(", I, ",", J, ") =", C(I,J)
        END DO
    END DO

END
