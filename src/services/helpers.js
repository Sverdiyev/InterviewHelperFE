export function calculateElapedPostTime(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  const hour = Math.abs(Math.round(diff));
  if (hour == 0) {
    return 'posted less than 1 hour ago.';
  } else if (hour <= 24) {
    // less than one day ago, show hours
    return `posted ${hour} hours ago.`;
  } else if (hour < 720) {
    // less than 1 month ago, show days
    return `posted ${Math.round(hour / 24)} days ago.`;
  } else if (hour < 8640) {
    // less than 1 year ago, show months
    return `posted ${Math.round(hour / 720)} months ago.`;
  } else {
    // more than one year
    return `posted ${Math.round(hour / 8640)} years ago.`;
  }
}
