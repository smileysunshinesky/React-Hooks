import { useState } from "react";

export default function StateFromFn() {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#";
  });
  return <div>This is {token}</div>;
}
