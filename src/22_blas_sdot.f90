! SDOT: This function performs a vector-vector operation of computing a scalar
! product of two single-precision real vectors x and y.
! https://netlib.org/blas/#_level_1
! Compile: gfortran filename.f90 -lblas
! If BLAS is not in system path: gfortran filename.f90 -L/usr/lib -lblas
PROGRAM MAIN
    IMPLICIT NONE

    INTEGER :: n = 3 ! length of vectors
    REAL, DIMENSION(:), ALLOCATABLE :: x
    REAL, DIMENSION(:), ALLOCATABLE :: y
    INTEGER :: incx = 1, incy = 1 
    
    ! incx and incy can be used to manipulate data when both x and y are stored
    ! in the same array. See the alternate array z
    REAL z(6)
    INTEGER :: incxz= 2, incyz = 1

    REAL res, SDOT

    EXTERNAL SDOT

    ALLOCATE(x(n))
    ALLOCATE(y(n))

    x(1) = 2.0
    x(2) = 1.0
    x(3) = 0.0

    y(1) = 1.0
    y(2) = 3.0
    y(3) = 5.0

    z(1) = x(1)
    z(2) = y(1)
    z(3) = x(2)
    z(4) = y(2)
    z(5) = x(3)
    z(6) = y(3)

    res = SDOT(n, x, incx, y, incy)

    PRINT *, "Result = ", res
    PRINT *, "Alt. result = ", SDOT(n, z, incxz, z, incyz)

    DEALLOCATE(x)
    DEALLOCATE(y)
END
