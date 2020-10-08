### Fortran basics 
We will learn by doing. Let us start by writing a simple program that asks for some user input, performs some arithmetic operations, and returns a result. 

```f90
PROGRAM add
      IMPLICIT NONE

      INTEGER :: a, b, output

      PRINT *, "Input a="
      READ *, a
      PRINT *, "Input b="
      READ *, b

      output = a + b

      PRINT *, "Output:", a, "+", b, "=", output
END PROGRAM add
```

We store the above code in a file named: `01-add.f90`. We compile and execute the code as follows: 
```
gfortran 01-add.f90 
./a.out
```

Now let's write another simple program that converts centimeter to inches:
```
PROGRAM cm2inch
      IMPLICIT NONE

      REAL :: cm, inch

      PRINT *, "Enter length in centimeter"
      READ *, cm

      inch = cm / 2.54

      PRINT *, "Length in inches = ", inch
END PROGRAM cm2inch
```

Calculate the circumference of a circle given the diameter: 
```
PROGRAM circ
    IMPLICIT NONE

    REAL :: r, circum
    REAL, PARAMETER :: pi = 3.14159

    PRINT *, "Enter radius of the circle:"
    READ *, r

    circum = 2 * pi * r

    PRINT *, "Circumference of the circle = ", circum
END PROGRAM circ
```

Formatting output:
```
PROGRAM format
      IMPLICIT NONE

      INTEGER :: no_of_students = 25
      REAL :: result1, result2

      result1 = SIN(1.23)
      result2 = 1.234728 * EXP(12.0)

      PRINT '(i4)', no_of_students    ! Interger with 4 spaces for it
      PRINT '(f6.4)', result1         ! Real number with 6 spaces in which 4 
                                      ! for the fractional part
      PRINT '(e8.2)', result2         ! exponential with 2 spaces for 
                                      ! fractional part
END PROGRAM format
```
