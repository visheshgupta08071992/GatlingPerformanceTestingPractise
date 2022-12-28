var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "percentiles1": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "percentiles2": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "percentiles3": {
        "total": "643",
        "ok": "643",
        "ko": "-"
    },
    "percentiles4": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.4",
        "ok": "0.4",
        "ko": "-"
    }
},
contents: {
"req_add-user-reques-b6131": {
        type: "REQUEST",
        name: "Add User Request 1",
path: "Add User Request 1",
pathFormatted: "req_add-user-reques-b6131",
stats: {
    "name": "Add User Request 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "percentiles2": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "percentiles3": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "percentiles4": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
}
    },"req_add-user-reques-edefa": {
        type: "REQUEST",
        name: "Add User Request 2",
path: "Add User Request 2",
pathFormatted: "req_add-user-reques-edefa",
stats: {
    "name": "Add User Request 2",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "percentiles2": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "percentiles3": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "percentiles4": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
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
