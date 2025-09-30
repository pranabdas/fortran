program read_qe_input
  implicit none

  ! Declare variables matching those in the QE SYSTEM namelist
  integer :: ibrav, nat, ntyp
  double precision :: ecutwfc, ecutrho
  character(len=256) :: input_file
  integer :: ios

  ! Namelist definition
  namelist /SYSTEM/ ibrav, nat, ntyp, ecutwfc, ecutrho

  ! Set default values
  ibrav = 0
  nat = 0
  ntyp = 0
  ecutwfc = 0.0d0
  ecutrho = 0.0d0

  ! Set input file name
  input_file = '30_qe.in'

  ! Open and read the SYSTEM namelist
  open(unit=10, file=input_file, status='old', action='read')
  read(10, nml=SYSTEM, iostat=ios)
  if (ios /= 0) then
     print *, "Error reading SYSTEM namelist from file ", trim(input_file)
  else
     print *, "ibrav   =", ibrav
     print *, "nat     =", nat
     print *, "ntyp    =", ntyp
     print *, "ecutwfc =", ecutwfc
     print *, "ecutrho =", ecutrho
  end if
  close(10)
end program read_qe_input
