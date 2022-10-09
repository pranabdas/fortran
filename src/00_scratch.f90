PROGRAM scratch
  IMPLICIT NONE
!  PRINT *, "My name is " // &
!  "Pranab."
! -------------------------------------
!  REAL(KIND=KIND(0.0D0)), PARAMETER :: pi =  4 * ATAN(1.0D0)
!  REAL(KIND=SELECTED_REAL_KIND(12)), PARAMETER :: temp =  4 * ATAN(REAL(1.0E0, KIND=KIND(0.0D0)))
!  PRINT *, pi, temp
!
!  WRITE(*, "(I8)") 1234
!  WRITE(*, "(I8.6)") 1234
!
!  WRITE(*, "(E12.4)") pi
! -------------------------------------
  INTEGER, DIMENSION(2, 2) :: a
  INTEGER :: i
  
  a = 1
  
  DO i = 1, 2
    PRINT *, a(i, :)
  END DO

  PRINT "(f5.1, es9.1, a, i4)", 3.5, 1.4e4, " and ", 12
  PRINT "(2(i4))", 12, 8
  PRINT "(a, /, a)", "first line", "second line"
  PRINT "(i4, t10, i4)", 3, 5

END PROGRAM scratch
