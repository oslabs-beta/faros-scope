"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MOCK_DATA = [
    {
        "id": "japan",
        "color": "hsl(278, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 48
            },
            {
                "x": "helicopter",
                "y": 177
            },
            {
                "x": "boat",
                "y": 17
            },
            {
                "x": "train",
                "y": 27
            },
            {
                "x": "subway",
                "y": 64
            },
            {
                "x": "bus",
                "y": 67
            },
            {
                "x": "car",
                "y": 256
            },
            {
                "x": "moto",
                "y": 71
            },
            {
                "x": "bicycle",
                "y": 200
            },
            {
                "x": "horse",
                "y": 274
            },
            {
                "x": "skateboard",
                "y": 241
            },
            {
                "x": "others",
                "y": 203
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(52, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 10
            },
            {
                "x": "helicopter",
                "y": 180
            },
            {
                "x": "boat",
                "y": 211
            },
            {
                "x": "train",
                "y": 190
            },
            {
                "x": "subway",
                "y": 46
            },
            {
                "x": "bus",
                "y": 18
            },
            {
                "x": "car",
                "y": 148
            },
            {
                "x": "moto",
                "y": 294
            },
            {
                "x": "bicycle",
                "y": 258
            },
            {
                "x": "horse",
                "y": 38
            },
            {
                "x": "skateboard",
                "y": 215
            },
            {
                "x": "others",
                "y": 281
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(184, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 97
            },
            {
                "x": "helicopter",
                "y": 67
            },
            {
                "x": "boat",
                "y": 179
            },
            {
                "x": "train",
                "y": 81
            },
            {
                "x": "subway",
                "y": 4
            },
            {
                "x": "bus",
                "y": 58
            },
            {
                "x": "car",
                "y": 85
            },
            {
                "x": "moto",
                "y": 93
            },
            {
                "x": "bicycle",
                "y": 282
            },
            {
                "x": "horse",
                "y": 299
            },
            {
                "x": "skateboard",
                "y": 48
            },
            {
                "x": "others",
                "y": 291
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(43, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 62
            },
            {
                "x": "helicopter",
                "y": 182
            },
            {
                "x": "boat",
                "y": 233
            },
            {
                "x": "train",
                "y": 56
            },
            {
                "x": "subway",
                "y": 170
            },
            {
                "x": "bus",
                "y": 171
            },
            {
                "x": "car",
                "y": 93
            },
            {
                "x": "moto",
                "y": 1
            },
            {
                "x": "bicycle",
                "y": 62
            },
            {
                "x": "horse",
                "y": 0
            },
            {
                "x": "skateboard",
                "y": 216
            },
            {
                "x": "others",
                "y": 295
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(6, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 59
            },
            {
                "x": "helicopter",
                "y": 121
            },
            {
                "x": "boat",
                "y": 254
            },
            {
                "x": "train",
                "y": 255
            },
            {
                "x": "subway",
                "y": 162
            },
            {
                "x": "bus",
                "y": 86
            },
            {
                "x": "car",
                "y": 51
            },
            {
                "x": "moto",
                "y": 243
            },
            {
                "x": "bicycle",
                "y": 104
            },
            {
                "x": "horse",
                "y": 106
            },
            {
                "x": "skateboard",
                "y": 273
            },
            {
                "x": "others",
                "y": 247
            }
        ]
    }
];
const line_1 = require("@nivo/line");
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => ((0, jsx_runtime_1.jsx)(line_1.ResponsiveLine, { data: MOCK_DATA, margin: { top: 50, right: 110, bottom: 50, left: 60 }, xScale: { type: 'point' }, yScale: {
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }, yFormat: " >-.2f", axisTop: null, axisRight: null, axisBottom: {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
    }, axisLeft: {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
    }, pointSize: 10, pointColor: { theme: 'background' }, pointBorderWidth: 2, pointBorderColor: { from: 'serieColor' }, pointLabelYOffset: -12, useMesh: true, legends: [
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ] }));
exports.default = MyResponsiveLine;
