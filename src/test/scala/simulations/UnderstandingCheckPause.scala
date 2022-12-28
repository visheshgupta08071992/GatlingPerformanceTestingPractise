package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt


class UnderstandingCheckPause extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  val scn = scenario("User API Calls")
    .exec(http("Add User Request").post("/api/users")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .header("content-type",value="application/json")
      .check(status.is(200)))
    .pause(3)

    .exec(http("Get User").get("/api/users/2").check(status.in(200 to 210)))
    .pause(1,10)

    .exec(http("Get All Users").get("/api/users?page=2").check(status.not(400),status.not(500)))
    .pause(3000.milliseconds)


  //setup
  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)
}
