PROGRAM MAIN
    IMPLICIT NONE
    INTEGER no_of_commands, i
    CHARACTER(LEN=32) :: arg
    REAL :: sum = 0.0, tmp

    no_of_commands = command_argument_count()

    PRINT *, "Number of arguments = ", no_of_commands

    IF (no_of_commands < 2) THEN
        PRINT "(a,/,a)", "This program needs at least 2 arguments.", &
                 "Usage: program 4 3"
        STOP
    END IF

    DO i = 1, no_of_commands
        CALL get_command_argument(i, arg)
        ! if single argument is expected, use get_command(arg)
        ! IF (LEN_TRIM(arg) == 0) EXIT ! not required here

        arg = TRIM(arg)
        READ(arg,*) tmp ! read strings as real

        sum = sum + tmp
    END DO

    PRINT *, "Total = ", sum
END
