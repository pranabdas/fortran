PROGRAM MAIN
    IMPLICIT NONE

    INTEGER exit_code

    ! Execute system command
    PRINT *, "Executing: ls"
    CALL execute_command_line("ls")

    PRINT *, "Executing: du -hs ."
    CALL execute_command_line("du -hs .", exitstat=exit_code)

    PRINT *, "Exit code: ", exit_code

END
