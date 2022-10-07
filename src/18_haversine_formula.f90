! calculate the distance between two points on earch/sphere given latitude
! and longitude
! haversine is defined as: hav(theta) = sin^2(theta/2) = (1 - cos(theta))/2
! test: BNA(36.12,-86.67), LAX(33.94,-118.40), Distance 2889.6612 km
PROGRAM haversine_formula
    IMPLICIT NONE
    INTEGER, PARAMETER :: DP = KIND(1.0D0)
    REAL(DP), PARAMETER :: RADIUS_OF_EARTH = 6.3781D6

    REAL(DP) :: lat1 = 0.0_DP
    REAL(DP) :: lon1 = 0.0_DP
    REAL(DP) :: lat2 = 0.0_DP
    REAL(DP) :: lon2 = 0.0_DP
    REAL(DP) :: a, dist

    PRINT "(a,$)", "Latitude of point A = "
    READ *, lat1
    PRINT "(a,$)", "Longitude of point A = "
    READ *, lon1
    PRINT "(a,$)", "Latitude of point B = "
    READ *, lat2
    PRINT "(a,$)", "Longitude of point B = "
    READ *, lon2

    lat1 = deg2rad(lat1)
    lon1 = deg2rad(lon1)
    lat2 = deg2rad(lat2)
    lon2 = deg2rad(lon2)

    a = (SIN((lat1 - lat2)/2))**2 + COS(lat1) * COS(lat2) * &
        (SIN((lon1 - lon2)/2))**2

    dist = 2 * RADIUS_OF_EARTH * ASIN(SQRT(a))

    PRINT '(A,F12.4,A)', 'Distance: ', dist / 1000,' km'

CONTAINS
    FUNCTION deg2rad(degree) RESULT(rad)
        ! degrees to radians
        REAL(KIND=KIND(0.0D0)), INTENT(IN) :: degree
        REAL(KIND=KIND(0.0D0)), PARAMETER :: deg_to_rad = ATAN(1.0) / 45
        REAL(KIND=KIND(0.0D0)) :: rad

        rad = degree * deg_to_rad
    END FUNCTION deg2rad

END PROGRAM haversine_formula
