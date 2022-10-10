PROGRAM MAIN
    IMPLICIT NONE

    REAL, POINTER :: p1, p2
    REAL, TARGET :: r1
    INTEGER, DIMENSION(:), POINTER :: ptr_arr
    INTEGER, DIMENSION(2), TARGET :: arr

    r1 = 1.0

    ! set p1 to point to r1
    p1 => r1

    ALLOCATE(p2) ! creates a storage space without a variable name
    ! allocate (p1, stat=allocation_status)
    p2 = 2.2 ! this value has no name

    arr(1) = 5
    arr(2) = 8
    ptr_arr => arr

    ! below two are the same
    PRINT *, "r1 = ", r1
    PRINT *, "p1 = ", p1

    PRINT *, "p2 = ", p2

    ! check association
    PRINT *, "Is p1 and r1 associated? ", ASSOCIATED(p1, r1)
    PRINT *, "Is p1 and p2 point to same object? ", ASSOCIATED(p1, p2)
    ! associated returns false if both pointers point to null
    PRINT "(2i4)", arr

    DEALLOCATE(p2) ! now p2 is a dangling pointer
    ! it can be set to point to null
    p2 => NULL()

END
