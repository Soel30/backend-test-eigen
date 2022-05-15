import { Router, Response, Request } from "express";
import { MemberController } from "../controller/MemberController";

const router: Router = Router();

router.get("/members", MemberController.getAllMember);
router.post("/members/borrow", MemberController.borrowBook);
router.post("/members/return", MemberController.returnBook);``
export default router;
