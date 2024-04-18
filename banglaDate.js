// Bangla Date library
// Author: Jahid Hasan Sami
// Date: 15 Apr 2024, 2 Boishakh 1431
// License: MIT LICENSE
// Version: 1.0.0

class BanglaDate {
  // the class takes default input as Gregorean Date, parameter gr:false sould be passed to give Bangla date as input.
  constructor({ date, gr = true } = { gr: true }) {
    this.isGreg = date ? gr : true;
    if (!date) {
      this.date = new Date();
    }
    if (this.isGreg === true) {
      this.date = date ? new Date(date) : this.date; // if date is empty it takes current date
      this.fullYear = this.date.getFullYear();
      this.month = this.date.getMonth();
      this.dateNum = this.date.getDate();
      this.day = this.date.getDay();
      this.isleap =
        (this.fullYear % 4 === 0 && this.fullYear % 100 !== 0) ||
        this.fullYear % 400 === 0
          ? 1
          : 0;
      this.isbefore = this.fullYear < 2019 ? 1 : 0; // is the date before the modification made in 2019
      this.months = [
        { startDate: 15, prevMonthDays: 30 },
        { startDate: 14, prevMonthDays: 30 },
        { startDate: 15, prevMonthDays: 29 },
        { startDate: 14, prevMonthDays: 30 },
        { startDate: 15, prevMonthDays: 31 },
        { startDate: 15, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 31 },
        { startDate: 17, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 30 },
        { startDate: 16, prevMonthDays: 30 },
      ];

      // currects for previous dates of 2019 and for leap year
      if (this.isbefore) {
        const startingDates = [14, 13, 15, 14, 15, 15, 16, 16, 16, 16, 15, 15];

        for (let i = 0; i < 12; i++) {
          this.months[i].startDate = startingDates[i];
        }
        this.months[2].prevMonthDays = 30;
        this.months[9].prevMonthDays = 30;

        if (this.isleap) {
          this.months[2].prevMonthDays = 31;
        }
      } else {
        if (this.isleap) {
          this.months[2].prevMonthDays = 30;
        }
      }
    } else {
      // need some work for Bangla date input
      this.date = date;
      this.dateArr = new CustomDate(this.date).parse();
      this.date = new Date(this.dateArr[0]);
      this.isGreg = true;
      this.fullYear = this.date.getFullYear();
      this.month = this.date.getMonth();
      this.dateNum = this.date.getDate();
      this.day = this.date.getDay();
      this.isleap =
        (this.fullYear % 4 === 0 && this.fullYear % 100 !== 0) ||
        this.fullYear % 400 === 0
          ? 1
          : 0;
      this.isbefore = this.fullYear < 2019 ? 1 : 0; // is the date before the modification made in 2019
      this.months = [
        { startDate: 15, prevMonthDays: 30 },
        { startDate: 14, prevMonthDays: 30 },
        { startDate: 15, prevMonthDays: 29 },
        { startDate: 14, prevMonthDays: 30 },
        { startDate: 15, prevMonthDays: 31 },
        { startDate: 15, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 31 },
        { startDate: 17, prevMonthDays: 31 },
        { startDate: 16, prevMonthDays: 30 },
        { startDate: 16, prevMonthDays: 30 },
      ];

      // currects for previous dates of 2019 and for leap year
      if (this.isbefore) {
        const startingDates = [14, 13, 15, 14, 15, 15, 16, 16, 16, 16, 15, 15];

        for (let i = 0; i < 12; i++) {
          this.months[i].startDate = startingDates[i];
        }
        this.months[2].prevMonthDays = 30;
        this.months[9].prevMonthDays = 30;

        if (this.isleap) {
          this.months[2].prevMonthDays = 31;
        }
      } else {
        if (this.isleap) {
          this.months[2].prevMonthDays = 30;
        }
      }
    }
  }

