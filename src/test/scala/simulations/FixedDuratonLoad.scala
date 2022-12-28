package simulations
import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class FixedDuratonLoad extends Simulation{

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
  setUp(scn.inject(nothingFor(5), // will do nothing for 5 second
    atOnceUsers(10),// would add 10 users at once
    rampUsers(50) during(30 seconds))
      .protocols(httpConf)).maxDuration(1 minute)
}
