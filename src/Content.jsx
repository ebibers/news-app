import { forwardRef } from "react";

const Content = forwardRef(({}, ref) => {
    return(
        <div ref={ref} className="h-screen w-full">

        </div>
    );
})

export default Content