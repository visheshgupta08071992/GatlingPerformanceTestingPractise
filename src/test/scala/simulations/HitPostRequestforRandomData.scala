package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class HitPostRequestforRandomData extends Simulation {

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  //Function to Generate Random String of desired length in Scala
  def randomString(length: Int) = scala.util.Random.alphanumeric.filter(_.isLetter).take(length).mkString

  def addUser() : ChainBuilder ={
    repeat(5){
      exec(http("Add User Request 2")
        .post("/api/users")
        .body(StringBody(s"{\n  \"name\": \"${randomString(6)}\",\n  \"job\": \"leader\"\n}")) //dynamic value of length as 6 would sent as name using created random string function
        .check(status is 201))
    }
  }

  val scn = scenario("Add User using StringBody")
    .exec(addUser())


  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
