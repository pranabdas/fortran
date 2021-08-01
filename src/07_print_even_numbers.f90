PROGRAM even_numbers
  IMPLICIT NONE

  INTEGER :: num
  num = 1

  DO WHILE (num <= 10)
    IF (MODULO(num, 2) == 0) THEN
      PRINT *, num
    END IF
    num = num + 1
  END DO
END PROGRAM even_numbers
