## Understanding Gatling

### What is Gatling?

1.Gattling is a powerful open-source load testing tool, We say it powerful because we can create millions of virtual users and we do not have to generate a separate machines with high CPU and RAM for using Gatling. Gatling is written in Scala and the scripts that we create for our performance Testing can be written in Scala or Java or Kotlin.</br>

2.We can use Gatling as a standalone tool or we can use Gatling with our build Maven,Gradle etc.</br>

3.Gatling is built on top of tool called AKKA which enables Gatling to implement virtual users as messages instead of dedicated Threads, making them very resource cheap.

![image](https://user-images.githubusercontent.com/52998083/209425087-26e6f29c-ea33-4f42-afe9-ee45960d2565.png)

### Ways to use Gatling

There are two ways to use Gatling -

1. Using Gatling as standalone bundle -> Prerequisite here is Java(JDK)
2. Use Gating with Build Tool -> Prerequisite here is Java(JDK),Scala,BuildTool(Maven,Gradle),IDE(Intellij,Eclipse)


## Using Gatling Standalone bundle

### Download and Setup

1. Download Gatling from **https://gatling.io/open-source/** </br>
2. Check gatling.bat file is present for windows and for mac gatling.sh is present within gatling/bin folder
3. Check recorder.bat file is present for windows and for mac recorder.sh is present within gatling/bin folder

![image](https://user-images.githubusercontent.com/52998083/209428935-edb9cf69-bb1a-49a2-9533-e75a42b9a28f.png).

4.Recorder.bat file is used for recording while gatling.bat is used to run our test whether it is created with or without recording.

5.Run the recorder.bat file directly or through cmd using command recorder.bat from path where recorder.bat file is present.

6.Once the Gatling App is opened,Change the recorder modee to HAR Converter

![image](https://user-images.githubusercontent.com/52998083/209429265-b2cb2b6b-8924-4eee-ab02-1d16734a23a8.png)

7.Record a test on browser and download the HAR file

8.Upload HAR file in Gatling recorder and generate script by clicking on Start button.

![image](https://user-images.githubusercontent.com/52998083/209429582-fb81edc1-89f6-4959-bec1-f81773b8f7cd.png)

9.Our script gets stored within Gatling folder -> user-files -> simulations.

10.Run scripts using gatling.bat and check reports.

11.Results gets stored within Gatling folder -> result.


## Using Gatling with Build Tool

1.Prerequisite here is Java(JDK),Scala,BuildTool(Maven,Gradle),IDE(Intellij,Eclipse)

2.Download Scala zip file from https://github.com/lampepfl/dotty/releases/tag/3.1.0

3.Unzip the scala zip and the bin folder path of scala to Envionment Path Variable.

4.Open CMD and check whether is installed using command scala -version

5.Also add Gatlings bin path(C:\VisheshProjects\gatling-charts-highcharts-bundle-3.9.0-bundle\gatling-charts-highcharts-bundle-3.9.0\bin ) to Environment Path Variable

5.Ensure Maven is installed using command **mvn -v** 

6.Install Scala Plugin within Intellij.

7.To Create a Gatling Maven Project having Gatling maven project structure follow the below steps</br>


   ```js
   1.Create a new maven Project.
   2.To get the Gatling maven project structure click on checkbox Create from archetype and then click on button Add Archetype.   
   3.You can get the Gatling Project archetype by searching io.gatling.highcharts maven archetype on google(https://mvnrepository.com/artifact/io.gatling.highcharts/gatling-highcharts-maven-archetype) </br>  
   4.Add the Arcytype value as shown in below screenshot
   5.Provide name, artifactid,groupid for your project and click on finish.
   ```
   
   ![image](https://user-images.githubusercontent.com/52998083/209459224-88012d8a-730f-4cd0-ad7a-91540cad8a62.png)
   
   ![image](https://user-images.githubusercontent.com/52998083/209459275-e6b074fe-53bb-4e1f-911d-781a31edad10.png)
   
   
7.Or Alternatively you can also Clone and download sample scala project from https://github.com/gatling/gatling-tutorial

8.Once Gatling project is created, It is required to provide Scala SDK path to Intellij. You can provide the Scala SDK path by navigating to File -> ProjectStructure -> Platform Settings -> Global Libraries. In the given path you can provide the path of lib directory for the scala software which you have downloaded. Or Alternatively you can also provide the path of lib directly of Gatling High Charts which is used as Standalone software.

![image](https://user-images.githubusercontent.com/52998083/209614355-ce4199b8-b0db-4c04-baae-c341ee2f317e.png)


**Scala Understandings**

```js

1.In Scala _ means all files. It is similar to * in Java.
2.Variable in scala is declared using val keyword.
3.A function in scala is created using def keyword.
   
   def functionName ([list of parameters]) : [return type] = {
   function body
   return [expr]
}

4.Function to Generate Random String of desired length in Scala
  
  def randomString(length: Int) = scala.util.Random.alphanumeric.filter(_.isLetter).take(length).mkString

```

## Understanding Gatling Performance Testing Script Creation

1.Its best to store all performance simulations within Simulation Folder. All the Gatling Scala Simulation files should import below packages and must extend
Simulation Class

```js

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

```

2. A normal gatling performance testing script can be divided into three parts -

**Http Request Configuration**

```js

 val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

```

**Scenario Creation**

**Get Request**

```js
 val scn= scenario("Get User")
    .exec(http("Get User Request")
      .get("api/users/2")
      .check(status is 200))
```

**Post Request**

**Reading Json from extenrnal file**

```js
val scn = scenario("Add User")
    .exec(http("Add User Request").post("/api/users")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .header("content-type",value="application/json")
      .check(status is 201))

```

**Passing Json as String**

we can pass the Json within the StringBody function within body.

```js
 val scn = scenario("Add User using StringBody")
    .exec(http("Add User Request 2")
      .post("/api/users")
      .body(StringBody("{\n  \"name\": \"morpheus\",\n  \"job\": \"leader\"\n}"))
      .check(jsonPath("$.job").is("leader"))
      .check(status is 201))

```

**Passing Dynamic data to Json String Body in Post Request**

```js
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


```

**Request Chaining**

we can chain the request with the help of pause and again executing another request with exec command

```js
  val scn = scenario("Add User and Then Get users")
    .exec(http("Add User Request").post("/api/users")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .header("content-type",value="application/json")
      .check(status is 201))
      .pause(3)

    .exec(http("Get User").get("/api/users/2").check(status is 200))
    .pause(2)

    .exec(http("Get All Users").get("/api/users?page=2").check(status is 200))

```


**Setting up the Scenario to be executed against no of Users**

```js
setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)
```

![image](https://user-images.githubusercontent.com/52998083/209545876-19df3b7f-ca0f-421d-8360-907bdfa6b951.png)

![image](https://user-images.githubusercontent.com/52998083/209551673-1d58524f-886c-489c-82e1-879289b3e133.png)


**Understanding check**

check is used for assertions as well as for extracting data from API response. check uses jsonpath to extract data from API response.

**Response**

```js

{
  "code": 200,
  "meta": {
    "pagination": {
      "total": 5015,
      "pages": 502,
      "page": 1,
      "limit": 10
    }
  },
  "data": [
    {
      "id": 5298,
      "name": "Amish Bhattacharya",
      "email": "amish_bhattacharya@reynolds.net",
      "gender": "male",
      "status": "active"
    },
    {
      "id": 5297,
      "name": "Dwaipayana Singh",
      "email": "dwaipayana_singh@smith.info",
      "gender": "male",
      "status": "inactive"
    },
    {
      "id": 5295,
      "name": "Mr. Suryakanta Varman",
      "email": "mr_suryakanta_varman@gutkowski-weissnat.biz",
      "gender": "male",
      "status": "active"
    },
    {
      "id": 5293,
      "name": "Aatmaja Varma",
      "email": "varma_aatmaja@reilly-windler.info",
      "gender": "male",
      "status": "inactive"
    },
    {
      "id": 5292,
      "name": "Pres. Amish Namboothiri",
      "email": "amish_pres_namboothiri@schuppe.biz",
      "gender": "male",
      "status": "inactive"
    },
    {
      "id": 5291,
      "name": "Paramartha Shah",
      "email": "paramartha_shah@bergstrom-quigley.com",
      "gender": "male",
      "status": "active"
    },
    {
      "id": 5290,
      "name": "The Hon. Jay Dutta",
      "email": "jay_the_dutta_hon@vandervort.name",
      "gender": "female",
      "status": "active"
    },
    {
      "id": 5289,
      "name": "Aaratrika Varman",
      "email": "aaratrika_varman@beier.name",
      "gender": "female",
      "status": "active"
    },
    {
      "id": 5288,
      "name": "Sarla Pilla",
      "email": "sarla_pilla@feil.biz",
      "gender": "male",
      "status": "inactive"
    },
    {
      "id": 5287,
      "name": "Dhanalakshmi Desai PhD",
      "email": "phd_desai_dhanalakshmi@cremin.info",
      "gender": "male",
      "status": "active"
    }
  ]
}

```

**Syntax for extracting and validating data using check**

```js
val scn = scenario("Check Correlation and extract data")
    //First Call -Get All Users
    .exec(http("Get all Users Request").get("public-api/users")
      .check(jsonPath("$.data[0].id").saveAs("userId"))   // extracts id and saves it as userId
      .check(status is 200))
    .pause(3)

    //Second API - Get a specific user on the basis of id
    .exec(http("Get Specific User Request").get("public-api/users/${userId}") //  Saved userId is passed
    .check(jsonPath("$.data.id").is("5298"))  // validiting id
    .check(jsonPath("$.data.name").is("Amish Bhattacharya"))) // validating name
```

**Syntax for extracting complete response and using the response in following request**

```js
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

```






**Diffirent ways of checking status**

```js

1.status is 201
2.status.is(200)
3.status.not(400)
```


**Understanding pause**</br>
Pause as the name suggests is used for pausing the execution of your script.

**Different ways of Pausing**</br>

```js
1.pause(3) -> Would pause for 3 seconds
2.pause(1,10) -> Would pause between 1 to 10 seconds
3.pause(3000.milliseconds) -> Would pause for 3000 millisecond. For this we need to import package import scala.concurrent.duration.DurationInt

```

**Code Reuse in Gatling with Methods**</br>
In Gatling You can create generic method for each request and you can call them within Scenario. The return type of method should ChainBuilder so that the created request methods can be chained within Scenario

```js
 val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")

  def getAllUsersRequest():ChainBuilder ={
    exec(http("Get All Users request").get("/api/users?page=2").check(status is 200))
  }

  def getSingleUserRequest():ChainBuilder ={
    exec(http("Get User").get("/api/users/2").check(status is 200))
  }

  def addNewUser():ChainBuilder = {
      exec(http("Add User Request").post("/api/users")
        .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
        .header("content-type",value="application/json")
        .check(status is 201))
   }

  val scn= scenario("User Request Scenarios")
    .exec(getAllUsersRequest())
    .pause(2)
    .exec(getSingleUserRequest())
    .pause(2)
    .exec(addNewUser())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
```


**Gatling Looping Calls**</br>
Gatling provides very important feature called as Repeat to execute the request multiple times

**Read Data from external csv using Gatling**

**Sample CSV File**

```js
userid,name
5254,Ekdant Bharadwaj
5255,Ramaa Joshi
5256,Dulari Deshpande
```

CSV file can be read in 4 differnt ways like circular,shuffle,random,queue.

**Sample code to read from csv file**

```js
val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization",value = "Bearer 395d0049d1c794ec1232dadb5c645ee71c8e8bfdd40b51eb3142a90ea29897f9")

  //circular,shuffle,random,queue
  val csvFeeder=csv("./src/test/resources/data/getUser.csv").circular

  def getUser():ChainBuilder={
    repeat(3) //Repeat Request thrice
    {
      feed(csvFeeder) // Feeder for the request
        .exec(http("Get single user request").get("public-api/users/${userid}")
          .check(jsonPath("$.data.name").is("${name}"))
          .check(status is 200))
          .pause(2)
    }
  }

  val scn=scenario("Data Feder scenario")
    .exec(getUser())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

```

**Understanding Load Simulation with Gatling**

```js

setUp(scn.inject(nothingFor(5), // will do nothing for 5 second
    atOnceUsers(10), // would add 10 users at once
    rampUsers(10000) during(10 seconds)) // would add 10000 users in next 10 sec, For seocnds we have imported import scala.concurrent.duration._  and
 // import scala.language.postfixOps packages
    .protocols(httpConf))
```

```js

setUp(scn.inject(nothingFor(5), // will do nothing for 5 second
    atOnceUsers(10),// would add 10 users at once
    constantUsersPerSec(10) during (10 seconds), // Inject 10 users every second for next 10 sec
    rampUsersPerSec(1) to (5) during(20 seconds)) // would add users between 1 to 5 every second for next 20 seconds

    .protocols(httpConf))

```



### Referances

1.Best refrance - https://devqa.io/tag/gatling/ </br>
2.Naveen Automation Labs - https://www.youtube.com/watch?v=07vhobDuNWU&list=PLFGoYjJG_fqpwTGqK7GKWW7z10jF1G3qw
















 







