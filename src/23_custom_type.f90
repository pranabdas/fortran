PROGRAM MAIN
    IMPLICIT NONE

    TYPE user
        INTEGER id ! parameters can be initialized
        CHARACTER(LEN=64) name
        REAL age
    END TYPE

    TYPE(user) new_user
    ! declare an array of user
    TYPE(user) user_catalog(10)

    new_user%id = 1;
    new_user%name = "Albert Einstein"
    new_user%age = 76.0
    ! alternatively, new_user = (1, "Albert Einstein", 76.0)

    user_catalog(1) = new_user

    PRINT *, "User ID: ", user_catalog(1)%id
    PRINT *, "User name: ", user_catalog(1)%name
    PRINT *, "Age: ", user_catalog(1)%age

END
