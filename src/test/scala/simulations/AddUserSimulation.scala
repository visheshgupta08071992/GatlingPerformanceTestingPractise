package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class AddUserSimulation extends Simulation {

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  val scn = scenario("Add User and Then Get users")
    .exec(http("Add User Request").post("/api/users")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .header("content-type",value="application/json")
      .check(status is 201))
      .pause(3)

    .exec(http("Get User").get("/api/users/2").check(status is 200))
    .pause(2)

    .exec(http("Get All Users").get("/api/users?page=2").check(status is 200))


  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
