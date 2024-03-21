export function successWrap(data: any) {
  return {
    code: 0,
    message: "success",
    result: data,
  };
}
