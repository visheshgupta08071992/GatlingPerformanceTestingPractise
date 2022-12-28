var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "886",
        "ko": "114"
    },
    "minResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "30109"
    },
    "maxResponseTime": {
        "total": "30344",
        "ok": "27670",
        "ko": "30344"
    },
    "meanResponseTime": {
        "total": "15367",
        "ok": "13455",
        "ko": "30230"
    },
    "standardDeviation": {
        "total": "9797",
        "ok": "8733",
        "ko": "60"
    },
    "percentiles1": {
        "total": "17301",
        "ok": "10367",
        "ko": "30227"
    },
    "percentiles2": {
        "total": "20398",
        "ok": "20317",
        "ko": "30278"
    },
    "percentiles3": {
        "total": "30240",
        "ok": "27402",
        "ko": "30328"
    },
    "percentiles4": {
        "total": "30321",
        "ok": "27462",
        "ko": "30342"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 88,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 730,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 114,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.258",
        "ok": "28.581",
        "ko": "3.677"
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
        "total": "1000",
        "ok": "886",
        "ko": "114"
    },
    "minResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "30109"
    },
    "maxResponseTime": {
        "total": "30344",
        "ok": "27670",
        "ko": "30344"
    },
    "meanResponseTime": {
        "total": "15367",
        "ok": "13455",
        "ko": "30230"
    },
    "standardDeviation": {
        "total": "9797",
        "ok": "8733",
        "ko": "60"
    },
    "percentiles1": {
        "total": "17301",
        "ok": "10367",
        "ko": "30227"
    },
    "percentiles2": {
        "total": "20398",
        "ok": "20317",
        "ko": "30278"
    },
    "percentiles3": {
        "total": "30240",
        "ok": "27402",
        "ko": "30328"
    },
    "percentiles4": {
        "total": "30321",
        "ok": "27462",
        "ko": "30342"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 88,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 730,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 114,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.258",
        "ok": "28.581",
        "ko": "3.677"
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
