import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { CodeEditor } from "@/components/CodeEditor";
import { HelperHeader } from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
import { useEffect } from "react";

export const Compiler = () => {
  const { urlId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCode = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/compiler/load",
          {
            urlId,
          }
        );
        dispatch(updateFullCode(response.data.fullCode));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error?.response?.status === 500) {
            toast("Invalid URL, Default Code Loaded");
          }
        }
        handleError(error);
      }
    };

    if (urlId) loadCode();
  }, [dispatch, urlId]);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
