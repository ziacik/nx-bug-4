import * as dayjs from 'dayjs'

export function nodelib(): string {
  return dayjs().format();
}
