PROGRAM pi
    IMPLICIT NONE
    
    INTEGER, PARAMETER :: iteration = 1000000
    REAL :: x, y
    REAL :: x_lo = -1.0
    REAL :: x_hi = 1.0
    REAL :: y_lo = -1.0
    REAL :: y_hi = 1.0
    INTEGER :: i, monte_area = 0

    DO i = 1, iteration
        CALL random_number(x)
        CALL random_number(y)

        x = x_lo + x * (x_hi - x_lo);
        y = y_lo + y * (y_hi - y_lo);

        IF (x * x + y * y < 1) THEN
            monte_area = monte_area + 1;
        END IF
    END DO

    PRINT *, "pi = ", 4.0 * monte_area / iteration

    PRINT *, "relative error = ", abs(1.0 * monte_area / iteration &
            - ATAN(1.0D0)) / ATAN(1.0D0)

END PROGRAM pi
