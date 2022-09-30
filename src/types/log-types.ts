interface Log {
  name?: string;
  type: "ERROR" | "INFO" | "WARN";
  data: Object | Array<Object | string | number> | [] | null | string | number;
  timestamp: Date;
}

interface LogAddDTO {
  name?: string;
  type: "ERROR" | "INFO" | "WARN";
  data: Object | Array<Object | string | number> | [] | null | string | number;
}
