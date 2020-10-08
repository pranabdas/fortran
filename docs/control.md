### Logical Expression and control 


| Notation	| Meaning                  |
| :-------- | :----------------------- |
| .lt.	    | less than                |
| .gt.	    | greater than             |
| .le.	    | less than or equal to    |
| .ge.	    | greater than or equal to |
| .eq.	    | equals                   |
| .ne.	    | not equal to             |
| .and.	    | and                      |
| .or.	    | or                       |
| .not.	    | not                      |
| .xor.	    | "exclusive" or           |
| .eqv.	    | equivalent               |
| .neqv.	| not equivalent           |

Calculate square root of real positive numbers:
```
PROGRAM sq_root
      IMPLICIT NONE

      REAL :: input, output

      PRINT *, "Input = "
      READ *, input

      IF (input .GE. 0) THEN
          output = SQRT(input)
          PRINT *, "Square root of ", input, "= ", output
      ELSE
          PRINT *, "Input must be positive real."
      ENDIF
END PROGRAM sq_root
```
