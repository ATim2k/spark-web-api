function formatTime(format: string = 'YYYY-MM-DD HH:mm:ss', date: Date = new Date(), timezoneOffset: number = 8): string {
    const utcOffset = new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(date.getTime() + utcOffset + (3600000 * timezoneOffset));
    const pad = (n: number) => n < 10 ? '0' + n : n;
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match): any => {
        switch (match) {
            case 'YYYY':
                return localTime.getFullYear().toString();
            case 'MM':
                return pad(localTime.getMonth() + 1);
            case 'DD':
                return pad(localTime.getDate());
            case 'HH':
                return pad(localTime.getHours());
            case 'mm':
                return pad(localTime.getMinutes());
            case 'ss':
                return pad(localTime.getSeconds());
        }
    });
}

function validateTime(str: string) {
    let arr = str.split(",");
    if (arr.length !== 6) {
        console.log("格式不正确");
        return;
    }
    let year = Number(arr[0]);
    let month = Number(arr[1]);
    let day = Number(arr[2]);
    let hour = Number(arr[3]);
    let minute = Number(arr[4]);
    let second = Number(arr[5]);
    if (
        isNaN(year) ||
        isNaN(month) ||
        isNaN(day) ||
        isNaN(hour) ||
        isNaN(minute) ||
        isNaN(second)
    ) {
        console.log("格式不正确");
        return;
    }
    let inputTime = new Date(year, month - 1, day, hour, minute, second);
    let currentTime = new Date();
    let diff = inputTime.getTime() - currentTime.getTime();
    if (diff > 10000) {
        let diffSeconds = Math.floor(diff / 1000);
        console.log(`这个时间 > 现在时间, 空隔${diffSeconds}秒`);
        return "ok"
    } else {
        return "推送时间必须大于现行时间10秒"
    }
}


export { formatTime, validateTime }