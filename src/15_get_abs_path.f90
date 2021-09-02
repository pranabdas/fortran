PROGRAM print_abs_path
  IMPLICIT NONE

  CHARACTER(LEN=128) :: input_path, abs_path, get_abs_path

  PRINT "(a,$)", 'Enter file name: '
  READ (*,"(a128)") input_path

  abs_path = get_abs_path(input_path)
  PRINT *, 'Absolute PATH: ', abs_path
END PROGRAM print_abs_path

CHARACTER(LEN=128) FUNCTION get_abs_path(input_path)
  IMPLICIT NONE

  CHARACTER(LEN=128), INTENT(IN) :: input_path
  CHARACTER(LEN=128) :: PREFIX

  IF (input_path(1:1) == '/' ) THEN
    get_abs_path = input_path

  ELSE IF (input_path(1:2) == '~/' ) THEN
    CALL GETENV('HOME', PREFIX)
    get_abs_path = PREFIX(:LNBLNK(PREFIX)) // input_path(2:LNBLNK(input_path))

  ELSE
    CALL GETCWD(PREFIX)
    get_abs_path = PREFIX(:LNBLNK(PREFIX)) // '/' // input_path(:LNBLNK(input_path))
  ENDIF

  RETURN
END FUNCTION get_abs_path
