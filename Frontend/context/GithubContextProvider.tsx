import { useState } from "react";
import GithubContext, { GithubContextType } from "../context/app-context";

const GithubContextProvider = (props: React.ReactNode) => {
  const context: GithubContextType = {};

  const [ctx, setCtx] = useState(context);

  const SetData = (context: GithubContextType) => {
    setCtx((origin) => {
      return {
        ...origin,
        ...context,
      };
    });
  };
  return (
    <GithubContext.Provider
      value={{
        ...ctx,
        SetData,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContextProvider;
