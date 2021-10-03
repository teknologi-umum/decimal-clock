// reference to requestAnimationFrame subscription
let renderRequest;

// reference to blazor page
let objRef

function startRenderLoop(obj) {
    objRef = obj;
    renderRequest = requestAnimationFrame(render);
}

function stopRenderLoop() {
    cancelAnimationFrame(renderRequest);
}

async function render() {
    // call Render method in blazor page
    await objRef.invokeMethodAsync("Render")
    requestAnimationFrame(render);
}