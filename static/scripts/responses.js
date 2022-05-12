function getBotResponse(input) {
    const keywords = ["balanagar", "lb nagar", "nagole", "bowenpally", "saroor nagar", "amberpet", "tankbund", "paradise", "kompally", "dhulapally", "gandimaisamma", "bhadhurally", "musheerabad", "rtc x rd", "koti Womens Collge", "jbs", "uppal-x-roads", "survey of india", "tarnaka", "metugudam", "rail nilayam", "mmr gardens", "quthbullapur", "mangapur colony", "godavari homes", "suchithra", "as rao nagar", "lal bazar", "alwal", "ig statue", "bollaram", "rk puram", "yousufguda", "tivoli", "idpl", "chinthal", "jeedimetla", "sanath nagar", "sr", "nagar", "suraram", "balkampet", "jagthgirigutta", "gandhi", "nagar", "shapur", "gulmohr", "park", "raidarg", "botanical", " garden", "kondapur", "hafizpet", "lingampally", "chandanagar", "madinaguda", "gangaram", "allwyn", "x", "roads", "miyapur", "bus", "stop", "miyapur", "jp", "nagar", "the", "gym", "mallampet", "bachupally", "bacupally-x-roads", "scholarships", "gym", "nirf", "apj", "abdul", "kalam", "block", "dbms", "big", "size", "ferozguda", "daa"];
    //standardization
    input = input.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '')
    const word = input.split(" ");
    const final = [];
    var n = [];
    words = word.map(v => v.toLowerCase());
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < keywords.length; j++) {
            if (words[i] == keywords[j]) {
                final[i] = keywords[j]
                var n = final.filter(value => Object.keys(value).length !== 0);
            }
        }
    }
    n = n.join(" ")
    if (n.length == 0) {
        result = "x";
    }
    else {
        result = n;
    }
    //Start of dictionary that stores standardized inputs and results
    var dict = {
        "balanagar": "5B,2B",
        "lb nagar": "3S",
        "nagole": "3S",
        "bowenpally": "3S,1S",
        "saroor nagar": "1S",
        "amberpet": "1S",
        "tankbund": "1S",
        "paradise": "1S",
        "kompally": "1S,3S,4S,1L, MEDCHAL",
        "dhulapally": "1S, 3S, MEDCHAL",
        "gandimaisamma": "1S,3S,1L,3L,1B,2B,3B6J,3N, MEDCHAL",
        "bhadhurally": "1S,3S",
        "musheerabad": "4S",
        "rtc x rd": "4S",
        "koti Womens Collge": "4S",
        "jbs": "4S",
        "uppal-x-roads": " 3S,6S",
        "survey of india": "3S,6S",
        "tarnaka": "3S,6S",
        "metugudam": "3S,6S",
        "rail nilayam": "3S,6S",
        "mmr gardens": "3S,6S",
        "quthbullapur": "5S",
        "mangapur colony": "5S",
        "godavari homes": "5S",
        "suchithra": "1S,3S1L,4L,5L,5S,4S",
        "as rao nagar": "1L,L",
        "lal bazar": "2L4L,5L",
        "alwal": "2L,3L,4L,L",
        "ig statue": "4L,5S",
        "bollaram": "2L",
        "rk puram": "2L",
        "yousufguda": "2B,4B",
        "tivoli": "5B",
        "idpl": "1B,2B,5B,6B,8B,9B",
        "chinthal": "4B,5B,6B,9B",
        "jeedimetla": "3B,4B,6B,9B",
        "sanath nagar": "1B,2B,4B",
        "sr nagar": "1B,2B,4B",
        "suraram": "1B,5B,6B,9B,10B",
        "balkampet": "3B",
        "jagthgirigutta": "8B",
        "gandhi nagar": "8B,9B",
        "shapur": "6B,9B,10B",
        "gulmohr park": "2M",
        "raidarg": "1M",
        "botanical garden": "1M",
        "kondapur": "1M",
        "hafizpet": "1M",
        "lingampally": "2M,3M,5M,6M,BHEL-1, BHEL-2,BHEL-3, BHEL-4",
        "chandanagar": "2M,3M,5M,6M",
        "madinaguda": "2M,3M,5M,6M",
        "gangaram": "2M,3M,5M,6M",
        "allwyn x roads": "1M,2M,3M,5M,6M",
        "miyapur bus stop": "1M,2M,3M,5M,6M",
        "miyapur": "1M,2M,3M,5M,6M",
        "jp nagar": "1M,2M,3M,5M,6M",
        "mallampet": "1M,2M,3M,5M,6",
        "bachupally": "1M,2M,3M,5M,6M",
        "bachupally-x-roads": "1M,2M,3M,5M,6M",
        "scholarships": "Yes there are scholarships available.",
        "gym": "Yes there is a gym available and its on the upper floors of the indoor sports complex",
        "the gym": "The gym is on the upper floors of the indoor sports complex",
        "nirf": "In NIRF 2021,BVRITN was placed in the 201-250 rank band.",
        "apj abdul kalam block": "Just behind the gandhi statue",
        "dbms": "Deepika Ma'am",
        "big": "110 acres",
        "size": "110 acres",
        "ferozguda": "5B",
        "daa": "Karthik Sir",
        "else": "Try another spelling or some other query!"

    }
    return dict[n] || dict["else"]

}
