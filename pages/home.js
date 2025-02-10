"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import Boards from "./boards";
import Sidebar from "./siderbar";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const boardsRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("fakeToken");
    if (!token) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 200,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);


  if (isLoading) {
    return (
      <div className="bg-slate-400 min-h-screen flex justify-center items-center">
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={(event) => boardsRef.current?.handleDragStart(event)}
      onDragEnd={(event) => boardsRef.current?.handleDragEnd(event)}
    >
      <div className="flex">
        <Sidebar />
        <Boards ref={boardsRef} />
      </div>
    </DndContext>
  );
};

export default Home;
