// import './App.css';
// import 'intro.js/introjs.css';
// import { Steps,Hints } from './intro.js-react';
// import React, { useState } from 'react';

// const App = () => {
//     const [stepsEnabled, setStepsEnabled] = useState(true);
//     const [steps, setSteps] = useState([
//         {
//             element: ".hello",
//             intro: "Hello step"
//         },
//         {
//             element: ".world",
//             intro: "World step"
//         }
//     ])
//     const [initialStep, setInitialStep] = useState(0);
//     const [hintsEnabled, setHintsEnabled] = useState(true);
//     const [hints, setHints] = useState([
//         {
//             element: ".hello",
//             hint: "Hello hint",
//             hintPosition: "middle-right"
//         }
//     ])
//     const onExit = () => {
//         setStepsEnabled(false);
//     };
//     const toggleSteps = () => {
//         setStepsEnabled(!stepsEnabled);
//     };
//     const addStep = () => {
//         const newStep = {
//             element: ".alive",
//             intro: "Alive step"
//         };
//         setSteps(preState => {
//             return (
//                 {
//                     ...preState,
//                     newStep
//                 }
//             )
//         });
//     };
//     const toggleHints = () => {
//         setHintsEnabled(!hintsEnabled);
//     };
//     const addHint = () => {
//         const newHint = {
//             element: ".alive",
//             hint: "Alive hint",
//             hintPosition: "middle-right"
//         };

//         setHints(preState => {
//             return (
//                 {
//                     ...preState,
//                     newHint
//                 }
//             )
//         });
//     };
//     return (
//         <div>
//             <Steps
//                 enabled={stepsEnabled}
//                 steps={steps}
//                 initialStep={initialStep}
//                 onExit={onExit}
//             />
//             <Hints enabled={hintsEnabled} hints={hints} />

//             <div className="controls">
//                 <div>
//                     <button onClick={toggleSteps}>Toggle Steps</button>
//                     <button onClick={addStep}>Add Step</button>
//                 </div>
//                 <div>
//                     <button onClick={toggleHints}>Toggle Hints</button>
//                     <button onClick={addHint}>Add Hint</button>
//                 </div>
//             </div>

//             <h1 className="hello">Hello,</h1>
//             <hr />
//             <h1 className="world">World!</h1>
//             <hr />
//             <h1 className="alive">It's alive!</h1>
//         </div>
//     );
// }


// export default App;

import React, { useRef, useState } from 'react';
import { Button, Divider, Space, Tour } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
const App = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            cover: (
                <img
                    alt="tour.png"
                    src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
                />
            ),
            target: () => ref1.current,
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => ref2.current,
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => ref3.current,
        },
    ];
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Begin Tour
            </Button>

            <Divider />

            <Space>
                <Button ref={ref1}> Upload</Button>
                <Button ref={ref2} type="primary">
                    Save
                </Button>
                <Button ref={ref3} icon={<EllipsisOutlined />} />
            </Space>

            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
        </>
    );
};
export default App;