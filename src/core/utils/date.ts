interface MangoDate {
  format: (type: FORMAT_TYPE) => string;
}
export type FORMAT_TYPE = 'yyyy-MM-ddTHH:mm:ss';

const formats: Record<FORMAT_TYPE, (_date: Date) => string> = {
  ['yyyy-MM-ddTHH:mm:ss']: (_date: Date) => {
    let date = new Date(_date),
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let hour = '' + date.getHours(),
      min = '' + date.getMinutes(),
      sec = '' + date.getSeconds();
    if (hour.length < 2) hour = '0' + hour;
    if (min.length < 2) min = '0' + min;
    if (sec.length < 2) sec = '0' + sec;

    return [year, month, day].join('-') + 'T' + [hour, min, sec].join(':');
  },
};

const _format = (_date: Date, format?: FORMAT_TYPE) => {
  if (!_date) return '';
  if (format === 'yyyy-MM-ddTHH:mm:ss') {
    return formats['yyyy-MM-ddTHH:mm:ss'](_date);
  }
  return formats['yyyy-MM-ddTHH:mm:ss'](_date);
};

export const mangoDate = (_date: Date): MangoDate => {
  return {
    format: (type: FORMAT_TYPE) => _format(_date, type),
  };
};
