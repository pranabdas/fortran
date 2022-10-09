PROGRAM MAIN
    IMPLICIT NONE

    INTEGER a, b

    PRINT "(a,$)", "Enter two integers (separated by space or comma): "
    READ *, a, b

    CALL swap(a, b)

    PRINT *, "After swap: ", a, b

CONTAINS

    SUBROUTINE swap(a, b)
        INTEGER, INTENT(IN OUT) :: a, b
        INTEGER tmp

        tmp = a
        a = b
        b = tmp
    END SUBROUTINE swap
END
