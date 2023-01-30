import { ParkResponse } from './ParkResponse';

export interface APIResponse {
  message: string;
  data: ParkResponse[];
}
