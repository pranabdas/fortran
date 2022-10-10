PROGRAM MAIN
    IMPLICIT NONE

    ! define a base line type
    TYPE :: line_type
        REAL :: x_start, x_end, y_start, y_end
    END TYPE line_type

    ! extend the base line type
    TYPE, EXTENDS(line_type) :: colored_line_type
        INTEGER :: r, g, b ! each ranges 0-255
    END TYPE colored_line_type

    TYPE, EXTENDS(colored_line_type) :: vector_line_type
        LOGICAL :: direction ! T if direction is start to end, F if reverse
    END TYPE vector_line_type

    ! CLASS keyword instead of TYPE
    ! polymorphic objects are dynamic, must be declared with ALLOCATABLE or POINTER
    CLASS(line_type), ALLOCATABLE :: colored_line, vector_line

    ! notice that line has CLASS line_type, but still can be assigned colored_line_type
    colored_line = colored_line_type(0.0, 1.0, 0.0, 1.0, 0, 0, 255)
    
    ! alternative way to assign
    ! ALLOCATE(vector_line_type::vector_line)
    ALLOCATE(vector_line, source=vector_line_type(0.0, 1.0, 0.0, 1.0, 0, 0, 255, .TRUE.))

    ! accessing elements is bit tricky
    SELECT TYPE(colored_line)
        TYPE IS(line_type)
            PRINT *, "X_start: ", colored_line%x_start
        TYPE IS(colored_line_type)
            PRINT *, "Color: ", colored_line%r, colored_line%g, colored_line%b
        TYPE IS(vector_line_type)
            PRINT *, "Is forward directed? ", colored_line%direction
        CLASS DEFAULT
            PRINT *, "Error: not sure what type it is."
    END SELECT

    ! re-allocate the same variable
    ! DEALLOCATE(colored_line)
    ! ALLOCATE(colored_line, source=vector_line_type(0.0, 1.0, 0.0, 1.0, 0, 0, 255, .TRUE.))

END
