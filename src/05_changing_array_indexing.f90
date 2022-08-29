! We will change the default array indexing instead of default index starting
! from 1

PROGRAM changing_array_indexing
   IMPLICIT NONE

   INTEGER :: i
   INTEGER, DIMENSION(-5: 5) :: number, square
   REAL, DIMENSION(5: 10) :: num, sq_root

   DO i = -5, 5
      number(i) = i
      square(i) = number(i) * number(i)
   END DO

   DO i = -5, 5
      WRITE (*, 100) number(i), square(i)
100   FORMAT ('Number = ', I4, ', Square = ', I4)
   END DO

   PRINT *, "Square root program:"

   DO i = 5, 10
      num(i) =  i
      sq_root(i) = SQRT(num(i))
      WRITE (*, 101) num(i), sq_root(i)
101   FORMAT ('Number = ', F6.2, ', Square = ', F10.4)
   END DO
END PROGRAM changing_array_indexing
