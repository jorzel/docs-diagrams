flowchart LR
    R[Reserve] ==> L{Is reservations limit\nfor a guest exceeded?}

    L == NO ==> C{Is any table available?}
    L == YES ==> REJECTED

    C == YES ==> S[Save reservation]
    C == NO ==> REJECTED
    S ==> RESERVED

