var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "maxResponseTime": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "meanResponseTime": {
        "total": "299",
        "ok": "-",
        "ko": "299"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "-",
        "ko": "122"
    },
    "percentiles1": {
        "total": "299",
        "ok": "-",
        "ko": "299"
    },
    "percentiles2": {
        "total": "359",
        "ok": "-",
        "ko": "359"
    },
    "percentiles3": {
        "total": "408",
        "ok": "-",
        "ko": "408"
    },
    "percentiles4": {
        "total": "418",
        "ok": "-",
        "ko": "418"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
    }
},
contents: {
"req_get-all-users-r-dfbe4": {
        type: "REQUEST",
        name: "Get all Users Request",
path: "Get all Users Request",
pathFormatted: "req_get-all-users-r-dfbe4",
stats: {
    "name": "Get all Users Request",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "maxResponseTime": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "meanResponseTime": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "percentiles2": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "percentiles3": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "percentiles4": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "-",
        "ko": "0.25"
    }
}
    },"req_get-specific-us-bbe86": {
        type: "REQUEST",
        name: "Get Specific User Request",
path: "Get Specific User Request",
pathFormatted: "req_get-specific-us-bbe86",
stats: {
    "name": "Get Specific User Request",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "maxResponseTime": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "meanResponseTime": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "percentiles2": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "percentiles3": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "percentiles4": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "-",
        "ko": "0.25"
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
