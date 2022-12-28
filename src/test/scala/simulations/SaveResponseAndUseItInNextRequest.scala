package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class SaveResponseAndUseItInNextRequest extends Simulation {

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  val scn = scenario("Add User and Then Get users")
    .exec(http("Add User Request 1").post("/api/users")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .header("content-type",value="application/json")
      .check(bodyString.saveAs("ResponseBody"))) // Saving complete response in ResponseBody Variable
      .pause(3)

    .exec(http("Add User Request 2")
      .post("/api/users")
      .body(StringBody("${ResponseBody}"))  // Sending Response saved in ResponseBody Variable
      .check(jsonPath("$.job").is("leader"))
      .check(status is 201))




  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
