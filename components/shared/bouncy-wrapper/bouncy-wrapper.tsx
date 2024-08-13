import React from "react";

function BouncyWrapper({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: Array<any>;
}) {
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const { scrollHeight } = wrapper;
      //@ts-ignore
      wrapper.style.maxHeight = `${scrollHeight}px`;
    }
  }, [trigger.length]);

  return (
    <div
      ref={wrapperRef}
      className="flex flex-wrap gap-4 transition-[max-height] ease-linear duration-500 overflow-hidden w-full"
      style={{ maxHeight: 0 }}
    >
      {children}
    </div>
  );
}

export default BouncyWrapper;
