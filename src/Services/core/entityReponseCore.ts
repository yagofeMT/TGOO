export interface IGenericEntityReponse<TEntity> {
    data: TEntity
    message: string
    success: boolean
}