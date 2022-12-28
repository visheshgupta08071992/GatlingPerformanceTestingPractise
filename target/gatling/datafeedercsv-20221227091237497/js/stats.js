var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "3",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "135",
        "ok": "135",
        "ko": "207"
    },
    "maxResponseTime": {
        "total": "383",
        "ok": "383",
        "ko": "207"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "243",
        "ko": "207"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "104",
        "ko": "0"
    },
    "percentiles1": {
        "total": "209",
        "ok": "210",
        "ko": "207"
    },
    "percentiles2": {
        "total": "253",
        "ok": "297",
        "ko": "207"
    },
    "percentiles3": {
        "total": "357",
        "ok": "366",
        "ko": "207"
    },
    "percentiles4": {
        "total": "378",
        "ok": "380",
        "ko": "207"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1.5",
        "ko": "0.5"
    }
},
contents: {
"req_get-single-user-014f5": {
        type: "REQUEST",
        name: "Get single user request",
path: "Get single user request",
pathFormatted: "req_get-single-user-014f5",
stats: {
    "name": "Get single user request",
    "numberOfRequests": {
        "total": "4",
        "ok": "3",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "135",
        "ok": "135",
        "ko": "207"
    },
    "maxResponseTime": {
        "total": "383",
        "ok": "383",
        "ko": "207"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "243",
        "ko": "207"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "104",
        "ko": "0"
    },
    "percentiles1": {
        "total": "209",
        "ok": "210",
        "ko": "207"
    },
    "percentiles2": {
        "total": "253",
        "ok": "297",
        "ko": "207"
    },
    "percentiles3": {
        "total": "357",
        "ok": "366",
        "ko": "207"
    },
    "percentiles4": {
        "total": "378",
        "ok": "380",
        "ko": "207"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1.5",
        "ko": "0.5"
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
