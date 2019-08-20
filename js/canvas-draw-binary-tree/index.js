const canvas = document.getElementById("canvasArea");
const context = canvas.getContext("2d");

const THETA = 32 * 3.1415 / 180;
const SHIFT_CCW = -90 * 3.1415 / 180;

function toRad(degree) {
    return degree * (3.1415 / 180);
}

function drawBranch(level, x, y, len, theta) {
    const x1 = x + len * Math.cos(theta + SHIFT_CCW);
    const y1 = y + len * Math.sin(theta + SHIFT_CCW);

    context.moveTo(x, y);
    context.lineTo(x1, y1);

    if (level > 1) {
        drawBranch(level - 1, x1, y1, len * 0.8, (theta - THETA)); // * Math.random()));
        drawBranch(level - 1, x1, y1, len * 0.8, (theta + THETA)); // * Math.random()));
    }
}

function drawCoordinateSystem() {
    context.beginPath();
    context.strokeStyle = 'gray';
    context.lineWidth = 1;
    context.moveTo(0, 300);
    context.lineTo(800, 300);
    context.moveTo(400, 0);
    context.lineTo(400, 600)
    context.stroke();
    context.closePath();
}

function drawBinaryTree(depth) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCoordinateSystem();
    context.beginPath();
    context.strokeStyle = 'black';

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    const lineLength = 60;

    drawBranch(depth, x, canvas.height, lineLength, 0); // recursive solution

    let endPoints = [];
    for (let i = 0; i < depth; ++i) {
        if (i == 0) {
            const endPoint = drawLineFrom(x, y, lineLength, -90);
            endPoints.push(endPoint);
        } else {
            const newEndPoints = [];
            console.log('endPoints size: ', endPoints.length);
            endPoints.forEach(endPoint => {
                newEndPoints.push(drawLineFrom(endPoint.x, endPoint.y, endPoint.lineLength * .8, endPoint.theta - 32));
                newEndPoints.push(drawLineFrom(endPoint.x, endPoint.y, endPoint.lineLength * .8, endPoint.theta + 32));
            });
            endPoints = newEndPoints;
        }
    }

    context.stroke();
    context.closePath();
}

function drawLineFrom(x, y, lineLength, theta) {
    const x1 = lineLength * Math.cos(toRad(theta));
    const y1 = lineLength * Math.sin(toRad(theta));

    context.moveTo(x, y);
    context.lineTo(x + x1, y + y1);

    return {
        x: x + x1,
        y: y + y1,
        theta,
        lineLength
    };
}

document
    .getElementById('depth')
    .addEventListener('input', (event) => {
        reDraw();
    });


function showCurrentDepthValue(depth) {
    document.getElementById('depth-value').innerText = depth;
}

function getCurrentDepthValue() {
    return +document.getElementById('depth').value;
}

function reDraw() {
    const depth = getCurrentDepthValue();
    showCurrentDepthValue(depth);

    drawBinaryTree(depth);
}

reDraw();
