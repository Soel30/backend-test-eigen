import { Router, Response, Request } from "express";
import { MemberController } from "../controller/MemberController";
import { UserController } from "../controller/UserController";

const router: Router = Router();

router.get("/users", UserController.getAllUser);
router.get("/users/:id", UserController.getUser);
router.post("/users/create", UserController.createUser);
router.put("/users/:id/update", UserController.updateUser);
router.delete("/users/:id/delete", UserController.deleteUser);

router.get("/members", MemberController.getAllMember);
router.post("/members/borrow", MemberController.borrowBook);
router.post("/members/return", MemberController.returnBook);``
export default router;
