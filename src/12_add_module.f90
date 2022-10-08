MODULE add_module
  IMPLICIT none
  PRIVATE

  REAL :: input1, input2, total

  PUBLIC :: read_inputs, add_numbers, print_result

CONTAINS

  SUBROUTINE read_inputs()
    PRINT "(a,$)", "Input1 = "
    READ *, input1

    PRINT "(a,$)", "Input2 = "
    READ *, input2
  END SUBROUTINE read_inputs

  SUBROUTINE add_numbers()
    total = input1 + input2
  END SUBROUTINE add_numbers

  SUBROUTINE print_result
    PRINT *, input1, " + ", input2, " = ", total
  END SUBROUTINE print_result
END MODULE add_module
