import { Router } from "express"
import { createLink, updateLink,getAllLinks,getLink, deleteLink} from "../controllers/links.js"

const router = Router();


// get all links
router.get("/link" , getAllLinks)

// get link by id
router.get("/link/:id", getLink)


// create a playlist
router.post("/link", createLink)

// update/edit link
router.put("/link/:id", updateLink)


// delete link
router.get("/link/:id" , deleteLink)









export default router;






