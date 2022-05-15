import { Router, Response, Request } from "express";
import { MemberController } from "../controller/MemberController";
import { BookController } from "../controller/BookContoller";
const router: Router = Router();

router.get("/members", MemberController.getAllMember);
router.post("/members/borrow", MemberController.borrowBook);
router.post("/members/return", MemberController.returnBook);

router.get("/books", BookController.getAllBook);
export default router;
