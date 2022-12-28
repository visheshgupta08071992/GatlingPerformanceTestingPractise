package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class DeleteUserSimulation extends Simulation {

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

 val scn= scenario("Delete User Scenario")
   .exec(http("Delete User Request")
      .delete("api/users/2")
      .check(status is 204))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
