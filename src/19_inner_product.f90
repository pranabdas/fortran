PROGRAM inner_product
    IMPLICIT NONE

    INTEGER length
    REAL, DIMENSION(:), ALLOCATABLE :: a
    REAL, DIMENSION(:), ALLOCATABLE :: b
    INTEGER i
    REAL :: sum = 0.0

    PRINT "(a,$)", "Enter length of vectors: "
    READ *, length

    IF ( length < 1 ) then
        PRINT *, "Stopping: length must be positive definite."
        STOP
    END IF

    ALLOCATE(a(length))
    ALLOCATE(b(length))

    PRINT *, "Enter first array components:"
    DO i = 1, length
        PRINT '(A,I4,A,$)', 'a[', i,'] = '
        READ *, a(i)
    END DO

    PRINT *, "Enter second array components:"
    DO i = 1, length
        PRINT '(A,I4,A,$)', 'a[', i,'] = '
        READ *, b(i)
    END DO

    DO i = 1, length
        sum = sum + a(i) * b(i)
    END DO

    PRINT '(A,F8.4)', 'Inner product = ', sum

    ! we can use in-built dot_product as well
    PRINT '(A,F8.4)', "Result using in-built dot_product = ", dot_product(a, b)

    DEALLOCATE(a)
    DEALLOCATE(b)
END PROGRAM inner_product
