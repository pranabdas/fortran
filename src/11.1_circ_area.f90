PROGRAM circ_area
  USE const_module
  
  IMPLICIT none

  REAL :: rad = 5.0, area

  area = pi*rad**2

  PRINT *, "Area = ", area
END PROGRAM circ_area
