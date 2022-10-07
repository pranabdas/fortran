! Monte carlo method of integration
! calculate area under the curve y = x^2 within x limits [1, 3]
PROGRAM area_under_curve
    IMPLICIT NONE

    INTEGER, PARAMETER :: iteration = 1000000
    REAL :: x_lo = 1.0
    REAL :: x_hi = 3.0
    REAL :: x, y, y_lo = 0.0, y_hi, area, area_rect
    INTEGER :: i, monte_area = 0

    y_hi = x_hi ** 2

    area_rect = y_hi * (x_hi - x_lo)

    DO i = 1, iteration
        CALL random_number(x)
        CALL random_number(y)

        x = x_lo + x * (x_hi - x_lo);
        y = y * (y_hi - y_lo);

        IF (y < x ** 2) THEN
            monte_area = monte_area + 1;
        END IF
    END DO

    area = area_rect * monte_area / iteration

    PRINT *, "Area = ", area
    PRINT *, "Analytical result = ", (27.0 - 1) / 3

END PROGRAM area_under_curve
