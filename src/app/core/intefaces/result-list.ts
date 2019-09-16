export interface ResultList<T> {
  page?: number;
  sort?: string;
  limit?: number;
  offset?: number;
  list: T[];
}
