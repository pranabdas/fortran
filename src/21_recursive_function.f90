! Fibonacci series
! F(0) = 0
! F(1) = 1
! F(n) = F(n-1) + F(n-2)  for n > 1
PROGRAM recursive_function
    IMPLICIT NONE
    INTEGER :: lim, i

    PRINT *, "This program calculates fibonacci series:"
    PRINT '(a,$)', "Limit = "
    READ *, lim

    DO i = 0, lim
        PRINT *, "Fib(", i, ") = ", fibonacci(i)
    END DO

CONTAINS
    RECURSIVE FUNCTION fibonacci(n) RESULT(output)
        INTEGER, INTENT(IN) :: n
        INTEGER :: output

        IF (n > 1) THEN
            output = fibonacci(n - 1) + fibonacci(n - 2)
        ELSE IF (n == 1) THEN
            output = 1
        ELSE
            output = 0
        END IF
    END FUNCTION fibonacci
END PROGRAM recursive_function
