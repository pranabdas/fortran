program fftw3_sawtooth
  use, intrinsic :: iso_c_binding
  implicit none
  integer, parameter :: N = 128
  real(c_double) :: x(N)
  real(c_double) :: in(N)
  complex(c_double_complex) :: out(N)
  integer :: i
  real(c_double) :: L, dx
  integer(c_int) :: flags
  type(c_ptr) :: plan

  interface
    function fftw_plan_dft_r2c_1d(n, in, out, flags) bind(C, name="fftw_plan_dft_r2c_1d")
      import :: c_int, c_double, c_double_complex, c_ptr
      integer(c_int), value :: n
      real(c_double) :: in(*)
      complex(c_double_complex) :: out(*)
      integer(c_int), value :: flags
      type(c_ptr) :: fftw_plan_dft_r2c_1d
    end function

    subroutine fftw_execute_dft_r2c(plan, in, out) bind(C, name="fftw_execute_dft_r2c")
      import :: c_ptr, c_double, c_double_complex
      type(c_ptr), value :: plan
      real(c_double) :: in(*)
      complex(c_double_complex) :: out(*)
    end subroutine

    subroutine fftw_destroy_plan(plan) bind(C, name="fftw_destroy_plan")
      import :: c_ptr
      type(c_ptr), value :: plan
    end subroutine
  end interface

  L = 2.0d0 * 3.141592653589793d0
  dx = L / N

  ! Generate sawtooth samples on [-pi, pi)
  do i = 1, N
     x(i) = -3.141592653589793d0 + (i-1)*dx
     in(i) = x(i)/3.141592653589793d0
  end do

  flags = 64  ! FFTW_ESTIMATE

  plan = fftw_plan_dft_r2c_1d(N, in, out, flags)
  call fftw_execute_dft_r2c(plan, in, out)
  call fftw_destroy_plan(plan)

  ! Print first few Fourier coefficients
  print *, 'n   amplitude     phase'
  do i = 1, N/2
     print *, i-1, abs(out(i))/N, atan2(aimag(out(i)), real(out(i)))
  end do
end program fftw3_sawtooth
