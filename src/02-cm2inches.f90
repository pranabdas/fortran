!==============================================================================
! Program : Converting centimeter to inches 
! Author  : Pranab Das (Twitter: @pranab_das)
! Version : 20201007
!==============================================================================
PROGRAM cm2inch
      IMPLICIT NONE

      REAL :: cm, inch
    
      PRINT "(a,$)", "Enter length in centimeter = "
      READ *, cm
      
      inch = cm / 2.54

      PRINT *, "Length in inches = ", inch
END PROGRAM cm2inch
