import React, { useState } from "react";

// 规定 AppStateValue 类型
interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}
// 声明全局共享数据初始值
const defaultContextValue: AppStateValue = {
  username: "Taimin",
  shoppingCart: {
    items: [],
  },
};
// 创建上下文并导出 让其他各个组件可以使用共享的数据
export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);
// 创建provider组件， 包裹组件，并传递共享数据
export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appSetStateContext.Provider value={setState}>
      <appContext.Provider value={state}>{props.children}</appContext.Provider>
    </appSetStateContext.Provider>
  );
};
