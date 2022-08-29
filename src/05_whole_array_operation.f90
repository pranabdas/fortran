PROGRAM add_arrays
   IMPLICIT NONE

   REAL, DIMENSION(5) :: a = [2.0, 5.3, 1.2, 4.0, 6.0]
   REAL, DIMENSION(5) :: b = [1.0, 2.0, 3.0, 4.0, 5.0]
   REAL, DIMENSION(5) :: output

   output = a + b

   WRITE (*, 99) 'A     = ', a
   WRITE (*, 99) 'B     = ', b
   WRITE (*, 99) 'A + B = ', output
99 FORMAT (A, 5(F6.2, 1X))
END PROGRAM add_arrays
