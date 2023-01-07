class Helper {
  static ExtractToken = (authToken: string) => {
    const tokenArray = authToken.split(" ");
    if (
      tokenArray.length != 2 ||
      tokenArray[0] !== "Bearer" ||
      tokenArray[1] === ""
    )
      return "";

    return tokenArray[1];
  };
}
export default Helper;
