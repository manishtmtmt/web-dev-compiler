import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCodeValue } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

export const CodeEditor = () => {
  const dispatch = useDispatch();
  
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const onChange = React.useCallback(
    (value: string) => {
      dispatch(updateCodeValue(value));
    },
    [dispatch]
  );
  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      className="code-editor"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
};
