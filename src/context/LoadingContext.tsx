import {useEffect, useState, createContext, ReactNode} from 'react'
import LoadingComponent from '../components/LoadingComponent'

export type ILoading = 'idle' | 'loading'

export interface ILoadingContext {
    loading: string
    setLoading: (newValue: ILoading) => void
}


export const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext)


export const LoadingProvider = ({children}: {children: ReactNode}) => {

    const [loading, setLoading] = useState<ILoading>('idle')
    const [msgError, setMsgError] = useState<string>('')
    const [modalTitle, setModalTitle] = useState<string>('')

    return (
        <LoadingContext.Provider value={{
            loading,
            setLoading,
        }}>
            {children}
            {loading === 'loading' && <LoadingComponent/> }
        </LoadingContext.Provider>
    )
}