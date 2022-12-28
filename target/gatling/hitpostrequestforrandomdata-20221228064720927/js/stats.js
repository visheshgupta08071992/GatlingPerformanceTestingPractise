var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "402",
        "ok": "-",
        "ko": "402"
    },
    "maxResponseTime": {
        "total": "610",
        "ok": "-",
        "ko": "610"
    },
    "meanResponseTime": {
        "total": "452",
        "ok": "-",
        "ko": "452"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "-",
        "ko": "80"
    },
    "percentiles1": {
        "total": "419",
        "ok": "-",
        "ko": "419"
    },
    "percentiles2": {
        "total": "422",
        "ok": "-",
        "ko": "422"
    },
    "percentiles3": {
        "total": "572",
        "ok": "-",
        "ko": "572"
    },
    "percentiles4": {
        "total": "602",
        "ok": "-",
        "ko": "602"
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "-",
        "ko": "1.667"
    }
},
contents: {
"req_add-user-reques-edefa": {
        type: "REQUEST",
        name: "Add User Request 2",
path: "Add User Request 2",
pathFormatted: "req_add-user-reques-edefa",
stats: {
    "name": "Add User Request 2",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "402",
        "ok": "-",
        "ko": "402"
    },
    "maxResponseTime": {
        "total": "610",
        "ok": "-",
        "ko": "610"
    },
    "meanResponseTime": {
        "total": "452",
        "ok": "-",
        "ko": "452"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "-",
        "ko": "80"
    },
    "percentiles1": {
        "total": "419",
        "ok": "-",
        "ko": "419"
    },
    "percentiles2": {
        "total": "422",
        "ok": "-",
        "ko": "422"
    },
    "percentiles3": {
        "total": "572",
        "ok": "-",
        "ko": "572"
    },
    "percentiles4": {
        "total": "602",
        "ok": "-",
        "ko": "602"
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "-",
        "ko": "1.667"
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
