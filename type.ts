export interface Queue {
  name: string;
  id: string;
  day: string;
  number: string;
}
export interface Doctor {
  start: string;
  finish: string;
  time: number;
  text: string;
  name: string;
  service: string;
  id: string;
  tel: string;
}

export interface HaveQueue {
    index : number,
    time : number
}

export interface DoctorData {
  name: string
  profile: string
}