function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("3/5/2020 09:22:57");
    meetDay = new Date("11/2/2020");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    timeold2 = -(today.getTime() - meetDay.getTime());
    sectimeold = timeold / 1000
    sectimeold2 = timeold2 / 1000
    secondsold = Math.floor(sectimeold);
    secondsold2 = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    e_daysold2 = timeold2 / msPerDay
    daysold = Math.floor(e_daysold);
    daysold2 = Math.floor(e_daysold2);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = Math.floor((e_hrsold - hrsold) * 60);
    seconds = Math.floor((e_minsold - minsold) * 60);
    span_dt_dt.innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
    span_dt_dt2.innerHTML = daysold2 + "天";
}

show_date_time();