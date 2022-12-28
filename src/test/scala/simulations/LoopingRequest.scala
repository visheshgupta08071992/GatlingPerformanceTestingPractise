package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._


class LoopingRequest extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  def getAllUsersRequest():ChainBuilder ={
    repeat(2){
      exec(http("Get All Users request").get("/api/users?page=2").check(status is 200))
    }

  }

  def getSingleUserRequest():ChainBuilder ={
    repeat(2){
      exec(http("Get User").get("/api/users/2").check(status is 200))
    }

  }

  def addNewUser():ChainBuilder = {
    repeat(2){
      exec(http("Add User Request").post("/api/users")
        .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
        .header("content-type",value="application/json")
        .check(status is 201))
    }

  }

  val scn= scenario("User Request Scenarios")
    .exec(getAllUsersRequest())
    .pause(2)
    .exec(getSingleUserRequest())
    .pause(2)
    .exec(addNewUser())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
