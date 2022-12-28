package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class UseStringBodyToSendJsonInPostRequest extends Simulation {

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  val scn = scenario("Add User using StringBody")
    .exec(http("Add User Request 2")
      .post("/api/users")
      .body(StringBody("{\n  \"name\": \"morpheus\",\n  \"job\": \"leader\"\n}"))
      .check(jsonPath("$.job").is("leader"))
      .check(status is 201))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
