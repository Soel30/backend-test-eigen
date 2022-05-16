import fs from "fs";

export class Swagger {
  public static swaggerFile: any = process.cwd() + "/src/swaggers/swagger.json";
  public static swaggerData: any = fs.readFileSync(this.swaggerFile, "utf8");
  public static customCss: any = process.cwd() + "/src/swaggers/custom.css";
  public static swaggerDocument: any = JSON.parse(this.swaggerData);
}
