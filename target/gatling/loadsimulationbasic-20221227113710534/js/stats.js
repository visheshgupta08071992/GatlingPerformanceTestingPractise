var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1010",
        "ok": "1010",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10107",
        "ok": "10107",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2213",
        "ok": "2213",
        "ko": "-"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles2": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7107",
        "ok": "7107",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10081",
        "ok": "10081",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 915,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 95,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.412",
        "ok": "59.412",
        "ko": "-"
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
        "total": "1010",
        "ok": "1010",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10107",
        "ok": "10107",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2213",
        "ok": "2213",
        "ko": "-"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles2": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7107",
        "ok": "7107",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10081",
        "ok": "10081",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 915,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 95,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.412",
        "ok": "59.412",
        "ko": "-"
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
