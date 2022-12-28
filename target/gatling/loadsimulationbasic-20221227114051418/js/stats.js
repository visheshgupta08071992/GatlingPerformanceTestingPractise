var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10010",
        "ok": "3979",
        "ko": "6031"
    },
    "minResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "30004"
    },
    "maxResponseTime": {
        "total": "30340",
        "ok": "28214",
        "ko": "30340"
    },
    "meanResponseTime": {
        "total": "23458",
        "ok": "13490",
        "ko": "30034"
    },
    "standardDeviation": {
        "total": "10228",
        "ok": "9913",
        "ko": "20"
    },
    "percentiles1": {
        "total": "30022",
        "ok": "10196",
        "ko": "30031"
    },
    "percentiles2": {
        "total": "30033",
        "ok": "20167",
        "ko": "30039"
    },
    "percentiles3": {
        "total": "30056",
        "ok": "27158",
        "ko": "30071"
    },
    "percentiles4": {
        "total": "30107",
        "ok": "27223",
        "ko": "30112"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 946,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3032,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 6031,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "244.146",
        "ok": "97.049",
        "ko": "147.098"
    }
},
contents: {
"req_get-user-reques-2f345": {
        type: "REQUEST",
        name: "Get User Request",
path: "Get User Request",
pathFormatted: "req_get-user-reques-2f345",
stats: {
    "name": "Get User Request",
    "numberOfRequests": {
        "total": "10010",
        "ok": "3979",
        "ko": "6031"
    },
    "minResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "30004"
    },
    "maxResponseTime": {
        "total": "30340",
        "ok": "28214",
        "ko": "30340"
    },
    "meanResponseTime": {
        "total": "23458",
        "ok": "13490",
        "ko": "30034"
    },
    "standardDeviation": {
        "total": "10228",
        "ok": "9913",
        "ko": "20"
    },
    "percentiles1": {
        "total": "30022",
        "ok": "10196",
        "ko": "30031"
    },
    "percentiles2": {
        "total": "30033",
        "ok": "20167",
        "ko": "30039"
    },
    "percentiles3": {
        "total": "30056",
        "ok": "27158",
        "ko": "30071"
    },
    "percentiles4": {
        "total": "30107",
        "ok": "27223",
        "ko": "30112"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 946,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3032,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 6031,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "244.146",
        "ok": "97.049",
        "ko": "147.098"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
