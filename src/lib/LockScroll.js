export const lockScroll = (shouldLockScroll)=>{
        if (shouldLockScroll) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        // clean up function
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
}
