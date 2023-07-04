import React from 'react'

import MoonLoader from "react-spinners/MoonLoader";

const Spinner = ({color, loading}) => {
    return (
        <>
            <MoonLoader
                color={color}
                loading={loading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </>
    )
}

export default Spinner