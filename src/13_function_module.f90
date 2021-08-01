MODULE function_module
  IMPLICIT NONE
  PRIVATE

  INTEGER, PARAMETER, PUBLIC :: power = 5
  PUBLIC :: f

  CONTAINS

  FUNCTION f(x) RESULT(f_result)
    REAL, INTENT(IN) :: x
    REAL :: f_result

! SELECTED_REAL_KIND(precision [, range])
    INTEGER, PARAMETER :: kind_needed = selected_real_kind(power + 1)

    f_result = (1 + 1 / REAL(x, kind_needed)) ** x
  END FUNCTION f
END MODULE function_module
