package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class UpdateUserSimulation extends Simulation {

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

 val scn= scenario("Update User")
   .exec(http("Update User Request")
      .put("api/users/2")
      .body(RawFileBody("./src/test/resources/bodies/UpdateUser.json"))
      .asJson
      .check(status is 200))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
