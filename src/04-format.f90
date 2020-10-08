!==============================================================================
! Program : Formatting output in Fortran
! Author  : Pranab Das (Twitter: @pranab_das)
! Version : 20201007
!==============================================================================
PROGRAM format
      IMPLICIT NONE
      
      INTEGER :: no_of_students = 25
      REAL :: result1, result2

      result1 = SIN(1.23)
      result2 = 1.234728 * EXP(12.0)

      PRINT '(i4)', no_of_students    ! Interger with 4 spaces for it
      PRINT '(f6.4)', result1         ! Real number with 6 spaces in which 4 
                                      ! for the fractional part
      PRINT '(e8.2)', result2         ! exponential with 2 spaces for 
                                      ! fractional part
END PROGRAM format
