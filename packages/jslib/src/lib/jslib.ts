import * as dayjs from 'dayjs'

export function jslib(): string {
  return dayjs().format();
}
