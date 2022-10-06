PROGRAM complex_number
    IMPLICIT NONE

    COMPLEX :: z = (2.0, 3.0)
    COMPLEX :: z1, z2

    WRITE (*,*) "z = ", z
    WRITE (*,*) "abs = ", CABS(z)

    z1 = (1.0, 5.0)
    WRITE (*,*) "z1 = ", z1

    z2 = CMPLX(1.0, 3.14159)
! double precision: z2 = DCMPLX(1.0, 3.14159)
! arithmetic operations
    WRITE (*,*) "z1 + z2 = ", z1 + z2
    WRITE (*,*) "z1 * z2 = ", z1 * z2


! real and imaginary parts (if real part is integer, use int(z2) instead)
    WRITE (*,*) "Real part = ", real(z2)
    WRITE (*,*) "Imaginary part = ", imag(z2)

! complex conjugate
    WRITE (*,*) "Complex conjugate: ", conjg(z2)

END PROGRAM complex_number
