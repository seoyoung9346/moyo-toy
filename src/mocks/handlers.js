import { rest } from 'msw'

export const handlers = [
    rest.post(`/post-transmission-company`, (req, res, ctx) => {
        return res(
            ctx.status(200)
        )
    }),
]