  getFullYear() {
    if (this.isGreg === true) {
      let banglaFullYear = this.fullYear - 593;
      if (this.month < 3 || (this.month === 3 && this.dateNum < 14)) {
        banglaFullYear -= 1;
      }
      return banglaFullYear;
    }
  }

  getMonth() {
    let banglaMonth;
    //Bangla first month starts on the 14th fourth month of greg(month number is 3). so it subtracts 3 if it is after the day on which bangla month starts. and if it is after or on the starting day it is previous month so additional 1 is subtracted.
    if (this.dateNum < this.months[this.month].startDate) {
      banglaMonth = this.month - 4;
    } else {
      banglaMonth = this.month - 3;
    }
    if (Math.sign(banglaMonth) == -1) {
      banglaMonth = 12 + banglaMonth;
    }
    return banglaMonth;
  }

  getDate() {
    let banglaDate;

    if (this.dateNum < this.months[this.month].startDate) {
      banglaDate =
        this.dateNum +
        this.months[this.month].prevMonthDays -
        this.months[this.month].startDate +
        1;
    } else {
      banglaDate = this.dateNum - this.months[this.month].startDate + 1;
    }

    return banglaDate;
  }

  getDay() {
    return this.date.getDay();
  }

  getHours() {
    return this.date.getHours();
  }

  getMinutes() {
    return this.date.getMinutes();
  }

  getSeconds() {
    return this.date.getSeconds();
  }

  getMilliseconds() {
    return this.date.getMilliseconds();
  }

  getTime() {
    return this.date.getTime();
  }

  enDate() {
    return this.date;
  }

  toString(
    { en = false, dayName = false, dd = true, monthName = true } = {
      en: false,
      dayName: false,
      dd: true,
      monthName: true,
    }
  ) {
    let date = this.getDate();
    let month = this.getMonth() + 1;
    let year = this.getFullYear();

    let months;
    let dayNames;

    if (dd) {
      date = date < 10 ? `0${date}` : `${date}`;
      month = month < 10 ? `0${month}` : `${month}`;
    }
    if (en === false) {
      months = [
        "বৈশাখ",
        "জ্যৈষ্ঠ",
        "আষাঢ়",
        "শ্রাবণ",
        "ভাদ্র",
        "আশ্বিন",
        "কার্তিক",
        "অগ্রহায়ণ",
        "পৌষ",
        "মাঘ",
        "ফাল্গুন",
        "চৈত্র",
      ];

      dayNames = [
        "রবিবার",
        "সোমবার",
        "মঙ্গলবার",
        "বুধবার",
        "বৃহস্পতিবার",
        "শুক্রবার",
        "শনিবার",
      ];

      date = toBanglaNumber(date);
      month = toBanglaNumber(month);
      year = toBanglaNumber(year);
    } else if (en === true) {
      months = [
        "Boishakh",
        "Joishtho",
        "Aasharh",
        "Srabon",
        "Bhadro",
        "Ashwin",
        "kartik",
        "Ograhayon",
        "Poush",
        "Maagh",
        "Falgun",
        "Choitro",
      ];

      dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    }

    let dName = dayNames[this.getDay()];
    let mName = months[this.getMonth()];

    let str = monthName
      ? `${date} ${mName} ${year}`
      : `${date}/${month}/${year}`;

    str += dayName ? `, ${dName}` : ``;
    return str;
  }

