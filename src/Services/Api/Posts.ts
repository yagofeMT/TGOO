import { AxiosResponse } from "axios";
import { apiClient } from "../Instances";
import { IGenericEntityReponse } from "../core/entityReponseCore";


export const PostsServices = () => {
    const path = 'posts'

    const getAll = async () : Promise<AxiosResponse<IGenericEntityReponse<IPosts[]>>> => await apiClient.get(path)
    

    return {
        getAll
    }
}


export interface IPosts {
    title: string
    tags: string
    published_at: string
    featured_until: string
    youtube_link: string
    primary_text: string
    secondary_text: string
    seo_title: string
    seo_tags: string
}