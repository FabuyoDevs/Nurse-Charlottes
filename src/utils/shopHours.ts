export interface DaySchedule {
  day: string;
  shortDay: string;
  hours: string;
  statusText: string;
  note?: string;
}

export const SHOP_WEEKLY_HOURS: DaySchedule[] = [
  {
    day: 'Monday',
    shortDay: 'Mon',
    hours: '9:00 AM – 5:00 PM',
    statusText: 'Standard high-street retail hours',
  },
  {
    day: 'Tuesday',
    shortDay: 'Tue',
    hours: '9:00 AM – 5:00 PM',
    statusText: 'Standard high-street retail hours',
  },
  {
    day: 'Wednesday',
    shortDay: 'Wed',
    hours: '9:00 AM – 5:00 PM',
    statusText: 'Standard high-street retail hours',
  },
  {
    day: 'Thursday',
    shortDay: 'Thu',
    hours: '9:00 AM – 5:00 PM',
    statusText: 'Standard high-street retail hours',
  },
  {
    day: 'Friday',
    shortDay: 'Fri',
    hours: '9:00 AM – 5:00 PM',
    statusText: 'New community finds arrive throughout the week',
  },
  {
    day: 'Saturday',
    shortDay: 'Sat',
    hours: '9:00 AM – 5:00 PM',
    statusText: 'Busiest browsing day on Broad Street',
  },
  {
    day: 'Sunday',
    shortDay: 'Sun',
    hours: 'Closed or limited afternoon hours',
    statusText: 'Varies seasonally',
    note: 'Call 01905 617637 to confirm Sunday afternoon opening before travelling.',
  },
];

export interface LiveShopStatus {
  isOpenNow: boolean;
  statusBadge: string;
  statusSubtext: string;
  dayName: string;
  ukTimeFormatted: string;
  isSundaySeasonal: boolean;
}

export function getLiveShopStatus(date: Date = new Date()): LiveShopStatus {
  const ukTimeString = date.toLocaleTimeString('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const dayName = date.toLocaleDateString('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'long',
  });

  const [hourStr, minStr] = ukTimeString.split(':');
  const hour = parseInt(hourStr, 10);
  const min = parseInt(minStr, 10);
  const decimalHour = hour + min / 60;

  const isSunday = dayName === 'Sunday';
  const isMonToSat = !isSunday;

  if (isMonToSat && decimalHour >= 9 && decimalHour < 17) {
    return {
      isOpenNow: true,
      statusBadge: 'Open Today • Closes 5:00 PM',
      statusSubtext: 'Mon–Sat 9:00 AM – 5:00 PM • Broad St, Worcester',
      dayName,
      ukTimeFormatted: `${ukTimeString} UK`,
      isSundaySeasonal: false,
    };
  }

  if (isSunday) {
    return {
      isOpenNow: false,
      statusBadge: 'Sunday • Seasonal Hours',
      statusSubtext: 'Closed or limited afternoon hours (varies seasonally)',
      dayName,
      ukTimeFormatted: `${ukTimeString} UK`,
      isSundaySeasonal: true,
    };
  }

  return {
    isOpenNow: false,
    statusBadge: 'Closed • Opens Mon–Sat 9:00 AM',
    statusSubtext: 'Ring 01905 617637 for stock checks & bank holiday visits',
    dayName,
    ukTimeFormatted: `${ukTimeString} UK`,
    isSundaySeasonal: false,
  };
}