  toTimeString(
    { en = false, s = false, tt = true, detailed = false } = {
      en: false,
      s: false,
      tt: true,
      detailed: false,
    }
  ) {
    let time = {
      hours: this.getHours(),
      minutes: this.getMinutes(),
      seconds: this.getSeconds(),
    };

    if (time.hours >= 5 && time.hours < 12) {
      time.timeName = en ? "am" : "সকাল";
    } else if (time.hours >= 12 && time.hours < 15) {
      time.timeName = en ? "pm" : "দুপুর";
    } else if (time.hours >= 15 && time.hours < 18) {
      time.timeName = en ? "pm" : "বিকাল";
    } else if (time.hours >= 18 && time.hours < 20) {
      time.timeName = en ? "pm" : "সন্ধ্যা";
    } else if (time.hours >= 20 && time.hours <= 23) {
      time.timeName = en ? "pm" : "রাত";
    } else if (time.hours >= 0 && time.hours < 5) {
      time.timeName = en ? "am" : "রাত";
    }

    time.hours -= time.hours > 12 ? 12 : 0;

    if (tt) {
      time.hours = time.hours < 10 ? `0${time.hours}` : `${time.hours}`;
      time.minutes = time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`;
      time.seconds = time.seconds < 10 ? `0${time.seconds}` : `${time.seconds}`;
    }

    if (!en) {
      time.hours = toBanglaNumber(time.hours);
      time.minutes = toBanglaNumber(time.minutes);
      time.seconds = toBanglaNumber(time.seconds);
    }

    let str = `${time.timeName} `;
    str += `${time.hours}:${time.minutes}`;
    str += s ? `:${time.seconds}` : ``;

    if (detailed) {
      str = `${time.timeName} `;
      str += `${time.hours} টা বেজে ${time.minutes} মিনিট`;
      str += s ? ` ${time.seconds} সেকেন্ড` : ``;
    }

    return str;
  }
}

//converts english number to bangla
function toBanglaNumber(number) {
  const banglaDigits = [
    "০",
    "১",
    "২",
    "৩",
    "৪",
    "৫",
    "৬",
    "৭",
    "৮",
    "৯",
    "/",
    "-",
  ];

  const englishDigits = number.toString().split("");
  const banglaNumber = englishDigits
    .map((digit) => (digit >= 0 || digit <= 9 ? banglaDigits[digit] : digit))
    .join("");
  return banglaNumber;
}

class CustomDate {
  constructor(dateString) {
    this.dateString = dateString;
  }

  splitDate() {
    let dte, tme;
    [dte, tme] = this.dateString.split("T");
    let dd, mm, yyyy;
    let HH, MM, SS, tz;
    [yyyy, mm, dd] = dte.split("-");
    if (tme) {
      if (tme.split("Z")[tme.split("Z").length - 1] === "") {
        [tme] = tme.split("Z");
        tz = 0;
      } else {
        if (tme.split("+")[1]) {
          let interm;
          [tme, interm] = tme.split("+");
          let [ho, mo] = interm.split(":");
          tz = parseInt(ho, 10) * 60 + parseInt(mo, 10);
        } else if (tme.split("-")[1]) {
          let interm;
          [tme, interm] = tme.split("-");
          let [ho, mo] = interm.split(":");
          tz = -(parseInt(ho, 10) * 60 + parseInt(mo, 10));
        } else {
          tz = new Date().getTimezoneOffset();
        }
      }
      [HH, MM, SS] = tme.split(":");
    }

    if (yyyy && !mm && !dd && yyyy.split("/").length == 3) {
      [mm, dd, yyyy] = yyyy.split("/");
    }
    const toret = {
      year: yyyy,
      month: mm,
      day: dd,
      hours: HH,
      minutes: MM,
      seconds: SS,
      timeZoneOffset: tz,
    };
    for (const key in toret) {
      if (key != "timeZoneOffset") toret[key] = !toret[key] ? 0 : toret[key];
      if (key == "timeZoneOffset" && !toret[key])
        toret[key] = new Date().getTimezoneOffset();
      toret[key] = parseInt(toret[key]);
    }
    toret.day = toret.day === 0 ? 1 : toret.day;
    toret.month -= toret.month !== 0 ? 1 : 0;
    return toret;
  }

  parse() {
    this.destructured = this.splitDate(this.dateString);
    this.isbefore = this.destructured.year < 1426;
    this.parsed = {};
    console.log(this.destructured);
    console.log(this.isbefore);

    // year calculation
    if (this.isbefore) {
      this.parsed.year =
        this.destructured.month < 8 ||
        (this.destructured.month === 8 && this.destructured.day < 18)
          ? this.destructured.year + 593
          : this.destructured.year + 594;
    } else {
      this.parsed.year =
        this.destructured.month < 8 ||
        (this.destructured.month === 8 && this.destructured.day < 17)
          ? this.destructured.year + 593
          : this.destructured.year + 594;
    }

    console.log(this.parsed);

    this.isleap =
      (this.parsed.year % 4 === 0 && this.parsed.year % 100 !== 0) ||
      this.parsed.year % 400 === 0
        ? 1
        : 0;

    // materials
    this.months = [
      { startDate: 18, prevMonthDays: 30 },
      { startDate: 18, prevMonthDays: 31 },
      { startDate: 17, prevMonthDays: 30 },
      { startDate: 17, prevMonthDays: 31 },
      { startDate: 17, prevMonthDays: 31 },
      { startDate: 16, prevMonthDays: 30 },
      { startDate: 17, prevMonthDays: 31 }, //16
      { startDate: 17, prevMonthDays: 30 }, //16
      { startDate: 18, prevMonthDays: 31 }, //17
      { startDate: 19, prevMonthDays: 31 }, //18
      { startDate: 17, prevMonthDays: 28 }, //16 //isleap 17 //isbefore isleap 18
      { startDate: 18, prevMonthDays: 31 },
    ];

    if (!this.isbefore) {
      this.months[6].startDate = 16;
      this.months[7].startDate = 16;
      this.months[8].startDate = 17;
      this.months[9].startDate = 18;
      this.months[10].startDate = 16;
    }

    this.months[10].startDate += this.isleap ? 1 : 0;

    //month
    if (
      this.destructured.day < this.months[this.destructured.month].startDate
    ) {
      this.parsed.month = this.destructured.month - 9;
    } else {
      this.parsed.month = this.destructured.month - 8;
    }
    if (Math.sign(this.parsed.month) == -1) {
      this.parsed.month = 12 + this.parsed.month;
    }

    //Date
    if (
      this.destructured.day < this.months[this.destructured.month].startDate
    ) {
      this.parsed.day =
        this.destructured.day +
        this.months[this.destructured.month].prevMonthDays -
        this.months[this.destructured.month].startDate +
        1;
    } else {
      this.parsed.day =
        this.destructured.day -
        this.months[this.destructured.month].startDate +
        1;
    }

    this.parsed.hours = padZero(this.destructured.hours);
    this.parsed.minutes = padZero(this.destructured.minutes);
    this.parsed.seconds = padZero(this.destructured.seconds);

    this.parsed.offset = {
      sign: Math.sign(this.destructured.timeZoneOffset) == -1 ? "-" : "+",
      hoursOffset: Math.abs(this.destructured.timeZoneOffset / 60),
      minutesOffset: Math.abs(this.destructured.timeZoneOffset % 60),
    };

    this.parsed.offset.hoursOffset = padZero(this.parsed.offset.hoursOffset);
    this.parsed.offset.minutesOffset = padZero(
      this.parsed.offset.minutesOffset
    );

    this.parsed.offset = `${this.parsed.offset.sign}${this.parsed.offset.hoursOffset}:${this.parsed.offset.minutesOffset}`;
    this.parsed.month = padZero(this.parsed.month + 1);
    this.parsed.day = padZero(this.parsed.day);
    this.parsed.year =
      this.parsed.year < 1000
        ? this.parsed.year < 100
          ? this.parsed.year < 10
            ? `000${this.parsed.year}`
            : `00${this.parsed.year}`
          : `0${this.parsed.year}`
        : `${this.parsed.year}`;

    let toret = [
      `${this.parsed.year}-${this.parsed.month}-${this.parsed.day}T${this.parsed.hours}:${this.parsed.minutes}:${this.parsed.seconds}${this.parsed.offset}`,
      `${this.parsed.offset}`,
    ];

    return toret;
  }
}

function padZero(num) {
  let toret = parseInt(num);
  toret = toret < 10 ? `0${toret}` : `${toret}`;
  return toret;
}

// export default BanglaDate;
