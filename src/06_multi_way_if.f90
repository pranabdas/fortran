PROGRAM age_group
  IMPLICIT NONE

  INTEGER :: age
  PRINT "(a,$)", "Enter your age: "
  READ *, age

  IF (age <= 0) THEN
    PRINT *, "Error: please enter a positive integer age."
    STOP
  ELSE IF (age < 18) THEN
    PRINT *, "You are not adult."
  ELSE IF (age >= 18 .AND. age < 65) THEN
    PRINT *, "You are adult."
  ELSE
    PRINT *, "You are senior."
  END IF
END PROGRAM age_group
