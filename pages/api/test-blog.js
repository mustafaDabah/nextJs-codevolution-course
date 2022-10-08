import { getSession } from "next-auth/react"

const handlers = async (req , res ) => {
    const session = await getSession({req});

    if(!session) {
        res.status(401).json({error: 'unauthevtated user'})
    } else {
        res.status(200).json({message: 'success' , session})
    }
}

export default handlers;