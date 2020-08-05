import React, { useState, useEffect } from 'react'

import CanvasJSReact from '../canvasjs/canvasjs.react'
import Styles from '../styles/Chart.module.css'

const Chart = () => {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart

    const [
        getDataPoints, setDataPoints
    ] = useState({})
    
    useEffect(() => {
        const setting = {
            title : {
                text : 'Result'
            },

            data : [
                {
                    type : 'line',
                    dataPoints : [
                        {
                            x : 30,
                            y : 250
                        },
                        {
                            x : 40,
                            y : 250
                        },
                        {
                            x : 50,
                            y : 550
                        }
                    ]
                }, 
                {
                    type : 'line',
                    dataPoints : [
                        {
                            x : 35,
                            y : 25
                        },
                        {
                            x : 45,
                            y : 250
                        },
                        {
                            x : 55,
                            y : 550
                        }
                    ]
                }
            ]
        }

        setDataPoints(setting)
    })

    return (
        <div>
            <div className={ Styles.header }>
                <p>Disk Schedulling of Algorithms</p>
            </div>
            <div className={ Styles.card }>
                <div className={ Styles.card__content }>
                    <label>Track : </label>
                    <div className="input">
                        <input type="text"/>
                    </div>
                </div>
                <div className={ Styles.card__content }>
                    <label>Head : </label>
                    <div className="input">
                        <input type="text"/>
                    </div>
                </div>
                <div className={ Styles.card__content }>
                    <button>Calculate</button>
                </div>
            </div>
            <div className={ Styles.canvas__container }>
                <CanvasJSChart options = { getDataPoints } />
            </div>
        </div>
    )
}

export default Chart