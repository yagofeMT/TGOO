import { CircularProgress } from '@mui/material'
import React from 'react'

const LoadingComponent: React.FC = () => (
    <div>
        <CircularProgress color="primary" size={30}/>
    </div>
)

export default LoadingComponent
