"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <Excalidraw
      UIOptions={{
        canvasActions: {
          loadScene: false,
          saveToActiveFile: false,
          export: false,
          toggleTheme: false,
        },
      }}
      renderTopRightUI={() => null}
    />
  );
};

export default ExcalidrawWrapper;
