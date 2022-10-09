PROGRAM MAIN
    IMPLICIT NONE
    INTEGER, PARAMETER :: n = 10000000
    CHARACTER(LEN=8) :: date
    REAL start_time, end_time
    REAL(KIND=KIND(1.0D0)) :: test = 0.0D0
    INTEGER i

    CALL date_and_time(date=date)
    PRINT *, "Timing report dated: ", date(1:4), "-", date(5:6), "-", date(7:8)

    CALL cpu_time(start_time)

    ! savage benchmark
    DO i = 1, n
        test = tan(atan(exp(log(sqrt(test * test))))) + 1.0D0;
    END DO

    CALL cpu_time(end_time)

    PRINT *, "Time taken = ", end_time - start_time, "sec."
    PRINT *, "Test = ", test
    PRINT *, "Relative accuracy = ", (test - (n + 1)) / (n + 1)
END

! Sample output:
! Timing report dated: 2022-10-09
! Time taken =   0.939146996     sec.
! Test =    9999816.5167837571     
! Relative accuracy =   -1.8448319779454493E-005
