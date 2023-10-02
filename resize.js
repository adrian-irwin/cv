function resizeObject() {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    document.querySelector("#cv").setAttribute("width", width);

    const detectDeviceType = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
            ? "Mobile"
            : "Desktop";

    const deviceType = detectDeviceType();

    if (deviceType === "Desktop") {
        document.querySelector("#cv").setAttribute("height", height);
        document.querySelector("#cv").style.width = "100%";
        document.body.style.overflow = "hidden";
    }
}
resizeObject();
window.addEventListener("resize", resizeObject);
