PROGRAM hello_world_mpi
    INCLUDE 'mpif.h'

    INTEGER process_rank, size_of_cluster, ierror
    CHARACTER* (MPI_MAX_PROCESSOR_NAME) processor_name

    CALL MPI_INIT(ierror)
    CALL MPI_COMM_SIZE(MPI_COMM_WORLD, size_of_cluster, ierror)
    CALL MPI_COMM_RANK(MPI_COMM_WORLD, process_rank, ierror)
    CALL MPI_GET_PROCESSOR_NAME(processor_name, namelen, ierr)

    WRITE(*, 10) process_rank, size_of_cluster, processor_name
10  FORMAT('Hello from process: ', I2, ' of', I2, ' on ', 20A)

    CALL MPI_FINALIZE(ierror)
END PROGRAM
