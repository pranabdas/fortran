PROGRAM MAIN
    IMPLICIT NONE

    TYPE user ! if defined in external MODULE, use PUBLIC: TYPE, PUBLIC :: user
        INTEGER id ! parameters can be initialized
        CHARACTER(LEN=64) name
        REAL age
    END TYPE

    ! extending type
    TYPE, EXTENDS(user) :: user_extended
        real :: salary
    END TYPE user_extended

    TYPE(user) new_user
    ! declare an array of user
    TYPE(user) user_catalog(10)
    TYPE(user_extended) user_with_salary

    new_user%id = 1;
    new_user%name = "Albert Einstein"
    new_user%age = 76.0
    ! alternatively, new_user = user(1, "Albert Einstein", 76.0)

    user_catalog(1) = new_user

    PRINT *, "User ID: ", user_catalog(1)%id
    PRINT *, "User name: ", user_catalog(1)%name
    PRINT *, "Age: ", user_catalog(1)%age

    user_with_salary = user_extended(1, "Albert Einstein", 76.0, 50000.0)
    PRINT *, "Salary: ", user_with_salary%salary

END
