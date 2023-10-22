import {useContext} from 'react'
import { ILoading, ILoadingContext, LoadingContext } from "../context/LoadingContext"


export const useLoading = () => {
    const {setLoading : setLoadingContext, loading} = useContext<ILoadingContext>(LoadingContext)

    const setLoading = (newValue: ILoading) => {
        setLoadingContext(newValue)
    }

    return {
        setLoading,
        loading
    }
}