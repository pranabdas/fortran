PROGRAM age_select
  IMPLICIT NONE

  INTEGER :: age
  PRINT "(a,$)", "Enter your age: "
  READ *, age

  SELECT CASE (age)
  CASE DEFAULT
    PRINT *, "You are not adult."
  CASE(18:64)
    PRINT *, "You are adult."
  CASE(65:)
    PRINT *, "You are senior."
  END SELECT
END PROGRAM age_select
