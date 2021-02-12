import content from '../works/works.content.json'

type Page = {
    id: string
}

export const getAllWorkIds = () => {
    return content.pages.map((page: Page) => {
        return {
            params: {
                id: page.id
            }
        }
    })
}

export const getWorkData = (id: string) => {
    const fileContents = content.pages.find((page: Page) => page.id === id)
    return {
        id,
        ...fileContents,
    }
}