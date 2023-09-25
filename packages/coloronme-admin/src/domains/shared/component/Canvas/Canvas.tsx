import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Button, CircleDrawing, LeftArrow, Pencil, Penwidth, RightArrow, TextIcon, Trash, color } from '@design';
import IconButton from '../../component/IconButton';
import { Eraser } from '../../../../../../design/src/assets/icons/Eraser';

interface CanvasProps {
  value?: fabric.Object[];
  onChange?: (objects: fabric.Object[]) => void;
}

export default function Canvas({ value, onChange }: CanvasProps) {
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const history: fabric.Object[] = [];
  const [canvasControl, setCanvasControl] = useState({
    textable: false,
    isDrawing: false,
    removable: false,
  });

  const onAddText = () => {
    if (fabricRef.current) {
      const text = new fabric.IText('Test', {
        left: 100, // x 좌표
        top: 100, // y 좌표
        fontSize: 24, // 폰트 크기
        fill: 'red', // 텍스트 색상
        fontFamily: 'Arial', // 폰트 패밀리
      });
      //   text.selectable = true;
      fabricRef.current.add(text);
    }
  };
  const onTogglePencil = () => {
    if (fabricRef.current) {
      if (canvasControl.isDrawing) {
        fabricRef.current.isDrawingMode = false;
        setCanvasControl((prev) => ({ isDrawing: false, removable: false, textable: false }));
      } else {
        fabricRef.current.isDrawingMode = true;
        fabricRef.current.freeDrawingBrush.color = 'black';
        fabricRef.current.freeDrawingBrush.width = 2;
        setCanvasControl((prev) => ({ isDrawing: true, removable: false, textable: false }));
      }
    }
  };
  const onAddCircle = () => {
    if (fabricRef.current) {
      const circle = new fabric.Circle({
        left: 100, // x 좌표
        top: 100, // y 좌표
        radius: 50, // 반지름
        fill: 'blue', // 채우기 색상
      });
      fabricRef.current.add(circle);
    }
  };
  const onToggleEraser = () => {
    if (fabricRef.current) {
      if (canvasControl.removable) {
        fabricRef.current.isDrawingMode = false;
        setCanvasControl((prev) => ({ isDrawing: false, removable: false, textable: false }));
      } else {
        fabricRef.current.isDrawingMode = true;
        fabricRef.current.freeDrawingBrush.color = '#fff';
        fabricRef.current.freeDrawingBrush.width = 20;
        setCanvasControl((prev) => ({ isDrawing: false, removable: true, textable: false }));
      }
    }
  };
  const undo = () => {
    if (fabricRef.current) {
      const editor = fabricRef.current;
      if (fabricRef.current._objects.length > 0) {
        const popedObject = editor._objects.pop();
        if (popedObject) {
          history.push(popedObject);
        }

        const objects = fabricRef.current.getObjects();
        if (onChange) {
          onChange(objects);
        }
      }
      editor.renderAll();
    }
  };
  const redo = () => {
    if (fabricRef.current) {
      const editor = fabricRef.current;
      if (history.length > 0) {
        const popedObject = history.pop();
        if (popedObject) {
          editor.add(popedObject);
        }
      }
    }
  };

  const clear = () => {
    if (fabricRef.current) {
      const editor = fabricRef.current;
      editor._objects.splice(0, editor._objects.length);
      history.splice(0, history.length);
      editor.renderAll();
      const objects = fabricRef.current.getObjects();
      if (onChange) {
        onChange(objects);
      }
    }
  };

  const resizeCanvas = () => {
    if (fabricRef.current && canvasRef.current) {
      fabricRef.current.setWidth(280);
      fabricRef.current.setHeight(500);
      fabricRef.current.renderAll(); // 다시 렌더링
    }
  };

  useEffect(() => {
    const initFabric = () => {
      fabricRef.current = new fabric.Canvas(canvasRef.current);
      resizeCanvas();
    };

    const disposeFabric = () => {
      if (fabricRef.current) {
        fabricRef.current.dispose();
      }
    };

    initFabric();

    return () => {
      disposeFabric();
    };
  }, []);

  useEffect(() => {
    function handleCanvasChange() {
      // 캔버스에서 변화가 감지되었을 때 수행할 작업을 여기에 추가
      if (fabricRef.current) {
        const objects = fabricRef.current.getObjects();
        if (onChange) {
          onChange(objects);
        }
      }

      // 캔버스의 현재 객체 정보 가져오기
    }

    if (fabricRef.current) {
      fabricRef.current.on('object:modified', handleCanvasChange);
      fabricRef.current.on('object:added', handleCanvasChange);
      fabricRef.current.on('object:removed', handleCanvasChange);
    }

    return () => {
      if (fabricRef.current) {
        fabricRef.current.off('object:modified', handleCanvasChange);
        fabricRef.current.off('object:added', handleCanvasChange);
        fabricRef.current.off('object:removed', handleCanvasChange);
      }
    };
  }, []);

  useEffect(() => {
    if (value) {
      value.forEach((object) => {
        if (fabricRef.current) {
          fabricRef.current.add(object);
        }
      });
    }
  }, []);

  return (
    <>
      <div
        css={css`
          border: 1px solid ${color.gray.gray020};
          border-radius: 5px;
        `}
      >
        <div
          css={css`
            width: 282px;
            height: 43px;
            border-bottom: 1px solid ${color.gray.gray020};
            background-color: ${color.gray.gray020};
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          `}
        >
          <IconButton onClick={onAddText}>
            <TextIcon width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
          <IconButton isActive={canvasControl.isDrawing} onClick={onTogglePencil}>
            <Pencil width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
          <IconButton>
            <Penwidth width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
          <IconButton onClick={onAddCircle}>
            <CircleDrawing width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
          <IconButton onClick={undo}>
            <LeftArrow width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
          <IconButton onClick={redo}>
            <RightArrow width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
          <IconButton isActive={canvasControl.removable} onClick={onToggleEraser}>
            <Eraser width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
          <IconButton onClick={clear}>
            <Trash width="13" height="13" color={`${color.gray.gray050}`} />
          </IconButton>
        </div>
        <canvas ref={canvasRef} />
      </div>
    </>
  );
}
