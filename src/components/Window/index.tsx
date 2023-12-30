import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

interface WindowProps {}

export function Window() {
  function handleStart(e: DraggableEvent, data: DraggableData) {
    console.log('Drag started: ', e);
    console.log('Data: ', data);
  }

  function handleDrag(e: DraggableEvent, data: DraggableData) {
    console.log('Dragging: ', e);
    console.log('Data: ', data);
  }

  function handleStop(e: DraggableEvent, data: DraggableData) {
    console.log('Drag stopped: ', e);
    console.log('Data: ', data);
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={undefined}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div className="w-fit">
        <div className="handle">Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>
  );
}
