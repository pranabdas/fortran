MODULE integration_module
  IMPLICIT NONE
  PRIVATE
  PUBLIC :: integral

  CONTAINS

  FUNCTION integral(f, a, b, n) RESULT(integral_result)

    INTERFACE
      FUNCTION f(x) RESULT(f_result)
        REAL, INTENT(IN) :: x
        REAL :: f_result
      END FUNCTION f
    END INTERFACE

    REAL, INTENT(IN) :: a, b
    INTEGER, INTENT(IN) :: n
    REAL :: integral_result
    REAL :: h, area
    INTEGER :: i

    h = (b - a) / n

    area = 0.5 * (f(a) + f(b))

    DO i = 1, n-1
      area = area + f(a + i*h)
    END DO

    integral_result = h * area
  END FUNCTION integral
END MODULE integration_module
