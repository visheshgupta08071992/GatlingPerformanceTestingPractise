package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TestAPISimulations extends Simulation{

  //http conf: It would setup the request
 val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  //scenario
 val scn= scenario("Get User")
    .exec(http("Get User Request")
      .get("api/users/2")
      .check(status is 200))

  //setup
  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)
}