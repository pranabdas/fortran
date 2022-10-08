! Calculate factorial
!      | n(n -1)  n >= 1 
! n! = |
!      | 1        n = 0
PROGRAM recursive_subroutine
    IMPLICIT NONE
    INTEGER :: input, output

    PRINT *, "This program calculates factorial:"
    PRINT '(a,$)', "Input = "
    READ *, input

    CALL factorial(input, output)

    PRINT *, input, "! = ", output

CONTAINS
    RECURSIVE SUBROUTINE factorial(n, result)
        INTEGER, INTENT(IN) :: n
        INTEGER, INTENT(OUT) :: result
        INTEGER :: tmp

        IF (n >= 1) THEN
            CALL factorial(n-1, tmp)
            result = n * tmp
        ELSE
            result = 1
        END IF
    END SUBROUTINE factorial
END PROGRAM recursive_subroutine
