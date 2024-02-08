import { useSelector } from "react-redux"

export function PostHautor ({userID}) {
   const author =  useSelector (state => state.users.find((user) => user.id === userID))
    return(
        <span>
            by { author ? author.name : "Unknown author" } 
        </span>
    )
}